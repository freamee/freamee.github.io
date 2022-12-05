---
sidebar_position: 2
---

# Installation

Installing & dependencies.

:::danger
Please do not rename the resource, leave it as: `av_advanced_crypto`.
If you rename the resource, maybe you will have some errors, and you wont receive notification(s) about the updates.
:::

## Dependencies
- [x] NodeJS (for installing with npm.)
- [x] Server version atleast 4752. (to support lua54 & escrow)
- [x] Aquiver module supported framework & mysql resource. See: [Aquiver module compatibles](../../aquiver_module/about.md)

## Install
1. Extract the .zip and copy the folder in your fivem resources folder.
2. Import the .sql file into your database.
3. Modify the translation files. `path: source-files\shared\@types`
4. Set your framework and sql resource in the `server.ts` file.
5. Set your framework in the `client.ts` file.
6. Run the `full_install.bat` file. `path: dev/full_install.bat`. This will automatically install the required modules & compile the script to Javascript.

### Paths
Locales: `source-files/shared/@types/shared-translations.ts`