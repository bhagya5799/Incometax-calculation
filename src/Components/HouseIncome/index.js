import React, { useState, useEffect } from 'react'
import './index.css'



const HouseIncome = ({ setHouseIncome }) => {
    const [grossAnnual, setGrossAnnual]=useState('')
    const [municipalTaxes, setMunicipalTaxes] = useState('')
    const [standardDeduction, setStandardDeduction] = useState('')
    const [interestPaid, setInterestPaid] = useState('')
    
    

    useEffect(() => {
        setHouseIncome({
            grossAnnual: grossAnnual, municipalTaxes: municipalTaxes,
            standardDeduction: standardDeduction, interestPaid: interestPaid
        })
   
    }, [grossAnnual, municipalTaxes, standardDeduction, interestPaid])
   



    return (
        <div className='House-income'>
            <h4 className='person-details-title'>Income from House Property:</h4>
            <form className='form-salary'>
                <label htmlFor='Gross'>Gross Annual Rent Received</label>
                <input type="number" id="Gross" placeholder='Gross Annual Rent Received'  value={grossAnnual}
                    onChange={(e) => setGrossAnnual(e.target.value) }/>
                <label htmlFor='Municipal'>Municipal Taxes Paid</label>
                <input type="number" id="Municipal" placeholder='Municipal Taxes Paid' value={municipalTaxes}
                    onChange={(e) => setMunicipalTaxes(e.target.value)} />
                <label htmlFor="Standard">Standard Deduction</label>
                <input type="Number" id="Standard" placeholder='Standard Deduction' value={standardDeduction}
                    onChange={(e) => setStandardDeduction(e.target.value)} />
                <label htmlFor="Interest">Interest Paid on Home Loan (if applicable)</label>
                <input type="Number" id="Interest" placeholder='Interest Paid on Home Loa' value={interestPaid}
                    onChange={(e) => setInterestPaid(e.target.value)} />
            </form>
          
          
        </div>
    )
}

export default HouseIncome