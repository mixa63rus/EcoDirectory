import React, { Component } from 'react';
import Select from 'react-select';
import './App.css';
import {options} from './elements';

const customStyles = {
  option: (base, { isDisabled, isSelected }) => ({
    ...base,
    // borderBottom: '1px dotted pink',
    padding: 10,
    width: "500px",
    backgroundColor: isDisabled
        ? null
        : isSelected ? "#DCDCDC" : null,
      color: isDisabled
        ? '#ccc'
        : isSelected
          ? "blue"
          : "black",
      cursor: isDisabled ? 'not-allowed' : 'default',
  }),
  menu: (styles) => ({ ...styles, width: "500px"}),
  control: styles => ({ ...styles, backgroundColor: 'white', width: "500px" }),
  singleValue: (base, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...base, opacity, transition };
  }
}

class App extends Component {
  state = {
    selectedOption: null,
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  
  render() {
    const { selectedOption } = this.state;

    return (
      <div>
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        styles={customStyles}
      />
      {this.state.selectedOption ? <h1>{this.state.selectedOption.value}</h1> : null}
      </div>
    );
  }
}

export default App;
