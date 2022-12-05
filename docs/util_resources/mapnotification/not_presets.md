---
sidebar_position: 3
---

# Presets

Create notification styling presets.

## Info

:::info
**Presets are defined notification styles.**<br/>
You create them under a name, and you just call them with the name, and it will have every settings which set for them. (sound effects, style, etc.)
:::

## Default preset examples
```lua title="examples"
createPreset('default', {
    img = 'logo',
    iconBg = 'rgb(40, 6, 63)',
    iconColor = 'rgb(255,255,255)',
    headerStripe = true,
    bgHeader = false,
    headerFontsize = '1',
    msgFontSize = '0.8',
    leftBorder = 'rgb(255, 123, 0)',
    bgLeft = 'rgba(40, 6, 63, 0.45)',
    bgRight = 'rgba(20, 20, 20, 0.5)',
    textColor = 'rgb(255, 255, 255)',
    headerColor = 'rgb(255, 255, 0)',
    pulseAnimation = true,
    -- soundEffect = '',
    -- soundVolume = 0.015
})

createPreset('error', {
    ikon = 'fas fa-times-circle',
    iconBg = 'rgb(255, 0, 0)',
    iconColor = 'rgb(255,255,255)',
    headerStripe = true,
    bgHeader = true,
    headerFontsize = '1',
    msgFontSize = '0.8',
    leftBorder = 'rgb(255, 0, 0)',
    bgLeft = 'rgba(200, 20, 20, 0.35)',
    bgRight = 'rgba(45, 45, 45, 0.5)',
    textColor = 'rgb(255, 255, 255)',
    headerColor = 'rgb(255, 255, 255)',
    pulseAnimation = true,
    soundEffect = 'error.mp3',
    soundVolume = 0.015
})
```

### Variables
- `img (String)` Add your images in the html/img, folder to appear custom images as the notification icon.
- `ikon (String)` You can use FontAwesome icons with this, if you have both ikon/img variable in your preset settings, then either of them will appear! Only set one, decide icon or image.
- `iconBg (String)` Your icon background color.
- `iconColor (String)` Your icon color. (Only work if you use variable 'ikon')
- `bgHeader (Boolean)` You can add full background to your headers.
- `headerStripe (Boolean)` Under the header there is a small gradient line which you can enable/disable. (This option is not working if you have bgHeader = true)
- `headerFontsize (Number)` Sets the header font-size.
- `msgFontSize (Number)` Sets the message content font-size.
- `leftBorder (String)` Sets the notification left border color.
- `bgLeft (String)` We have our notification background as gradient, this is our gradient starting color.
- `bgRight (String)` Background gradient right side coloring.
- `textColor (String)` Message content text color.
- `headerColor (String)` Header text color.
- `pulseAnimation (Boolean)` = Enable or disable the pulsating animation on your notification.
- `soundEffect (String)` Add sound effect to your notification. If you do not want your notification to have sfx, just simply comment it out or delete the variable. (I suggest .mp3)
- `soundVolume (Number)` Sound effect volume.

### RGB(A) coloring
:::info
If you want to use alpha in your **RGB colorings**, just simply modify the rgb(255,255,255) to rgba(255,255,255, .5)
:::