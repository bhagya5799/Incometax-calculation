import React, { useState, useEffect } from 'react'
import './index.css'



const HouseIncome = ({ setHouseIncome }) => {
    const [grossAnnual, setGrossAnnual]=useState(0)
    const [municipalTaxes, setMunicipalTaxes] = useState(0)
    const [standardDeduction, setStandardDeduction] = useState(0)
    const [interestPaid, setInterestPaid] = useState(0)
    const standardDeductionAMount = standardDeduction+ grossAnnual-parseInt(grossAnnual)*30/100
    // console.log('stand', standardDeductionAMount)
    

    useEffect(() => {
        setHouseIncome({
            grossAnnual: grossAnnual, municipalTaxes: municipalTaxes,
            standardDeduction: standardDeduction, interestPaid: interestPaid, standardDeductionAMount: standardDeductionAMount
        })
   
    }, [grossAnnual, municipalTaxes, standardDeduction, interestPaid,setHouseIncome])
   
    return (
        <div className='House-income'>
            <h3 className='person-details-title'>Income from House Property:</h3>
            <form className='form-salary'>
                <label htmlFor='Gross'>Gross Annual Rent Received</label>
                <input type="number" id="Gross" placeholder='Gross Annual Rent Received'  value={grossAnnual}
                    onChange={(e) => setGrossAnnual(e.target.value) }/>
                <label htmlFor='Municipal'>Municipal Taxes Paid</label>
                <input type="number" id="Municipal" placeholder='Municipal Taxes Paid' value={municipalTaxes}
                    onChange={(e) => setMunicipalTaxes(e.target.value)} />
                <label htmlFor="Standard">Standard Deduction</label>
                <input type="Number" id="Standard" placeholder='(30% of Net Annual Value)' value={standardDeductionAMount}
                    onChange={(e) => setStandardDeduction(e.target.value)} />
                <label htmlFor="Interest">Interest Paid on Home Loan (if applicable)</label>
                <input type="Number" id="Interest" placeholder='Interest Paid on Home Loa' value={interestPaid}
                    onChange={(e) => setInterestPaid(e.target.value)} />
            </form>
        </div>
    )
}
export default HouseIncome