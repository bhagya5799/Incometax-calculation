import React, { useEffect, useState } from 'react'
import './index.css'

const DeductionsandExemptions = ({ setDeductions }) => {
    const [section80D, setSection80D]=useState('')
    const [section80E, setSection80E] = useState('')
    const [section80G, setSection80G] = useState('')
    const [section80TTA, setSection80TTA] = useState('')
    const [section80U, setSection80U] = useState('')
    const [Section24, setSection24] = useState('')
    const [OtherDeductions, setOtherDeductions] = useState('')

    useEffect(() =>{
        setDeductions({ section80D: section80D, section80E: section80E, section80G: section80G,
            section80TTA: section80TTA, section80U: section80U, Section24: Section24, OtherDeductions: OtherDeductions})
    }, [section80D, section80E, section80G, section80TTA, section80U, Section24, OtherDeductions])
    

    return (
        <div className='deductions'>
            <h4 className='person-details-title'>Deductions and Exemptions  Details</h4>
            <form>
                <div>
                    <label htmlFor='80D'>Section 80D Deduction (Savings Account, Fixed Deposits, etc.)</label>
                    <input type="number" id="80D" placeholder='Medical Insurance Premium'  value={section80D}
                        onChange={(e) => setSection80D(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='80E'>Section 80E Deduction (Interest on Education Loan)</label>
                    <input type="number" id="80E" placeholder='Interest on Education Loan' value={section80E}
                        onChange={(e) => setSection80E(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="80G">Section 80G Deduction (Donations to Charitable Institutions)</label>
                    <input type="number" id="80G" placeholder='Donations to Charitable Institutions' value={section80G}
                        onChange={(e) => setSection80G(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="80TTA">Section 80TTA Deduction (Interest on Savings Account)</label>
                    <input type="number" id="80TTA" placeholder='Interest on Savings Account' value={section80TTA}
                        onChange={(e) => setSection80TTA(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="80U">Section 80U Deduction (Disability)</label>
                    <input type="number" id="80U" placeholder='Disability' value={section80U}
                        onChange={(e) => setSection80U(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="24">Section 24 Deduction (Interest on Home Loan)</label>
                    <input type="number" id="24" placeholder='Interest on Home Loan' value={Section24}
                        onChange={(e) => setSection24(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="OtherDeductions (as applicable)">Other Deductions (as applicable) (as applicable)</label>
                    <input type="number" id="OtherDeductions (as applicable)" placeholder='Other Deductions (as applicable)' value={OtherDeductions}
                        onChange={(e) => setOtherDeductions(e.target.value)} />
                </div>
            </form>
        </div>
    )
}

export default DeductionsandExemptions