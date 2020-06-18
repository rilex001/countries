import React, {useState} from 'react'

function Input() {

    const [region, setRegion] = useState('')

    return (
        <>
        <div className='grid'>
        <input className="search" placeholder="Enter a country" />
        </div>

        <div className="custom-select grid" >

            <select id="region" value={region} onChange={e => setRegion(e.target.value)}>
                <option value="">Filter by Region</option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
            </select> 
        </div>
        </>
    )
}

export default Input
