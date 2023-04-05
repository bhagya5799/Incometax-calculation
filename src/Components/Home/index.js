import React, { useEffect, useState } from 'react'
import Header from '../Header'
import Salary from '../Salary'
import PersonDetails from '../PersonDetails'
import HouseIncome from '../HouseIncome'
import OtherIncome from '../OtherIncome'
import DeductionsandExemptions from '../DeductionsandExemptions'
import CapitalGains from '../CapitalGains'
import { BsFillArrowRightSquareFill } from 'react-icons/bs'
import './index.css'


const Home = () => {
    const [PersonalDetails, setPersonalDetails] = useState({})
    const [OtherIncomeData, setOtherIncomeData] = useState({})
    const [houseIncome, setHouseIncome] = useState({})
    const [Salaries, getSalaries] = useState({})
    const [getDeductions, setDeductions] = useState({})
    const [getCapitalGains, setCapitalGains] = useState({})
    const [toggle, setToggle] = useState(false)
    const [taxNewIncome, setTaxNewIncome] = useState(0)
    const [taxOldIncome, setTaxOldIncome] = useState(0)
    const [grossIncome, setGrossIncome] = useState('')
    const [totalDeduction, settotalDeduction] = useState('')
    const [step, setStep] = useState(1);


    useEffect(() => {
        console.log("personalDetails", PersonalDetails)
    }, [PersonalDetails])

    useEffect(() => {
        console.log("personalDetails", PersonalDetails, Salary, houseIncome)
    }, [houseIncome])

    const calculateResult = () => {
        let addSalary = parseInt(Salaries.salary) + parseInt(Salaries.houseRent) + parseInt(Salaries.SpecialAllowance) +
            parseInt(Salaries.transportAllowance) + parseInt(Salaries.otherAllowance) + parseInt(Salaries.leaveTravelAllowance) +
            parseInt(Salaries.Reimbursements)
        let netSalaryIncome = addSalary - parseInt(Salaries.houseRent) - parseInt(Salaries.leaveTravelAllowance)


        // income From Home
        let calCulateHouseAnualValu = parseInt(houseIncome.standardDeduction) + parseInt(houseIncome.interestPaid) + parseInt(houseIncome.municipalTaxes)
        let GetIncomeFromHouse = (parseInt(houseIncome.grossAnnual) - calCulateHouseAnualValu)


        // Calculate Capital Gains:
        let getFinalIncomeFromHome = GetIncomeFromHouse > 0 ? GetIncomeFromHouse : 0
        let CalculateCapitalGainsIncome = parseInt(getCapitalGains.shortTerm) + parseInt(getCapitalGains.longTerm)


        // ADd other Income
        let addOtherIncome = parseInt(OtherIncomeData.interestIncome) + parseInt(OtherIncomeData.dividendIncome) +
            parseInt(OtherIncomeData.BusinessIncome) + parseInt(OtherIncomeData.agriculturalIncome) + parseInt(OtherIncomeData.miscellaneousIncome)


        // get GTI Total Income
        let grossTotalIncome = netSalaryIncome + GetIncomeFromHouse + CalculateCapitalGainsIncome + addOtherIncome
       


        let undersectionDedection = parseInt(getDeductions.section80E) + parseInt(getDeductions.section80G) + parseInt(getDeductions.section80D) +
            parseInt(getDeductions.section80TTA) + parseInt(getDeductions.Section24) + parseInt(getDeductions.OtherDeductions)

        let sumDeductions = parseInt(getDeductions.LifeInsurence80c) + parseInt(getDeductions.publicInsurence80c)
            + parseInt(getDeductions.EmployeeProvident80c)
            + parseInt(getDeductions.taxSavingFixedDeposits)
            + parseInt(getDeductions.EquityLinkedSavingScheme)
            + parseInt(getDeductions.PrincipalRepaymentonHomeLoan)
            + parseInt(getDeductions.ChildrensTuitionFees)
        console.log('deduction', sumDeductions)
        let taxbleIncome = grossTotalIncome - undersectionDedection - sumDeductions


        // Old Regime(with deductions and exemptions):
        const getTaxbleOldRegime = (income) => {
            let tax = 0;
            if (income <= 250000) {
                // no tax
                tax = 0;
            } else if (income > 250000 && income <= 500000) {
                // 5% tax on income over 250000
                tax = (income - 250000) * 0.05;
            } else if (income > 500000 && income <= 1000000) {
                // 12,500 + 20% tax on income between 500000 and 1000000
                tax = 12500 + (income - 500000) * 0.2;
            } else {
                // 1,12,500 + 30% tax on income over 1000000
                tax = 112500 + (income - 1000000) * 0.3;
            }
            return tax

        }
        let finalREsultOld = getTaxbleOldRegime(taxbleIncome)
        setTaxOldIncome(finalREsultOld)
        function getTaxbleNewRegime(income) {
            let tax = 0;
            if (income > 1500000) {
                tax += (income - 1500000) * 0.3;
                income = 1500000;
            }
            if (income > 1250000) {
                tax += (income - 1250000) * 0.25;
                income = 1250000;
            }
            if (income > 1000000) {
                tax += (income - 1000000) * 0.2;
                income = 1000000;
            }
            if (income > 750000) {
                tax += (income - 750000) * 0.15;
                income = 750000;
            }
            if (income > 500000) {
                tax += (income - 500000) * 0.1;
                income = 500000;
            }
            if (income > 250000) {
                tax += (income - 250000) * 0.05;
            }
            return tax;
        }
        let finalREsultNew = getTaxbleNewRegime(taxbleIncome)
        setTaxNewIncome(finalREsultNew)
        setGrossIncome(grossTotalIncome)
        settotalDeduction(undersectionDedection + sumDeductions)
        console.log('new', taxNewIncome, finalREsultNew)
        if (!toggle) {
            setToggle(true)
        }
        else {
            setToggle(false)
        }
    }










    const nextStep = () => {
        if (step < 6) {
            setStep(step => step + 1)
        }

    }
    return (
        <div className='home'>
            <Header />
            {toggle ?
                (
                    <div className='result-card'>
                        <div className='show-personal-details'>
                            <h3> Name: &ensp;{PersonalDetails.name}</h3>
                            <h3>Date: &ensp;{PersonalDetails.date}</h3>
                            <h3>Gender: &ensp; {PersonalDetails.gender}</h3>
                            <h3>Residence:&ensp;  {PersonalDetails.status}</h3>
                        </div>
                        <div className='show-income-tax-details'>
                            <h3 className='type-title'>Old Regime </h3>
                            <p> Basic Salary:  &ensp;{Salaries.salary}</p>
                            <p>HRA: &ensp; {Salaries.houseRent}</p>
                            <p>SpecialAllowance:  &ensp;{Salaries.SpecialAllowance}</p>
                            <p>LTA: &ensp; {Salaries.leaveTravelAllowance}</p>
                            <p>Income Tax: &ensp;{taxOldIncome}</p>
                            <p>Gross-Income: &ensp;{grossIncome}</p>
                            <p>Deductions: &ensp; {totalDeduction}</p>
                        </div>
                        <div className='show-income-tax-details'>
                            <h3 className='type-title'>New Regime </h3>
                            <p> Basic Salary:  &ensp;{Salaries.salary}</p>
                            <p>HRA: &ensp; {Salaries.houseRent}</p>
                            <p>SpecialAllowance:  &ensp;{Salaries.SpecialAllowance}</p>
                            <p>LTA: &ensp; {Salaries.leaveTravelAllowance}</p>
                            <p>Income Tax: &ensp;{taxNewIncome}</p>
                            <p>Gross-Income: &ensp;{grossIncome}</p>
                            <p>Deductions: &ensp; {totalDeduction}</p>
                        </div>
                    </div>
                ) : (<div className='tax-calculation'>
                    <button className='clickPersonalbtn'>1</button>
                    <button className='clickPersonalbtn'>2</button>
                    <button className='clickPersonalbtn'>3</button>
                    <button className='clickPersonalbtn'>4</button>
                    <button className='clickPersonalbtn'>5</button>
                    <div className='tax-components'>
                        {step === 1 && < PersonDetails setPersonalDetails={setPersonalDetails} />}
                        {step === 2 && <Salary getSalaries={getSalaries} />}
                        {step === 3 && <OtherIncome setOtherIncomeData={setOtherIncomeData} />}
                        {step === 4 && (
                            <div className='child-div'>
                                <HouseIncome setHouseIncome={setHouseIncome} />
                                <CapitalGains setCapitalGains={setCapitalGains} />
                            </div>
                        )}
                        {step === 5 && <DeductionsandExemptions setDeductions={setDeductions} />}
                        {step < 5 ? (<div div onClick={nextStep}><i className='square'><BsFillArrowRightSquareFill /></i></div>)
                            : (<button className='calculate-btn' onClick={calculateResult}>Calculate </button>)}
                    </div>
                
                </div>)
            }
        </div>
    )
}
export default Home
