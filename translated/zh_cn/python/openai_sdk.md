---
title: OpenAI SDK
date: 2026/08/20 21:57
location: 东莞
tags: 学习 Python 智能体
---

大部分的大语言模型使用 [OpenAI SDK](https://github.com/openai/openai-python) 作为标准，
比如 [Deepseek](https://www.deepseek.com) 和 [KIMI](https://www.kimi.com)。
你可以使用 [LanChain](https://www.langchain.com) 作为平替，但他太重而且过度设计了。
所以对于开发者来说，使用 **OpenAI SDK** 才是可靠的。

OpenAI 为开发者提供了 2 种接口,
[Responses API](https://developers.openai.com/api/reference/resources/responses)
和 [Chat Completions](https://developers.openai.com/api/reference/resources/chat)。
推荐使用新版接口 Responses API。
我将会向您展示如何使用 OpenAI Python SDK 较为便宜的 Deepseek API。


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
::: warning
最佳实践是使用文件 `.env` 去保存 API key，
并且将 **.env** 写入文件 `.gitignore` 以确保 API key 不会泄露。
:::

## 多轮对话
### 创建列表存历史记录
由于接口是无状态的，我们需要手动保存状态。
```python
history = []
```
### 逐步调用和输出
```python
user_prompts = [
    "Python 里面的异步编程发展了多久？",
    "生态怎么样？",
    "方便调试吗？",
    "值得大规模使用吗？"
]
```
大语言模型将会回答最后一条在字典列表 `history` 的聊天内容。
然后我们需要用 `history.extend(resp.output)` 保存当前大语言模型的响应。
```python
for user_prompt in user_prompts:
    history.append({"role": "user", "content": user_prompt})
    resp = client.responses.create(
        model=model,
        instructions="海盗一样的讲话风格",
        input=history
    )
    history.extend(resp.output)
    
    print(resp.output_text)
```

## 结构化输出
### 定义结构
我们可使用 [pydantic model](https://pydantic.dev/docs/validation)。
```python
from pydantic import BaseModel

class Country(BaseModel):
    name: str
    capital: str
    language: List[str]
```
### 调用和输出
我们可以传入结构参数通过参数关键字 `text_format`。
```python
resp = client.responses.parse(
    model=model,
    input="介绍一下美国",
    text_format=Country
)

country = resp.output_parsed
```

## 函数调用
### 定义工具函数
这里将会向你展示最简单的函数。
```python
def get_weather(city: str):
    return {
        "city": city,
        "temperature": 32,
        "humidity": 0.87
    }
```
### 定义工具
OpenAI Python SDK 需要 [JSON schema](https://json-schema.org)
去了解哪个函数要调用和什么参数要传入。
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
### 首轮请求
程序能够获取需要调用的函数名和它的关键字参数。
```python
history = []
history.append({"role": "user", "content": "帮我看看东莞的天气怎么样"})
resp = client.responses.create(
    model=context.CONFIG["LLM"]["chat_model"],
    tools=tools,
    input=history
)
history.extend(resp.output)
```
### 逐步执行调用
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
### 最终请求
```python
resp = client.responses.create(
    model=context.CONFIG["LLM"]["chat_model"],
    input=history
)
history.extend(resp.output)
print(resp.output_text)
```
