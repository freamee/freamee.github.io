---
sidebar_position: 4
---

# Triggering

Triggering the notifications.

## Serverside
```lua title="Using export functions"
exports['av_notify']:AQUIVER_NOTIFY(source, type, time, header, msg)

-- Full example
exports['av_notify']:AQUIVER_NOTIFY(source, 'error', 5, 'Error header', 'Error message content')
```
```lua title="Using events"
TriggerClientEvent('AV:NOTIFY:SEND', source, type, time, header, msg)

-- Full example
TriggerClientEvent('AV:NOTIFY:SEND', source, 'error', 5, 'Error header', 'Error message content')
```
## Clientside
```lua title="Using export functions"
exports['av_notify']:AQUIVER_NOTIFY(type, time, header, msg)

-- Full example
exports['av_notify']:AQUIVER_NOTIFY('info', 5, 'Info header', 'Today was a good day.')
```
```lua title="Using events"
TriggerEvent('AV:NOTIFY:SEND', type, time, header, msg)

-- Full example
TriggerEvent('AV:NOTIFY:SEND', 'info', 5, 'Info header', 'Today was a good day.')
```