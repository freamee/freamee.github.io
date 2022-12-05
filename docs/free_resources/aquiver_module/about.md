---
sidebar_position: 1
---

# 🧭 About

## Info
:::info
**If you're not a developer you don't need to bother with this module, it actually helps us to adapt our scripts to frameworks more easily.**

Aquiver module helps us to handle the specified framework functions.

You can easily just change the selected framework and everything should work automatically.
:::

## Supported frameworks
- **QBCore**
- **ESX Legacy**
- Hopefully more will be added as I develop the script.

## Supported mysql resources
- **oxmysql**
- **mysql-async**

## Install
```shell title="Install module on serverside."
npm i @aquiversdk/server
```
```shell title="Install module on clientside."
npm i @aquiversdk/client -D
```
```shell title="Install module on shared."
npm i @aquiversdk/shared -D
```

## Use in resource(s)
:::info
If you are using an IDE you will have the type checkings by typing **Aquiver.Config**.
:::

```typescript title="Typescript example (serverside)"
import * as Aquiver from "@aquiversdk/server";

Aquiver.Config.Framework = "ESX_LEGACY";
Aquiver.Config.sqlResource = "oxmysql";
```