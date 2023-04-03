import React, { useEffect, useState } from 'react'
import Header from '../Header'
import Salary from '../Salary'
import PersonDetails from '../PersonDetails'
import HouseIncome from '../HouseIncome'
import OtherIncome from '../OtherIncome'
import DeductionsandExemptions from '../DeductionsandExemptions'
import CapitalGains from '../CapitalGains'
import './index.css'
import { Link } from 'react-router-dom'

const Home = () => {
    const [PersonalDetails, setPersonalDetails] = useState({})
    const [OtherIncomeData, setOtherIncomeData] = useState({})
    const [houseIncome, setHouseIncome] = useState({})
    const [salarys, getSalarys] = useState({})
    const [getDeductions, setDeductions] = useState({})
    const [getCapitalGains, setCapitalGains] = useState({})
    const [toggle,setToggle]=useState(false)

    useEffect(() => {
        console.log("personall", )
    }, [houseIncome, getCapitalGains, getDeductions])

    const calculateResult = () => {
        if (PersonalDetails.name.length>0){
            setToggle(true)
        }
        else{
            setToggle(false)
        }
        console.log('home',PersonalDetails.name)
           
    }

    return (
        <div className='home'>
            <Header />
            <div className='tax-calculation'>
                <h2>Income Tax Calculation</h2>
                <div className='calculation-body'>
                    <PersonDetails setPersonalDetails={setPersonalDetails} />
                    <Salary getSalarys={getSalarys} />
                    <OtherIncome setOtherIncomeData={setOtherIncomeData} />

                    <div className='child-div'>
                        <HouseIncome setHouseIncome={setHouseIncome} />
                        <CapitalGains setCapitalGains={setCapitalGains} />
                    </div>
                    <DeductionsandExemptions setDeductions={setDeductions} />
                </div>
                <div className='btn-div'>
                    <Link to="#">
                        <button className='calculate-btn' onClick={calculateResult}>Calculate</button>
                    </Link>
                </div>
            </div>
            {toggle &&(
            <div className='result-card'>
                    <p> Name:{PersonalDetails.name}</p>
                    <p>Date: {PersonalDetails.date}</p>
                    <p>Gender: {PersonalDetails.gender}</p>
                    <p>Residence: {PersonalDetails.status}</p>
            </div>) 
            }
           
        </div>
    )
}
export default Home
