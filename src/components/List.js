import React, { Component } from 'react';

class List extends Component {
    constructor(props){
        super(props)
        this.state = {
            dayofm: ["31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"]
        }
    }
    PMT(ir, np, pv, fv, type) {

        var pmt, pvif;
    
        fv || (fv = 0);
        type || (type = 0);
    
        if (ir === 0)
            return -(pv + fv)/np;
    
        pvif = Math.pow(1 + ir, np);
        pmt = ir * pv * (pvif + fv) / (pvif - 1);
    
        if (type === 1)
            pmt /= (1 + ir);
    
        return pmt;
    }
    
    render() {
        let table = []
        const len = (60-this.props.age)*12
        var pva = this.props.money
        var mm = this.props.month
        var tmp = [];
        var interestPerMonth = this.props.interest/100/12
        for (var i = 0; i < len; i++) {
            if (mm == 12) mm = 1;
            var ir = (pva * interestPerMonth *12* this.state.dayofm[mm - 1] / 365).toFixed(2)
            var pmt = this.PMT(interestPerMonth, len, this.props.money, 0, 0).toFixed(2)
            
            tmp.push(<tr>
                <td>{i + 1}</td>
                <td>{pva}</td>
                <td>
                    {ir}
                </td>
                <td>
                    {pmt}
                </td>
                <td>
                    {(pmt-ir).toFixed(2)}
                </td>
                <td>
                    {(pva-(pmt-ir)).toFixed(2)}
                </td>
            </tr>);
            pva = (pva-(pmt-ir)).toFixed(2)
        }
        return (
            <div>
            <p>จำนวนเงิน : {this.props.money}</p>
            <p>จำนวนงวด : {len}</p>
            <p>ดอกเบี้ย : {this.props.interest} %/ปี</p>
            <table className="table table-bordered ">
            <thead>
                <tr className="table-info">
                    <th>งวด</th>
                    <th>เงินต้น</th>
                    <th>เงินดอกเบี้ย</th>
                    <th>ยอดชำระ</th>
                    <th>เงินหัก</th>        
                    <th>คงเหลือ</th>
                </tr>
            </thead>
            <tbody>        
                {tmp}
            </tbody>            
            </table>
            </div>
        );
    }
}
export default List;