# How to enforce TypeScript types in the runtime environment

In this example repository, I am going to show you how to enforce TypeScript types in the runtime environment in your projects

I also published article on:

- [Medium - How to enforce TypeScript types in the runtime environment](#how-to-enforce-typescript-types-in-the-runtime-environment)
- [My Gists - How to enforce TypeScript types in the runtime environment](https://gist.github.com/phatnguyenuit/8c5d2acb9a458f8f3962a48b5cb79737)

## Table of contents
- [How to enforce TypeScript types in the runtime environment](#how-to-enforce-typescript-types-in-the-runtime-environment)
  - [Table of contents](#table-of-contents)
  - [Feature](#feature)
  - [Usage](#usage)
  - [Scripts](#scripts)
    - [1. `yarn generate`](#1-yarn-generate)
    - [Notes](#notes)
    - [2. `yarn build`](#2-yarn-build)
    - [3. `npx ts-node src/main.ts`](#3-npx-ts-node-srcmaints)
    - [4. `node dist/main.js`](#4-node-distmainjs)
  - [References](#references)

## Feature

- ✅ Generate validators for batch of types definition files via script code
- ✅ Check whether file has changed by using `folder-hash`. Compare checksum hash value to know file changed

## Usage

- Clone this repository into your local machine
- Install node modules by using `yarn install` or `npm install`
- Run script to generate validators `yarn generate`

## Scripts

### 1. `yarn generate`

This script helps us to generate multiple validator files, with matched types file `**/*.types.ts` under `src` folder.

### Notes

If you are **Windows** users, you should open **WSL (Windows Subsystem of Linux)** terminal to run the script above. Because this does not work well in Windows platform.

Related to this issue, I leave here the issue reference from the `typescript-json-validator` repository [Not working in windows #36](https://github.com/ForbesLindesay/typescript-json-validator/issues/36#issuecomment-977836986)

### 2. `yarn build`

Build our TypeScript project to JavaScript using `tsc` CLI command supported by `typescript`.

### 3. `npx ts-node src/main.ts`

Run TypeScript file `src/main.ts` directly, without compiling to JavaScript

Example run result

![Example result with TypeScript file](https://user-images.githubusercontent.com/19201982/143566022-f943d5fc-043a-4c95-8d1e-85297bf980e5.png)

### 4. `node dist/main.js`

After run `build` script, you can get the project build in `dist` folder.

So now, just use `node dist/main.js` to run the example.

It still works as expected like above.

![Example result with JavaScript file](https://user-images.githubusercontent.com/19201982/143575073-60f6cd7c-0022-4b2b-a6c8-f4135509d78f.png)

## References

- [TypeScript](https://github.com/Microsoft/TypeScript)
- [TypeScript JSON Validator](https://github.com/ForbesLindesay/typescript-json-validator)