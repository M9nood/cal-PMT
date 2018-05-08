import React, { Component } from 'react';
import { Link } from 'react-router'
class Tab extends Component { 
  render() {
    return (
      <ul className="nav nav-pills mb-3" id="myTab" role="tablist">
        <li className="nav-item">
          <Link className="btn btn-primary" to="/" >คำนวณเงินผ่อนชำระ</Link>  
        </li>
        <li className="nav-item">
          <Link className="btn btn-info" to="/calcmax" >คำนวณเงินกู้สูงสุด</Link>  
        </li>
      </ul>
    )
  }
}
export default Tab;