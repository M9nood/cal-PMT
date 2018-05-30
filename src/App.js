import React, { Component } from 'react';
import Tab from './components/Tab';
import './App.css'

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
      <div className="container container-body">
      <div className="card card-body">
        <Tab />  
        <h1>คำนวณเงินผ่อนชำระ</h1>
        {this.props.children}
      </div>
      </div>
    );
  }
}

export default App;
