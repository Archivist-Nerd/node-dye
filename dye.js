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
const colors = {
        //            text colors               end code: 39
        black:   30,
        red:     31,
        green:   32,
        yellow:  33,
        blue:    34,
        magenta: 35,
        cyan:    36,
        white:   37,
        //            text bright colors        end code: 39
        grey:          90,
        gray:          90,
        blackBright:   90,
        redBright:     91,
        greenBright:   92,
        yellowBright:  93,
        blueBright:    94,
        magentaBright: 95,
        cyanBright:    96,
        whiteBright:   97,

        //            background colors         end code: 49
        bgblack:   40,
        bgred:     41,
        bggreen:   42,
        bgyellow:  43,
        bgblue:    44,
        bgmagenta: 45,
        bgcyan:    46,
        bgwhite:   47,
        //            background bright colors  end code: 49
        bggrey:          100,
        bggray:          100,
        bgblackBright:   100,
        bgredBright:     101,
        bggreenBright:   102,
        bgyellowBright:  103,
        bgblueBright:    104,
        bgmagentaBright: 105,
        bgcyanBright:    106,
        bgwhiteBright:   107,
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
      , group = parseInt(code/10)
      ;
    if ( code == undefined) return
    if ( group == 3 || group == 9)
      fg = code; 
    else
      bg = code;
  })

  return `${ansi(bg)+ansi(fg)}${text}${ansi(fg,39)+ansi(bg,49)}`
}
