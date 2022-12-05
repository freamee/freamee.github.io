---
sidebar_position: 3
---

# Developing


## Adding new objects
If you want to add additional objects(props) open `source-files/shared/objects.json`.

### Images
Images should be located in the `source-files/nui/src/assets/props` folder.

The name of the image should be the `object_model.png`.

:::info
If you do not add an image for the model, the NUI will not crash instead it will load the 404 missing image. (svg)
:::

## Modifying keybinds
Control keybinds can be found inside the `source-files/shared/shared-config.ts` file.
```typescript
CONTROLS: {
    PLACE_PROP: 24, // Left click
    PLACE_FLOOR: 24, // Left click
    PLACE_WALL: 24, // Left click
    ENTER_HOUSE: 38, // E
    OPEN_BUY_MENU: 246, // Z OR Y (depends on keyboard)
    LOCK_HOUSE: 311, // K
    EXIT_HOUSE: 38, // E
    WORLD_CURSOR: 244, // M
    ROTATE: 45, // R
    NUI_CURSOR_SWITCH: 22, // SPACE

    DELETE_GRABBED_PROP: 214, // DEL
    SAVE_GRABBED_PROP: 215, // ENTER
    CANCEL_GRABBED_PROP: 202, // Escape or Backspace it depends.

    PREVIOUS: 174, // Arrow left
    NEXT: 175, // Arrow right
}
```

## Adding additional interiors
Can be found inside the `source-files/shared/shared-config.ts` file.

Always give them separate **object keys**.
```typescript
INTERIORS: {
    '1': {
        pos: { x: 151.446, y: -1007.765, z: -99 },
        name: TSL.list.INTERIOR_1,
    },
    '2': {
        pos: { x: 266.088, y: -1006.959, z: -100.895 },
        name: TSL.list.INTERIOR_2,
    },
    '3': {
        pos: { x: 346.747, y: -1012.522, z: -99.196 },
        name: TSL.list.INTERIOR_3,
    },
    '4': {
        pos: { x: -30.9122, y: -595.524, z: 80.03 },
        name: TSL.list.INTERIOR_4,
    },
    '5': {
        pos: { x: -17.54, y: -588.598, z: 90.114 },
        name: TSL.list.INTERIOR_5,
    },
    '6': {
        pos: { x: -174.21, y: 497.2907, z: 137.666 },
        name: TSL.list.INTERIOR_6,
    },
    '7': {
        pos: { x: 117.3731, y: 559.258, z: 184.304 },
        name: TSL.list.INTERIOR_7,
    },
    'CUSTOM': {
        pos: { x: 0, y: 0, z: 700 },
        name: TSL.list.INTERIOR_CUSTOM,
    },
}
```