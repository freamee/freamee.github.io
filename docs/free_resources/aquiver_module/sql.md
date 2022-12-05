---
sidebar_position: 5
---

# 🎈 SQL setup & typing

## Info
:::info
I have created a custom database class inside the module.

It will handle the sql rows and tables easier, and has typechecking for Typescript.
:::

## Example use (Typescript)
```typescript title="Adding the sql table and define the rows. (Example from PokerTypescript resource)"
import * as Aquiver from '@freamee/server';

export interface PokerDatabaseInterface {
    identifier: string;
    img: string;
    stat_betchips: number;
    stat_wonchips: number;
    stat_played: number;
    stat_wongames: number;
}

export class PokerBase implements PokerDatabaseInterface {
    identifier: string;
    img: string;
    stat_betchips: number;
    stat_played: number;
    stat_wonchips: number;
    stat_wongames: number;

    constructor(data: PokerDatabaseInterface) {
        this.identifier = data.identifier;
        this.img = data.img;
        this.stat_betchips = data.stat_betchips;
        this.stat_played = data.stat_played;
        this.stat_wonchips = data.stat_wonchips;
        this.stat_wongames = data.stat_wongames;
    }
}

export class PokerBaseRepository extends Aquiver.BaseDatabase<PokerBase, PokerDatabaseInterface> {
    constructor() {
        super("poker_players");
    }
    constructModel(row: PokerDatabaseInterface): PokerBase {
        return new PokerBase(row);
    }
}
```
```typescript title="Exporting the sub classes. (Example from PokerTypescript)"
import { PokerBaseRepository } from './models/model-player';

export class ServerDatabase {
    static PokerRepository = new PokerBaseRepository();
}
```

### Updating mysql row.
```typescript title="Update example."
ServerDatabase.PokerRepository.update({
    where: {
        identifier: this.identifier,
    },
    set: {
        stat_played: this.stat_played,
    },
});
```
### Find mysql row.
```typescript title="Find function example."
ServerDatabase.PokerRepository.find({
    where: {
        identifier: this.identifier,
    },
    limit: 1,
}).then((a) => {
    const data = a[0];
    this.img = data.img;
    this.stat_betchips = data.stat_betchips;
    this.stat_played = data.stat_played;
    this.stat_wonchips = data.stat_wonchips;
    this.stat_wongames = data.stat_wongames;
});
```
### Inserting data to mysql
```typescript title="Insert function example"
ServerDatabase.PokerRepository.insert({
    identifier: this.identifier,
    stat_betchips: 0,
    stat_played: 0,
    stat_wonchips: 0,
    stat_wongames: 0,
}).then(() => {
    this.load();
});
```