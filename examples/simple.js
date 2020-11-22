'use strict';
/**
 * @example         simple
 * @api:npm         @archivistnerd/dye
 * @api:git         https://github.com/Archivist-Nerd/node-dye
 * @api:Licence     MIT
 * @api:Copyright   Copyright (c) 2020 Archivist-Nerd
 */
const dye = require('../.');

console.log([
    dye('red','this text is red'),
    dye('bgwhite,blue','blue text, white background')
  ].join('\n')
)