'use strict';
const localRequire = true;        //  required from ../src/{package} or ../.
/**
 * @test:package     @archivistnerd/dye
 * @test:name        @archivistnerd/dye/test
 * @test:licence     MIT
 * @test:copyright   Copyright (c) 2020 Archivist-Nerd
 */
let describe = require('@archivistnerd/testlib').describe
  , dye = require( localRequire? '../src/dye': '../.' )
  ;
/**
 * clear the console, and display header
 */
console.clear()
console.log('Testing: @archivistnerd/dye\n')
/**
 * @test:Errors        Test it throws the proper errors
 */
describe( '--all invalid parameters should return empty string', it=>{
  it('no parameters', it=>{
    return ( dye() == '' )
  })

  it('colors not a string', it=>{
    return ( dye(31,'') == '' )
  })

  it('valid colors no text', it=>{
    return ( dye('red') == '' )
  })

  it('valid colors empty text string', it=>{
    return ( dye('red','') == '' )
  })
});
/**
 * @test:Valid        Valid tests, should not throw any errors
 */
describe( '--valid functions', it=>{
  let ansi = (color,code=color) => (color>0)? `\u001B[${code}m`:''
    ;
  it('no valid colors', ()=>{
    let text    = 'is this red?'
      , results = dye(',....,.,.,.,.,,,,....,,.,.,.,.    ,.bmw',text)
      ;
    return ( results == `${text}` )
  })

  it('red text', ()=>{
    let text    = 'is this red?'
      , results = dye('red',text)
      ;
    return ( results == `${ansi(31)}is this red?${ansi(39)}` )
  })

  it('background white', ()=>{
    let text    = 'is this all white?'
      , results = dye('bgwhite',text)
      ;
    return ( results == `${ansi(47)}${text}${ansi(49)}` )
  })

  it('combo: white background, red text', ()=>{
    let text    = 'is this text red on a white background?'
      , results = dye('bgwhite.red',text)
      ;
    return ( results == `${ansi(47)+ansi(31)}${text}${ansi(39)+ansi(49)}` )
  })

  it('combo: many options (keep last valid)', ()=>{
    let text    = 'is this text red on a white background?'
      , results = dye('bgblack.blue.bggreen.yellow.bgwhite.green.yellow.red',text)
      ;
    return ( results == `${ansi(47)+ansi(31)}${text}${ansi(39)+ansi(49)}` )
  })

  it('mixes comma and period seperators', ()=>{
    let text    = 'is this text red on a white background?'
      , results = dye('bgblack,blue.bggreen.yellow,bgwhite.green,yellow.red,,',text)
      ;
    return ( results == `${ansi(47)+ansi(31)}${text}${ansi(39)+ansi(49)}` )
  })
});

// console.log( process.env )

/**
 *   output success/fail results
 */
if ( describe().length===0 )
  console.log('\n\n   *** ALL TESTS SUCCESSFUL ***');
else {
  console.log('\n\n   *** !!!SOME TESTS FAILED!!! ***')
  console.log( describe() )
  process.exit(1)
}