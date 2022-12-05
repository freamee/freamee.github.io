---
sidebar_position: 3
---

# Events


### Client -> Server
- onActionShapeEnter (shapeRemoteId: number)
- onActionShapeLeave (shapeRemoteId: number)
- onPedInteractionPress (pedRemoteId: number)
- onObjectInteractionPress (objectRemoteId: number)


### Client
- onActionShapeEnter (shapeRemoteId: number)
- onActionShapeLeave (shapeRemoteId: number)
- onObjectStreamIn (objectRemoteId: number)
- onObjectStreamOut (objectRemoteId: number)
- onObjectRaycast (objectRemoteId: number))
- onPedRaycast (pedRemoteId: number)
- onNullRaycast ()

### Server
- onObjectCreated (objectRemoteId: number)
- onObjectDestroyed (objectData)
- onObjectVariableChange (objectRemoteId: number, key: string, value: any)
- onPedCreated (pedRemoteId: number)
- onPedDestroyed (pedData)