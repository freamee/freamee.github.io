---
sidebar_position: 1
---

# About

Basic things to know about the Roulette.

![](roulette_main.jpeg)

## Basic
:::caution
This resource is standalone, so it is not linked to any framework, comes from that you will need to adjust some functions to fit your server, explanations below.
:::
:::caution
The script is written in Typescript, so you will have to compile the server and clientside in order to make the script start.
:::

## Links
- [Forum post](https://forum.cfx.re/t/sale-standalone-paid-aquiver-roulette-v2/4791076)
- [Showcase video (version 1.0)](https://www.youtube.com/watch?v=MKRyJRtqKNo&ab_channel=FreameeEdits)

## Version 1.0 vs 2.0
### Changelogs
- The script is written in Typescript, many things are simplified and easier to manage (the winners and other things).
- Missing Roulette sound effects are now added. (Ball popping, and others.)
- We have a log system now when we are sitting at the table. (We know what bets were put in the round, and other things.)
- More editable config. (Number multipliers, load default ipl, etc.)
- We can hide the table bets now with key V.
- Added big pile of chips after +10000 chips bets, we had bad times when the big pots were on the tables. (Thats why we added the ability to hide the object(s).)
- Changed the CEF UI a little bit, now you can see three things: Your owned chips, Your bets in the round(all), the current bet input (what you will put with the click).
- We fixed the min&max bets, now they are functional and you can not bet more than the limit or less.
- We added a DrawText3D to the tables. (shows: Time, Status message, Min & Max limits)