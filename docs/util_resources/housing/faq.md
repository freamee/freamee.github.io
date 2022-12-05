---
sidebar_position: 4
---

# FAQ & Common Issues

Commons issues & Frequently asked questions.

## Logging out inside the house.
You will not load back inside the property after a relog, I did not wanted to mess with the EntityRoutingBuckets on login.

You have to implement this method to your server.

### How to?
Search for **PlayerDropped** inside the resource's folder, you will find the function when the logout happens.

You should get the Player Position at the time, and update your mysql user to save the position.

```typescript title="Example snippet"
static playerDropped(source: string | number) {
    if (typeof source !== 'number') source = Number(source);
    
    const Player = this.at(source);
    if(Player) {

        /** If dimension not the default */
        // if(Player.dimension != 0) {
        //     const House = HouseManager.at(Player.dimension);
        //     if(House) {
        //         const houseEntrance = House.position;
        //         /** Update your mysql database to set the player position at the house entrance when logout happens. */
        //     }
        // }

        /** Delete at the end. */
        if (this.Players.has(source)) {
            this.Players.delete(source);
        }
    }
}
```

## Doors (in building)
:::danger
We had an issue with the doors if we unfrooze them they fell through the entire map.
:::
Comes from that you can not really place openable doors, if you are building a house.

## Double cursor when building, why?
People will still complain about the performance, but imagine how much worse it would be if you could not disable the ingame mouse, and it would constantly render the needed informations for it.

Also, it would be so hard to keep track of the keybinds & camera movements, if we would have the input with the NUI.

## Players can hear each other in a diferent house.
Dimension system works with FiveM native SetEntityRoutingBucket.

I think the newer voice resources are upgraded for this native. If your server has this issue, you should modify the voice resource by checking that the player<->player GetEntityRoutingBucket are the same or not.