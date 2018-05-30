import React, { Component } from 'react';
import List from '../components/List';

class Calperiod extends Component {
    constructor(props){
        super(props)
        this.handleMonth = this.handleMonth.bind(this);
        this.state = {
            money:0,
            interest:0,
            age:0,
            month:1,
            showTB:false
        }
        
    }
    handleNumber1(event){
        this.setState({money:parseInt(event.target.value)})
    }
    handleInterest(event){
        this.setState({interest:parseFloat(event.target.value)})
    }
    handleAge(event){
        this.setState({age:parseInt(event.target.value)})
        console.log(this.state.age)
    }
    calc(event){
        this.setState({showTB:true}) 
        console.log(this.state.showTB)
    } 
    handleMonth(event) {
        console.log(event.target.value)
        this.setState({month: event.target.value});
    }
      
    render() {
        const numbers = [1, 2, 3, 4, 5];
        return (
            <div >
                <hr/>
                <div className="col-sm-7">
                    <div className="form-group row">
                        <label  className="col-sm-3 col-form-label">ยอดเงินกู้</label>
                        <div className="col-sm-9">
                        <input type="text" className="form-control" onChange={this.handleNumber1.bind(this)} id="staticEmail" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">ดอกเบี้ย</label>
                        <div className="col-sm-9">
                        <input type="text" onChange={this.handleInterest.bind(this)} className="form-control" id="staticEmail" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label  className="col-sm-3 col-form-label">อายุ</label>
                        <div className="col-sm-9">
                        <input type="number" onChange={this.handleAge.bind(this)} className="form-control" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label  className="col-sm-3 col-form-label">เดือนที่เริ่มกู้</label>    
                        <div className="col-sm-5">
                        <select className="form-control" value={this.state.month} onChange={this.handleMonth}>
                            <option value="1" >ม.ค.</option>
                            <option value="2">ก.พ.</option>
                            <option value="3">มี.ค.</option>
                            <option value="4">เม.ย.</option>
                            <option value="5">พ.ค.</option>
                            <option value="6">มิ.ย.</option>
                            <option value="7">ก.ค.</option>
                            <option value="8">ส.ค.</option>
                            <option value="9">ก.ย.</option>
                            <option value="10">ต.ค.</option>
                            <option value="11">พ.บ.</option>
                            <option value="12">ธ.ค.</option>
                        </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label  className="col-sm-3 col-form-label"></label>
                        <a className=" col-sm-9 btn btn-success" onClick={this.calc.bind(this)}>คำนวณ</a>
                    </div>
                </div>
                <hr />
                {(this.state.showTB)?
                    <List month={this.state.month} age={this.state.age} money={this.state.money} interest={this.state.interest} />          
                :null}
            </div>
        )
    }
}
export default Calperiod;