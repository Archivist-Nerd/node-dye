# node-dye

[![npm version](https://img.shields.io/npm/v/@archivistnerd/dye.svg)](https://www.npmjs.com/package/@archivistnerd/dye)
[![build status](https://api.travis-ci.com/Archivist-Nerd/node-dye.svg)](https://travis-ci.com/Archivist-Nerd/node-dye.svg)

Archivist Nerd's dye Package

> Terminal string styling done SIMPLY

## This Package is in VERY EARLY ALPHA
> This package subject to change QUICKLY, and possibly Often

## Installation

```sh
npm install @archivistnerd/dye
```

## Colors
### text colors
* black
* red
* green
* yellow
* blue
* magenta
* cyan
* white
### background colors
* bgblack
* bgred
* bggreen
* bgyellow
* bgblue
* bgmagenta
* bgcyan
* bgwhite

## Usage (Simple)

```js
'use strict';

const dye = require('@archivistnerd/dye');

console.log([
    dye('red','this text is red'),
    dye('bgwhite,blue','blue text, white background')
  ].join('\n')
)
```

## License

MIT