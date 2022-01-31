import React, { Component } from 'react';
import { Unicode } from './Unicode';
import { Checker } from './Checker';
import { Input, Alert } from 'antd';
import 'antd/dist/antd.min.css';
import './assets/styles/App.css';

const { Search } = Input;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {utf8: '', utf16: '', utf32: '', symbol: 'A', clipboard: ''};
    this.unicode = new Unicode();
    this.checker = new Checker();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClipboard = this.handleClipboard.bind(this);
  }

  handleChange(value) {
    if (value === "") {
      this.setState({utf8: ""});
      this.setState({utf16: ""});
      this.setState({utf32: ""});
      this.setState({symbol: ""});
    } else if (this.checker.CheckInputBool(value)) {
      this.unicode.SetUnicode(this.checker.CheckInput(value)); //to ensure a cleaner input to SetUnicode
      this.setState({utf8: this.unicode.GetUTF8});
      this.setState({utf16: this.unicode.GetUTF16});
      this.setState({utf32: this.unicode.GetUTF32});
      this.setState({symbol: this.unicode.GetChar});
    } else {
      this.setState({utf8: "INVALID"});
      this.setState({utf16: "INVALID"});
      this.setState({utf32: "INVALID"});
      this.setState({symbol: "INVALID"});
    }

    this.setState({clipboard: ''});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleClipboard(utf) {
    switch(utf) {
      case 1: navigator.clipboard.writeText(this.state.utf8); break;
      case 2: navigator.clipboard.writeText(this.state.utf16); break;
      case 3: navigator.clipboard.writeText(this.state.utf32); break;
      case 4: navigator.clipboard.writeText(this.state.symbol); break;
      default: ;
    }
    this.setState({clipboard: 'Copied to clipboard!'});

    this.handleAlert()
  }

  handleAlert(){
      (async () => {
        document.getElementById('alert-div').style.display = 'block';
        document.getElementById('output').style.marginTop = "2.05%";
         await setTimeout(()=>{
           document.getElementById('alert-div').style.display = 'none';
           document.getElementById('output').style.marginTop = "5%";
         },2000)
      })()    
  }

  render() {
    return (
      <div id="body">
        <div id="header">
          <p id="header-text">UNICODE TO UTF CONVERTER</p>
        </div>
        <div id="search">
          <Search size="large" placeholder="Enter Unicode" onSearch={this.handleChange} enterButton />
          <p></p>
          <div id='alert-div'>
            <Alert message={this.state.clipboard} type="success"  showIcon/>
          </div>
          
        </div>
        <div id="output">
          <div id="utf" className="output">
            <h1 onClick={() => this.handleClipboard(1) }>UTF-8: <span className="output-text">{this.state.utf8}</span></h1>
            <h1 onClick={() => this.handleClipboard(2)}>UTF-16: <span className="output-text">{this.state.utf16}</span></h1>
            <h1 onClick={() => this.handleClipboard(3)}>UTF-32: <span className="output-text">{this.state.utf32}</span></h1>
          </div>
          
          <div id="symbol-div" className="output">
            <h1 onClick={() => this.handleClipboard(4)} id="symbol">{this.state.symbol}</h1>
          </div>
        </div>
        <div id="footer" className="footer">
          
          <a href="https://github.com/cyril-deguzman/ascii-converter">
            <p>Link to Git Repo</p>
          </a>
        </div>
      </div>
    );
  }
}

export default App