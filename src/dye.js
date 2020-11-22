'use strict';
/**
 * @api             dye
 * @api:npm         @archivistnerd/dye
 * @api:git         https://github.com/Archivist-Nerd/node-dye
 * @api:Licence     MIT
 * @api:Copyright   Copyright (c) 2020 Archivist-Nerd
 *
 *
 * @api:Example:
 *      const dye = require('@archivistnerd/dye');
 */
 const fs = require('fs')
     ;
/**
 * @api:name    dye    returns string with ansi color codes
 * @api:group   functions
 *
 * @api:Param   {String} | {boolean}    string: color options
 *                                      boolean: true=force colors, false=ignore colors
 * @api:Param   {String}                text to enclose in above color options
 *
 * @api:Example:
 *      dye('green','It Works :)')
 */
const colors = {
        //            text colors         end code: 39
        black:   30,
        red:     31,
        green:   32,
        yellow:  33,
        blue:    34,
        magenta: 35,
        cyan:    36,
        white:   37,
        //            background colors   end code: 49
        bgblack:   40,
        bgred:     41,
        bggreen:   42,
        bgyellow:  43,
        bgblue:    44,
        bgmagenta: 45,
        bgcyan:    46,
        bgwhite:   47,
      }
    , ansi = (color,code=color) => (color>0)? `\u001B[${code}m`:''
    , forceColors = true
    ;
module.exports = function dye( choices='', text='' ){
  if ( choices === true || choices === false) return ignoreColors = choices
  if ( !forceColors || typeof choices!=='string' || choices=='' || text=='') return text

  let fg=0
    , bg=0
    ;

  choices.replace(/,/g,'.').split('.').forEach( color => {
    let code = colors[ color.toLowerCase() ]
      ;
    if ( code == undefined) return
    if ( code < 40 )
      fg = code; 
    else
      bg = code;
  })

  return `${ansi(bg)+ansi(fg)}${text}${ansi(fg,39)+ansi(bg,49)}`
}