import React, { useEffect, useState } from 'react'
import './index.css'

const DeductionsandExemptions = ({ setDeductions }) => {
    const [section80D, setSection80D]=useState(0)
    const [section80E, setSection80E] = useState(0)
    const [section80G, setSection80G] = useState(0)
    const [section80TTA, setSection80TTA] = useState(0)
    const [section80U, setSection80U] = useState(0)
    const [Section24, setSection24] = useState(0)
    const [OtherDeductions, setOtherDeductions] = useState(0)

    const [LifeInsurence80c, setLifeInsurence80c] = useState(0)
    const [publicInsurence80c, setpublicInsurence80c] = useState(0)
    const [EmployeeProvident80c, setEmployeeProvident80c] = useState(0)
    const [NationalSavings80c, setNationalSavings80c] = useState(0)
    const [taxSavingFixedDeposits, setTaxSavingFixedDeposits] = useState(0)
    const [EquityLinkedSavingScheme, setEquityLinkedSavingScheme] = useState(0)
    const [PrincipalRepaymentonHomeLoan, setPrincipalRepaymentonHomeLoan] = useState(0)
    const [ChildrensTuitionFees, setChildrensTuitionFees] = useState(0)

    console.log('componen', taxSavingFixedDeposits)
   
    

    useEffect(() =>{
        setDeductions({ section80D: section80D, section80E: section80E, section80G: section80G,
            section80TTA: section80TTA, section80U: section80U, Section24: Section24, OtherDeductions: OtherDeductions,
            LifeInsurence80c: LifeInsurence80c, publicInsurence80c: publicInsurence80c,
            EmployeeProvident80c: EmployeeProvident80c, taxSavingFixedDeposits: taxSavingFixedDeposits, 
            EquityLinkedSavingScheme: EquityLinkedSavingScheme, PrincipalRepaymentonHomeLoan
                : PrincipalRepaymentonHomeLoan, ChildrensTuitionFees
                : ChildrensTuitionFees})
    }, [section80D, section80E, section80G, section80TTA, section80U, Section24, OtherDeductions, LifeInsurence80c,
        publicInsurence80c, EmployeeProvident80c, taxSavingFixedDeposits, EquityLinkedSavingScheme, PrincipalRepaymentonHomeLoan,
        ChildrensTuitionFees])

    return (
        <div className='deductions'>
            <h3 className='person-details-title'>Deductions and Exemptions  Details</h3>
            <form>
                <div>
                    <label htmlFor='80D'>Section 80D Deduction (Savings Account, Fixed Deposits, etc.)</label>
                    <input type="number" id="80D" placeholder='Medical Insurance Premium'  value={section80D}
                        onChange={(e) => setSection80D((e.target.value))}/>
                </div>
                <div>
                    <label htmlFor='80E'>Section 80E Deduction (Interest on Education Loan)</label>
                    <input type="number" id="80E" placeholder='nterest on Education Loan' value={section80E}
                        onChange={(e) => setSection80E((e.target.value))} />
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
                    <label htmlFor="OtherDeductions (as applicable)">Other Deductions (as applicable) </label>
                    <input type="number" id="OtherDeductions (as applicable)" placeholder='Other Deductions (as applicable)' value={OtherDeductions}
                        onChange={(e) => setOtherDeductions(e.target.value)} />
                </div> 

{/* ,label */}

                <div>
                    <label htmlFor="80clife (as applicable)">Section 80C Life Insurance Premium </label>
                    <input type="number" id="80clife" placeholder='Life Insurance Premium' value={LifeInsurence80c}
                        onChange={(e) => setLifeInsurence80c(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="80cp">Section 80C Public Provident Fund (PPF)</label>
                    <input type="number" id="80cp" placeholder=' Public Provident Fund (PPF)' value={publicInsurence80c}
                        onChange={(e) => setpublicInsurence80c(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="80U">Section 80C Employee Provident Fund (EPF)</label>
                    <input type="number" id="80U" placeholder=' Employee Provident Fund (EPF)' value={EmployeeProvident80c}
                        onChange={(e) => setEmployeeProvident80c(e.target.value)} />
                </div>
               
                <div>
                    <label htmlFor="80cEquilty">Section 80C Equity Linked Saving Scheme (ELSS)</label>
                    <input type="number" id="80cEquilty" placeholder=' Equity Linked Saving Scheme (ELSS)' value={taxSavingFixedDeposits}
                        onChange={(e) => setTaxSavingFixedDeposits(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="80cprincpal">Section 80C Principal Repayment on Home Loan</label>
                    <input type="number" id="80cprincpal" placeholder=' Principal Repayment on Home Loan' value={EquityLinkedSavingScheme}
                        onChange={(e) => setEquityLinkedSavingScheme(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="80cchildern">Section 80C Children's Tuition Fees</label>
                    <input type="number" id="80cchildern" placeholder=' Children s Tuition Fees' value={PrincipalRepaymentonHomeLoan}
                        onChange={(e) => setPrincipalRepaymentonHomeLoan(e.target.value)} />
                </div>
            
            </form>
        </div>
    )
}

export default DeductionsandExemptions