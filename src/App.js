import React, { Component } from 'react';
import Tab from './components/Tab';

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
        <Tab />  
        <h1>คำนวณเงินผ่อนชำระ</h1>
        {this.props.children}
      </div>
    );
  }
}

export default App;
