---
title: 'API Documentation'
date: 'Sep 11, 2022'
description: 'This will show you how to user API'
navigation:
  - label: API Key
  - label: SDK
    children: true
    child1: Install SDK
    child2: Initialize Client
    child3: Deploy Bot
  - label: Bot
    children: true
    child1: Create Bot
    child2: Update Bot
    child3: Remove Bot
  - label: Dialog Flows
    children: true
    child1: Add Dialog Flow
    child2: Update Dialog Flow
    child3: Remove Dialog Flow
  - label: Screens
    children: true
    child1: Add Screen
    child2: Update Screen
    child3: Remove Screen
  - label: Triggers
    children: true
    child1: Add Trigger
    child2: Update Trigger
    child3: Remove Trigger
  - label: Buttons
    children: true
    child1: Add Button
    child2: Update Button
    child3: Remove Button
---

# API Key
To use our service an API Key is needed to authenticate and authorize your bot.
Your API Key is     <span> your_api_key</span>.

 
# SDK

### Install SDK
BotPotter provides developers an SDK to develop and deploy their bots.

```javascript JS
npm install @botpotter/sdk
```
```asp .NET
dotnet add package <PACKAGE_NAME>
```
```python Python
python3 -m pip install @botpotter/sdk
```

### Initialize Client
The BotPotter client needs to be initialized to interact with the BotPotter API.

```javascript JS
import { client as BotPotter } from “@botpotter”
const botPotter = new BotPotter(your_api_key)
```
```asp .NET
dotnet add package <PACKAGE_NAME>
```
```python Python
import @botpotter
botPotter = new BotPotter(your_api_key)
```

### Deploy Bot
Once you are satisfied with your bot it can be deployed to our infrastructure.

```javascript JS
npx botpotter deploy
```
```asp .NET

```
```python Python
python deploy.py
```


<hr/>

# Bot

### Create Bot
A bot is added when using the following method.

```javascript JS
botPotter.createBot({ name: “”, options: { ... } })
```
```asp .NET

```
```python Python

```

### Update Bot
A bot is updated when using the following method.

```javascript JS
botPotter.updateBot({ ... })
```
```asp .NET

```
```python Python

```

### Remove Bot
A bot is removed when using the following method.

```javascript JS
botPotter.removeBot()
```
```asp .NET

```
```python Python

```

<hr/>

# Dialog Flows

### Add Dialog Flows
A dialog flow is added when using the following method.

```javascript JS
botPotter.addDialogFlow({ name: “”, options: { ... } })
```
```asp .NET

```
```python Python

```

### Update Dialog Flow
A dialog flow is updated when using the following method.

```javascript JS
botPotter.updateDialogFlow()
```
```asp .NET

```
```python Python

```

### Remove Dialog Flow
A dialog flow is removed when using the following method.

```javascript JS
botPotter.removeDialogFlow()
```
```asp .NET

```
```python Python

```
<hr/>

# Screens

### Add Dialog Flows
A screen is added when using the following method.

```javascript JS
botPotter.addScreen({ name: “”, options: { ... } })
```
```asp .NET

```
```python Python

```

### Update Screen
A screen is updated when using the following method.

```javascript JS
botPotter.updateScreen()
```
```asp .NET

```
```python Python

```

### Remove Screen
A screen is removed when using the following method.

```javascript JS
botPotter.removeScreen()
```
```asp .NET

```
```python Python

```
