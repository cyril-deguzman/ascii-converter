import React from 'react';
import { Unicode } from './Unicode';

class UserInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.unicode = new Unicode();
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
    }
  
    render() {
      this.unicode.SetUnicode(this.state.value);
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" placeholder="Enter UNICODE" value={this.state.value} onChange={this.handleChange} />
          </label>
          <h1>UTF8: {this.unicode.GetUTF8}</h1>
          <h1>UTF16: {this.unicode.GetUTF16}</h1>
          <h1>UTF32: {this.unicode.GetUTF32}</h1>
          <h1>Output (xx xx xx format): {this.unicode.GetFormatted}</h1>
        </form>
      );
    }
  }

  export default UserInput;