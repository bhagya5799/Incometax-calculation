import React, { useEffect, useState } from 'react'
import './index.css'

const CapitalGains = ({ setCapitalGains }) => {
    const [shortTerm, setShortTerm]=useState(0)
    const [longTerm, setLongTerm] = useState(0)

    useEffect(() =>{
        setCapitalGains({ shortTerm: shortTerm, longTerm: longTerm })
    }, [shortTerm,longTerm])
    return (
        <div className='captial-details'>
            <h3 className='person-details-title'>CapitalGains Details</h3>
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