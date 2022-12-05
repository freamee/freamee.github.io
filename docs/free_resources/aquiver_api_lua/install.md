---
sidebar_position: 2
---

# Install

1. Import the .sql table
2. Load the files from your fxmanifest.lua

```lua
server_scripts {
    '@aquiver_lua/_modules/shared_lib.lua',
    '@aquiver_lua/_modules/server_lib.lua'
}

client_scripts {
    '@aquiver_lua/_modules/shared_lib.lua',
    '@aquiver_lua/_modules/client_lib.lua'
}
```

> After requesting them in the fxmanifest.lua file, you will be able to call and trigger the module functions.


## Dependencies
- oxmysql