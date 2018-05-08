import React, { Component } from 'react';

class Calculator extends Component {
    constructor(){
        super()
        this.state = {
            number1:0,
            number2:0,
            operator:null,
            result:0
        }
    }
    plus () {
        this.setState({operator: 'plus'})
    }
    minus () {
        this.setState({operator: 'minus'})
    }
    multiply () {
        this.setState({operator: 'multiply'})
    }
    divide () {
        this.setState({operator: 'divide'})
    }
    result () {
        if(this.state.operator == 'plus')
            this.setState({result:this.state.number1 + this.state.number2})
        if(this.state.operator == 'minus')
            this.setState({result:this.state.number1 - this.state.number2})
        if(this.state.operator == 'multiply')
            this.setState({result:this.state.number1 * this.state.number2})
        if(this.state.operator == 'divide')
            this.setState({result:this.state.number1 / this.state.number2})
    }
    handleNumber1(event){
        this.setState({number1:parseInt(event.target.value)})
    }
    handleNumber2(event){
        this.setState({number2:parseInt(event.target.value)})
    }
    render() {
        return (
            <div>
                <h1>This Calculator</h1>  
                <input onChange={this.handleNumber1.bind(this)}/><br/>
                <input onChange={this.handleNumber2.bind(this)}/><br/>
                {this.props.plus? <button onClick={this.plus.bind(this)}>+</button>:null}
                <button onClick={this.minus.bind(this)}>-</button>
                <button onClick={this.multiply.bind(this)}>x</button>
                <button onClick={this.divide.bind(this)}>/</button>
                <button onClick={this.result.bind(this)}>=</button>
                <h2>Number1 = {this.state.number1}</h2>
                <h2>Number2 = {this.state.number2}</h2>
                <h2>= {this.state.result}</h2>
                
            </div>
        )
    }
}
export default Calculator;