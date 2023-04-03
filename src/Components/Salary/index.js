import React, { useEffect, useState } from 'react'
import './index.css'

const Salary = ({ getSalarys }) => {
    const [salary,setSalary]=useState('')
    const [houseRent,setHouseRent]=useState('')
    const [SpecialAllowance, setSpecialAllowance] = useState('')
    const [transportAllowance, setTransportAllowance] = useState('')
    const [otherAllowance, setOtherAllowance] = useState('')
    const [leaveTravelAllowance, setLeaveTravelAllowance] = useState('')
    const [Reimbursements, setReimbursements] = useState('')
    const [Contribution, setContribution]=useState('')
    const [incomeTaxDeducted, setIncomeTaxDeducted]=useState('')
    console.log(salary, houseRent, SpecialAllowance, transportAllowance, otherAllowance, leaveTravelAllowance, Reimbursements, Contribution, incomeTaxDeducted)

    useEffect(() =>{
        getSalarys({ salary: salary, houseRent: houseRent, SpecialAllowance: SpecialAllowance, 
            transportAllowance: transportAllowance, otherAllowance: otherAllowance, leaveTravelAllowance
                : leaveTravelAllowance, Reimbursements: Reimbursements, Contribution
                : Contribution, incomeTaxDeducted
                : incomeTaxDeducted})
    }, [salary, houseRent, SpecialAllowance, transportAllowance, otherAllowance, leaveTravelAllowance, Reimbursements
        , Contribution, incomeTaxDeducted])

    return (
        <div className='salary-details'>
            <h4 className='person-details-title'>Salary Details</h4>
            <form className='form-salary'>
                <label htmlFor='Basic'>Basic Salary</label>
                <input type="number" id="Basic" placeholder='Basic Salary' value={salary}  
                onChange={(e) => setSalary(e.target.value)}/>
                <label htmlFor='House'>House Rent Allowance (HRA)</label>
                <input type="number" id="House" placeholder='HRA' value={houseRent} 
                    onChange={(e) => setHouseRent(e.target.value)} />
                <label htmlFor="Allowance">Special Allowance</label>
                <input type="Number" id="Allowance" placeholder='Special Allowance' value={SpecialAllowance}
                    onChange={(e) => setSpecialAllowance(e.target.value)} />
                <label htmlFor="Transport">Transport Allowance</label>
                <input type="Number" id="Transport" placeholder='Transport Allowance' value={transportAllowance}
                    onChange={(e) => setTransportAllowance(e.target.value)} />
                <label htmlFor="Other">Other Allowances</label>
                <input type="Number" id="Other" placeholder='Other Allowances' value={otherAllowance}
                    onChange={(e) => setOtherAllowance(e.target.value)} />
                <label htmlFor="Travel">Leave Travel Allowance (LTA)</label>
                <input type="Number" id="Travel" placeholder='Leave Travel Allowance (LTA)' value={leaveTravelAllowance}
                    onChange={(e) => setLeaveTravelAllowance(e.target.value)} />
                <label htmlFor="Reimbursements">Reimbursements </label>
                <input type="Number" id="Reimbursements" placeholder='Reimbursements (Medical, Fuel, etc.)' value={Reimbursements}
                    onChange={(e) => setReimbursements(e.target.value)} />
                <label htmlFor="Contribution">Employer's Contribution to Provident Fund</label>
                <input type="Number" id="Contribution" placeholder='Provident Fund' value={Contribution}
                    onChange={(e) => setContribution(e.target.value)} />
                <label htmlFor="TDS">Income Tax Deducted at Source (TDS)</label>
                <input type="Number" id="TDS" placeholder='Income Tax Deducted at Source (TDS)' value={incomeTaxDeducted}
                    onChange={(e) => setIncomeTaxDeducted(e.target.value)} />
                
            </form>
        </div>
    )
}

export default Salary