import React, { Component } from 'react';

class List extends Component {
    constructor(props){
        super(props)
        this.state = {
            dayofm: ["31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"],
            monthNames : [
                "January", "February", "March",
                "April", "May", "June", "July",
                "August", "September", "October",
                "November", "December"
            ]
            
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
        var d = new Date("2018-"+mm+"-01")
        for (var i = 0; i < len; i++) {
            if (mm == 12) mm = 1;
            var ir = (pva * interestPerMonth *12* 30 / 365).toFixed(2)
            var pmt = this.PMT(interestPerMonth, len, this.props.money, 0, 0).toFixed(2)
            var isLast = false
            
            if((pva-pmt) <= 0) isLast = true
            
            if(i==0){
                tmp.push(<tr>
                    <td></td>
                    <td></td>
                    <td className="text-r"></td>
                    <td className="text-r"></td>
                    <td className="text-r"></td>
                    <td className="text-r">
                        {pva.toLocaleString(undefined, {minimumFractionDigits: 2,maximumFractionDigits: 2})}
                    </td>
                </tr>);
            }
            tmp.push(<tr>
                <td>{i + 1}</td>
                <td>{d.getDate()} - {this.state.monthNames[d.getMonth()]}</td>
                <td className="text-r">
                    {(!isLast)?
                        (pmt-ir).toLocaleString(undefined, {minimumFractionDigits: 2,maximumFractionDigits: 2}):
                        parseFloat(pva).toFixed(2)
                    }
                </td>
                <td className="text-r">
                    {(ir).toLocaleString(undefined, {minimumFractionDigits: 2,maximumFractionDigits: 2})}
                </td>
                <td className="text-r">
                    {(!isLast)?
                        (pmt).toLocaleString(undefined, {minimumFractionDigits: 2,maximumFractionDigits: 2}):
                        (parseFloat(pva)+parseFloat(ir)).toFixed(2)
                    }
                </td>
                
                <td className="text-r">
                    {(!isLast)?
                    (pva-(pmt-ir)).toLocaleString(undefined, {minimumFractionDigits: 2,maximumFractionDigits: 2}):
                    0
                    }
                </td>
            </tr>);
            pva = (pva-(pmt-ir)).toFixed(2)
            d.setDate(d.getDate() + parseInt(this.state.dayofm[i%12]));
        }
        return (
            <div>
            <p>จำนวนเงินที่กู้ : {this.props.money.toLocaleString('en')} บาท</p>
            <p>จำนวนงวด : {len} งวด</p>
            <p>ดอกเบี้ย : {this.props.interest} %/ปี</p>
            <table className="table table-bordered ">
            <thead>
                <tr className="table-info">
                    <th>งวด</th>
                    <th>วันที่</th>
                    <th>เงินต้น</th>
                    <th>เงินดอกเบี้ย</th>
                    <th>ยอดชำระ</th>       
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