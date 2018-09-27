import React, { Component } from 'react';
import { options } from './Components/elements';
import MainForm from './Components/MainForm';
import CustomForm from './Components/CustomForm';
import './App.css';

class App extends Component {
  state = {
    value: "",
    data: options,
    active: true,
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value.toLowerCase() });
  }

  handleClickMain = (e) => {
    e.preventDefault();
    this.setState({ active: false });
  }

  handleClickCustom = (e) => {
    e.preventDefault();
  }
  
  render() {
    const { value, active, data } = this.state;

    return (
      <div>
      {active ?
        <MainForm 
          value={value}
          onChange={this.handleChange}
          onClick={this.handleClickMain}
          />
          :
          <CustomForm 
            value={value}
            onChange={this.handleChange}
            onClick={this.handleClickCustom}
            data={data}
          />}
      </div>
    );
  }
}

export default App;