import React, { Component } from 'react';
class Calcmax extends Component { 
  constructor(props){
      super(props)
      this.state = {
        salary: 0,
        owe:0,
        DSR:0,
        showResult: false,
        result: 0,
          
      }
      
  }
  handlesalary(event){
      this.setState({salary:parseInt(event.target.value)})
  }
  handleDSR(event) {
      var tmp = parseFloat(event.target.value)
      this.setState({DSR:tmp/100})
  }
  handleOwe(event) {
    if(!parseInt(event.target.value))  
      this.setState({ owe: 0 }) 
    else this.setState({ owe: parseInt(event.target.value) })
  }
  calc(event){
    var tmpRes  = 0
    tmpRes = this.state.salary * this.state.DSR
    tmpRes = (tmpRes - this.state.owe) * 150
    this.setState({ result: tmpRes, showResult:true})
  } 


  render() {
    return (
        <div>
                <hr/>
                  <div className="col-sm-7">
                    <div className="form-group row">
                        <label  className="col-sm-4 col-form-label">เงินเดือน</label>
                        <div className="col-sm-8">
                        <input type="number" className="form-control" onChange={this.handlesalary.bind(this)} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label  className="col-sm-4 col-form-label">ค่าDSR (%)</label>
                        <div className="col-sm-8">
                        <input type="number" className="form-control" onChange={this.handleDSR.bind(this)} />
                        </div>
                  </div>
                  <div className="form-group row">
                        <label  className="col-sm-4 col-form-label">ภาระหนี้ต่อเดือน</label>
                        <div className="col-sm-8">
                        <input type="number" className="form-control" onChange={this.handleOwe.bind(this)} />
                        </div>
                  </div>
                </div>
                <a className="btn btn-success" onClick={this.calc.bind(this)} >คำนวณ</a>
        <hr />
        {(this.state.showResult)?
             <div className="form-group row">
                <label  className="col-sm-4 col-form-label">คุณสามารถกู้ได้สูงสุด</label>
                <div className="col-sm-8">
                <p>{this.state.result}  บาท</p>
                </div>
            </div>       
          :null}
        </div>
    )
  }
}
export default Calcmax
