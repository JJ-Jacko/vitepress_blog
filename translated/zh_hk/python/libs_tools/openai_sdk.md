大部分大型語言模型服務都以 [OpenAI SDK](https://github.com/openai/openai-python) 作為標準，
例如 [Deepseek](https://www.deepseek.com) 同 [KIMI](https://www.kimi.com)。
你亦可以用 [LanChain](https://www.langchain.com) 作為替代方案，不過佢比較笨重，設計亦過於繁複。
所以對開發者嚟講，使用 **OpenAI SDK** 先可靠。

OpenAI 為開發者提供兩種 API，
[Responses API](https://developers.openai.com/api/reference/resources/responses)
同 [Chat Completions](https://developers.openai.com/api/reference/resources/chat)。
推薦使用新版 API：Responses API。
以下示範如何使用 OpenAI Python SDK 配合成本較低嘅 Deepseek API。


## 初始化
```toml [pyproject.toml]
dependencies = [
    "pydantic",
    "openai"
]
```
```python
import openai

base_url = "https://api.deepseek.com"
api_key = "sk-xxx",
model = "deepseek-v4-flash"

client = openai.Client(
    api_key=api_key,
    base_url=base_url
)
```
::: warning 警告
最佳做法係用 `.env` 檔案儲存 API key，
並將 **.env** 加入 `.gitignore` 檔案，避免 API key 外洩。
:::

## 多輪對話
### 建立列表儲存歷史記錄
由於 API 係無狀態嘅，我哋需要手動保存狀態。
```python
history = []
```
### 逐步調用同輸出
```python
user_prompts = [
    "Python 入面的非同步編程發展咗幾耐？",
    "生態系統點樣？",
    "方便 Debug 嗎？",
    "值得大規模使用嗎？"
]
```
LLM 會回答字典列表 `history` 中最後一則對話內容。
然後我哋需要用 `history.extend(resp.output)` 儲存目前 LLM 嘅回應。
```python
for user_prompt in user_prompts:
    history.append({"role": "user", "content": user_prompt})
    resp = client.responses.create(
        model=model,
        instructions="用海盜口吻說話",
        input=history
    )
    history.extend(resp.output)
    
    print(resp.output_text)
```

## 結構化輸出
### 定義結構
我哋可以用 [pydantic model](https://pydantic.dev/docs/validation)。
```python
from pydantic import BaseModel

class Country(BaseModel):
    name: str
    capital: str
    language: List[str]
```
### 調用同輸出
我哋可以透過參數關鍵字 `text_format` 傳入結構化輸出參數。
```python
resp = client.responses.parse(
    model=model,
    input="介紹一下美國",
    text_format=Country
)

country = resp.output_parsed
```

## 調用函數
### 定義工具函數
呢度將會向你展示最簡單嘅函數。
```python
def get_weather(city: str):
    return {
        "city": city,
        "temperature": 32,
        "humidity": 0.87
    }
```
### 定義工具
OpenAI Python SDK 需要 [JSON schema](https://json-schema.org)
嚟了解要調用邊個函數同要傳入邊啲參數。
```python
tools = [{
    "type": "function",
    "name": "get_weather",
    "description": "Get today's weather infomations of the city",
    "parameters": {
        "type": "object",
        "properties": {
            "city": {
                "type": "string",
                "description": "Object city."
            }
        },
        "required": ["city"]
    }
}]
```
### 第一輪請求
程式能夠取得需要調用嘅函數名同佢嘅關鍵字參數。
```python
history = []
history.append({"role": "user", "content": "幫我睇下東莞天氣點樣？"})
resp = client.responses.create(
    model=context.CONFIG["LLM"]["chat_model"],
    tools=tools,
    input=history
)
history.extend(resp.output)
```
### 逐步執行調用
```python
for item in resp.output:
    if item.type != "function_call":
        continue
    
    if (func_name := item.name) != "get_weather":
        continue
    
    kwargs: Dict[str, Any] = json.loads(item.arguments)

    if func_name == "get_weather":
        res = get_weather(**kwargs)
    
    history.append({
        "type": "function_call_output",
        "call_id": item.call_id,
        "output": str(res),
    })
```
### 最終請求
```python
resp = client.responses.create(
    model=context.CONFIG["LLM"]["chat_model"],
    input=history
)
history.extend(resp.output)
print(resp.output_text)
```
