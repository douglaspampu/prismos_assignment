'use client'

import { PoliticianSummary } from "../types"

const PoliticianCard = ({politician}:{politician:PoliticianSummary}) => {
    return (
        <>
            <div className='flex flex-row m-3'>
                <div className='flex flex-col m-3'>
                    <label className='text-lg'>{politician.firstName} {politician.lastName}</label>
                    <label className=''> {politician.firstNameTransliterated} {politician.lastNameTransliterated}</label>
                </div>
                <div className='flex flex-col m-3 pt-1'>
                    {politician.gender? <label>Gender: {politician.gender}</label>:<label>Gender: undisclosed</label>}
                    <label>Birth date: {new Date(politician.birthDate).toLocaleDateString()}</label>
                    {
                        politician.email?
                        <label className="text-blue-600 visited:text-purple-600"><a href={`mailto:${politician.email}`} >{politician.email}</a></label>
                        : <label>No contact provided</label>
                    }
                </div>
            </div>
        </>
    )
}

export default PoliticianCard