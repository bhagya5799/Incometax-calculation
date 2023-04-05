import React, { useEffect, useState } from 'react'
import './index.css'

const OtherIncome = ({ setOtherIncomeData }) => {
    const [interestIncome, setInterestIncome]=useState(0)
    const [dividendIncome, setDividendIncome]=useState(0)
    const [BusinessIncome, setBusinessIncome]=useState(0)
    const [agriculturalIncome, setAgriculturalIncome] = useState(0)
    const [miscellaneousIncome, setMiscellaneousIncome] = useState(0)
    console.log(interestIncome)

    useEffect(() => {
        setOtherIncomeData({ interestIncome: interestIncome, dividendIncome: dividendIncome, 
            BusinessIncome: BusinessIncome, agriculturalIncome: agriculturalIncome, miscellaneousIncome: miscellaneousIncome })
        
    }, [interestIncome, dividendIncome, BusinessIncome, agriculturalIncome, miscellaneousIncome])

    return (
        <div className='otherIncome-details'>
            <h3 className='person-details-title'>Other Income Details</h3>
            <form >
                <label htmlFor='Savings'>Interest Income (Savings Account, Fixed Deposits, etc.)</label>
                <input type="text" id="Savings" placeholder='Interest Income' value={interestIncome}
                    onChange={(e) => setInterestIncome(e.target.value)} />
                <label htmlFor='RentalIncome'>Dividend Income - Rental Income (other than House Property)</label>
                <input type="number" id="RentalIncome" placeholder='(other than House Property)' value={dividendIncome}
                    onChange={(e) => setDividendIncome(e.target.value)} />
                <label htmlFor="Profession">Income from Business / Profession</label>
                <input type="number" id="Profession" placeholder='Income from Business / Profession' value={BusinessIncome}
                    onChange={(e) => setBusinessIncome(e.target.value)} />
                <label htmlFor="Agricultural">Agricultural Income</label>
                <input type="number" id="Agricultural" placeholder='Agricultural Income' value={agriculturalIncome}
                    onChange={(e) => setAgriculturalIncome(e.target.value)} />
                <label htmlFor="Miscellaneous">Other Miscellaneous Income</label>
                <input type="number" id="Miscellaneous" placeholder='Other Miscellaneous Income' value={miscellaneousIncome}
                    onChange={(e) => setMiscellaneousIncome(e.target.value)} />
            </form>
        </div>
    )
}
export default OtherIncome