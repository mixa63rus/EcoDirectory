import React, { Component } from 'react';
import MainSelect from './Components/MainSelect';
import CustomSelect from './Components/CustomSelect';
// import CustomNavbar from './CustomNavbar';
import './App.css';

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
        {!selectedOption ? 
          <div className="block">
            <div className="text font-effect-grass">
              <h1><b>Справочник по отходам</b></h1>
            </div>
            <MainSelect
              value={selectedOption}
              onChange={this.handleChange}
            />
          </div>
          : <div className="afterblock"><CustomSelect /></div>}
          {/* <div className="info">
            {this.state.selectedOption ? <p>{this.state.selectedOption.value}</p> : null}
          </div> */}
        </div>
    );
  }
}

export default App;
