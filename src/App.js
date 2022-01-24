//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import './unicode/Checker.js';
import { Checker } from './unicode/Checker.js';
import './unicode/Unicode.js';
import { Unicode } from './unicode/Unicode.js';

function App() {
  Test(); //Tests if Checker and Unicode are 'online'
  return(
    <div className="App">
      <header className="App-header">
        <div className="Title">
          <h1>Unicode Converter</h1>
          <hr style={{width:'100%'}}/>
        </div>
        <div className="Input">
          <p>
            Input Unicode:
          </p>
          <input className="Input-unicode" name="input"/>
        </div>
        <div className="Output">
          <p>
            Output:
          </p>
          <textarea readOnly className="Output-unicode" name="output" style={{marginBottom:'2%'}} />
        </div>
        <div className="Button-grid">
          <button className="Button-convert" name='convert' onClick={Convert}>
            Convert
          </button>
          <button className="Button-reset" name='reset' onClick={Reset}>
            Reset
          </button>
        </div>
        <div>
          <hr style={{width:'100%'}}/>
          <p>CSARCH2 S13 - Group 7 (2022)</p>
        </div>
      </header>
    </div>
  );
}

/**
 * Checks if Unicode and Checker is online
 */
function Test(){
  let u = new Unicode();
  let c = new Checker();
  u.testUnicode();
  c.testChecker();
  u = null;
  c = null;
}

function Convert(){
  let u = new Unicode();
  let c = new Checker();

  var input = ""
  /**
   * TODO
   * Extract text data from user-input to input variable 
   */

  if(c.CheckInput != null)
    u.SetUnicode(input);

  /**
   * TODO
   * Choose among two ways of getting resutling values:
   * 1. As a list: u.GetAll(); contains UTF8,16,32, and char equivalent of the input Unicode
   * 2. Individual: u.GetUTF8(), u.GetUTF16(), u.GetUTF32(), u.GetUTFChar()
   */
}

function Reset(){
  /**
   * Delete contents of input and output
   */
}

export default App;