import React, { Component } from 'react';
import Select from 'react-select';
import {options} from './elements';
import CustomNavbar from './CustomNavbar';
import './App.css';

const customStyles = {
  option: (base, { isDisabled, isSelected }) => ({
    ...base,
    padding: 10,
    width: "300px",
    backgroundColor: isDisabled ? null
      : isSelected ? "#DCDCDC" : null,
    color: isDisabled ? '#ccc'
      : isSelected ? "blue"
      : "black",
    cursor: isDisabled ? 'not-allowed' : 'default',
  }),
  menu: (styles) => ({ ...styles, width: "300px", marginLeft: 30}),
  control: styles => ({ ...styles, backgroundColor: 'white', width: "300px", margin: 30 }),
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
      <div className="App">
        <div>
          <CustomNavbar />
          <Select
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
            styles={customStyles}
          />
          {this.state.selectedOption ? <h1>{this.state.selectedOption.value}</h1> : null}
        </div>
      </div>
    );
  }
}

export default App;
