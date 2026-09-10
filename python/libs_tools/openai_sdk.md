---
title: OpenAI SDK
date: 2026/08/20 21:57
location: Dongguan
tags: Learn Python AI-Agent
---

Most of the LLM provider using [OpenAI SDK](https://github.com/openai/openai-python) as standard,
(e.g. [Deepseek](https://www.deepseek.com), [KIMI](https://www.kimi.com)).
You can use [LanChain](https://www.langchain.com) instead, but it is so heavy and over-designed.
So it is reliable to use **OpenAI SDK** for agent developers.

OpenAI provide 2 kinds of the API for developers,
[Responses API](https://developers.openai.com/api/reference/resources/responses)
and [Chat Completions](https://developers.openai.com/api/reference/resources/chat).
Using the new API, Responses API, is recommended.
I will show you how to using OpenAI Python SDK and relatively inexpensive Deepseek API. 


## Initialization
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
The best practices are using `.env` file to store the API key
and write **.env** into the `.gitignore` file to makesure API key doesn't leak.
:::

## Multiple rounds of conversation
### Create history list
Based on the API is stateless, we need to store state manually.
```python
history = []
```
### Call and output step by step
```python
user_prompts = [
    "How long is the development of the asynchronous programming in Python?",
    "How about its ecosystem?",
    "Is it friendly debug?",
    "Is it worth using on a large scale?"
]
```
The LLM will answer the last chat content which in dictionary list `history`.
And we need to store current LLM response output using `history.extend(resp.output)`.
```python
for user_prompt in user_prompts:
    history.append({"role": "user", "content": user_prompt})
    resp = client.responses.create(
        model=model,
        instructions="Talk like the pirate.",
        input=history
    )
    history.extend(resp.output)
    
    print(resp.output_text)
```

## Structured output
### Define structure
We can use [pydantic model](https://pydantic.dev/docs/validation).
```python
from pydantic import BaseModel

class Country(BaseModel):
    name: str
    capital: str
    language: List[str]
```
### Call and output
We can input the structure argument using the parameter keyword `text_format`.
```python
resp = client.responses.parse(
    model=model,
    input="Introduce the United States.",
    text_format=Country
)

country = resp.output_parsed
```

## Function calling
### Define tools function
This will show you the most simple function.
```python
def get_weather(city: str):
    return {
        "city": city,
        "temperature": 32,
        "humidity": 0.87
    }
```
### Define tools
OpenAI Python SDK needs [JSON schema](https://json-schema.org) to know the function which one calling
and what arguments inputing.
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
### First request
The program can get function name which needed to call and its keyword arguments. 
```python
history = []
history.append({"role": "user", "content": "I want to know the weather in Dongguan."})
resp = client.responses.create(
    model=context.CONFIG["LLM"]["chat_model"],
    tools=tools,
    input=history
)
history.extend(resp.output)
```
### Step by step execute the calling
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
### Final request
```python
resp = client.responses.create(
    model=context.CONFIG["LLM"]["chat_model"],
    input=history
)
history.extend(resp.output)
print(resp.output_text)
```
