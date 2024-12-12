'use client'

import { useState } from "react";
import "../globals.css";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const Search = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const [name, setName] = useState('')
    const [institution, setInstitution] = useState('')
    const [organization, setOrganization] = useState('')
    const [lastTerm, setLastTerm] = useState('all_time')

    return (
        <>
            <div className="m-2">
                <label className='text-lg'>Search</label>
                <div className="flex lg:flex-row flex-col">
                    <p className="m-2">
                        <label>Potilician Name: </label>
                        <input value={name} onChange={(e)=>setName(e.target.value)} className="border border-slate-500 rounded-sm"></input>
                    </p>
                    <p className="m-2">
                        <label>Organization: </label>
                        <input value={organization} onChange={(e)=>setOrganization(e.target.value)} className="border border-slate-500 rounded-sm"></input>
                    </p>
                    <p className="m-2">
                        <label>Institution: </label>
                        <input value={institution} onChange={(e)=>setInstitution(e.target.value)} className="border border-slate-500 rounded-sm"></input>
                    </p>
                    <p className="m-2">
                        <label>Last term: </label>
                        <select value={lastTerm} className="px-2 py-1" onChange={(e)=>setLastTerm(e.target.value)}>
                            <option value='all_time'>All time</option>
                            <option value='still_active'>Stil active</option>
                            <option value='last_year'>Last year</option>
                            <option value='last_5_years'>Last 5 years</option>
                        </select>
                    </p>

                    <button className="px-2 py-1 bg-indigo-500 text-white rounded" onClick={()=>{
                        const params = new URLSearchParams(searchParams);

                        if(name)
                            params.set('name', name)
                        else
                            params.delete('name');
                        if(organization)
                            params.set('organization', organization)
                        else
                            params.delete('organization');
                        if(institution)
                            params.set('institution', institution)
                        else
                            params.delete('institution');
                        if(lastTerm)
                            params.set('lastTerm', lastTerm)
                        else
                            params.delete('lastTerm');

                        replace(`${pathname}?${params.toString()}`);

                    }}>Search</button>

                </div>
            </div>
    </>)
}

export default Search