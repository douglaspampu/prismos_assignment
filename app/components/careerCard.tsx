'use client'

import { Career } from "../types"

const CareerCard = ({career}:{career:Career}) => {
    return (
        <div className="p-3">
            <div>
                <span>{new Date(career.startDate).toLocaleDateString()}</span>
                    <span> until </span>
                    {
                        career.endDate ?
                        <span>{new Date(career.endDate).toLocaleDateString()}</span>
                        : <span>Present</span>
                    }
            </div>
            <div key={career.id} className='flex flex-col w-full m-3 p-3 border-l border-indigo-600 shadow'>
                <div className='w-1/5'>
                    <div>
                    {   
                        career.isPublic?
                        <p className="p-1">Public service</p>
                        : <p className="p-1">Private sector</p>
                    }
                    </div>
                </div>
                <div className='flex flex-col lg:w-1/3'>
                    <p className="p-1">Institution: {career.organization.institution.name}</p>
                    <div className="p-1">
                        <p >Organization: {career.organization.name}</p>
                        <p className="p-1">{career.organization.description}</p>
                    </div>
                    <p className="p-1">Acted as: {career.position}</p>
                </div>
            </div>
        </div>
    )
}

export default CareerCard