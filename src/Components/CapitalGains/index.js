import React, { useEffect, useState } from 'react'
import './index.css'

const CapitalGains = ({ setCapitalGains }) => {
    const [shortTerm, setShortTerm]=useState('')
    const [longTerm, setLongTerm] = useState('')

    useEffect(() =>{
        setCapitalGains({ shortTerm: shortTerm, longTerm: longTerm })
    }, [shortTerm,longTerm])
    return (
        <div className='captial-details'>
            <h4 className='person-details-title'>CapitalGains Details</h4>
            <form>
                <label htmlFor='Short-Term'>Short-Term Capital Gains</label>
                <input type="number" id="Short-Term" placeholder='Short-Term Capital Gains' value={shortTerm}
                    onChange={(e) => setShortTerm(e.target.value)} />
                <label htmlFor='Long-Term'>Long-Term Capital Gains</label>
                <input type="number" id="Long-Term" placeholder='Long-Term Capital Gains' value={longTerm}
                    onChange={(e) => setLongTerm(e.target.value)} />

            </form>
        </div>
    )
}
export default CapitalGains