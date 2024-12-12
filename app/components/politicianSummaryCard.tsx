'use client'

import { PoliticianSummary } from "../types"
import "../globals.css";
import Link from "next/link";

const PoliticianSummaryCard = ({politician}:{politician:PoliticianSummary}) => {

    return (
        <li key={`card_${politician.id}`} className='m-2 w-full'>
            <div className="md:flex flex-row shadow">
                <div className='flex flex-col m-1 p-2 lg:w-1/3'>
                    <Link className="text-blue-600 visited:text-purple-600 text-lg" href={`/politicians/${politician.id}`}>{politician.firstName} {politician.lastName}</Link>
                    <label>(Transliterated){politician.firstNameTransliterated} {politician.lastNameTransliterated}</label>
                    <label>Birth date: {new Date(politician.birthDate).toLocaleDateString()}</label>
                </div>
                <div className='flex flex-col m-1 p-2 lg:w-1/3'>
                    <span className='text-lg'>Contact Info</span>
                    {
                    politician.email?
                    <label className="text-blue-600 visited:text-purple-600"><a href={`mailto:${politician.email}`} >{politician.email}</a></label>
                    : <label>No contact provided</label>
                    }
                </div>
                <div className='flex flex-col m-1 p-1 lg:w-1/3'>
                    <span className='text-lg'>Last role</span>
                    {
                        politician.careers.length?
                        <div className="flex-row">
                            <p className="flex flex-row p-2">
                                <span>Institution: </span>
                                <label>{politician.careers[0].organization.institution.name}</label>
                            </p>
                            <p className="flex flex-row p-2">
                                <span>Organization: </span>
                                <label>{politician.careers[0].organization.name}</label>
                            </p>
                            <p className="flex flex-row p-2">
                                <span>Start Date: </span>
                                <label>{new Date(politician.careers[0].startDate).toLocaleDateString()}</label>
                            </p>
                            <p className="flex flex-row p-2">
                                <span>End Date: </span>
                                {
                                    politician.careers[0].endDate?
                                    <label>{new Date(politician.careers[0].endDate).toLocaleDateString()}</label>
                                    : <label>Still active on the role</label>
                                }
                            </p>
                        </div>
                        :<span>No previous roles founded</span>
                    }
                </div>
            </div>
        </li>
    )
}

export default PoliticianSummaryCard