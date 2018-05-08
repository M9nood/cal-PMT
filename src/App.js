import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calperiod from './Calperiod';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name : "nat"
    }
  }
  componentWillMount () {
    this.setState({
      name : "Manood"
    })
  }
  componentDidMount () {

  }
  render() {
    return (
      <div className="container">
        <h1>คำนวณเงินผ่อนชำระ</h1>
        <Calperiod />
      </div>
    );
  }
}

export default App;
