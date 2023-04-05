import React, { useEffect, useState } from 'react'
import './index.css'

const PersonDetails = ({ setPersonalDetails }) => {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [gender, setGender] = useState('')
  const [status, setStatus] = useState('')

  useEffect(() => {
    setPersonalDetails({ name:name, date:date, gender:gender, status:status })
  }, [name, date, gender, status, setPersonalDetails])

  return (
    <div className='person-details'>
      <h3 className='person-details-title'>Personal Details</h3>
      <form >
        <label htmlFor='name'>Name</label>
        <input type="text" id="name" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
        <label htmlFor='name'>DateOfBirth</label>
        <input type="date" id="name" value={date} onChange={(e) => setDate(e.target.value)} />
        <label htmlFor="gender">Gender</label>
        <select name="gender" id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="Female" selected>Female</option>
          <option value="Male">Male</option>
        </select>

        <label htmlFor="status">Residential Status:</label>
        <select name="status" id="status" value={status} onChange={(e) => setStatus(e.target.value)} >

          <option value="Resident" selected>Resident</option>
          <option value="Non-Resident">Non-Resident</option>
          <option value="Resident but Not Ordinary Resident">Resident but Not Ordinary Resident</option>
        </select>
      </form>
    </div>
  )
}
export default PersonDetails