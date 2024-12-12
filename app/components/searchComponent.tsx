'use client'

import { useState } from "react";
import "../globals.css";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const Search = () => {
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const pathname = usePathname();
    const { replace } = useRouter();
    const [name, setName] = useState(params.get('name')||'')
    const [institution, setInstitution] = useState(params.get('institution')||'')
    const [organization, setOrganization] = useState(params.get('organization')||'')
    const [lastTerm, setLastTerm] = useState(params.get('lastTerm')||'all_time')
    const [sortBy, setSortBy] = useState(params.get('sortBy'))

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
                <div>
                    <label>Sort by</label>
                    <form>
                        <p className="m-2">
                            <label>Name</label> 
                            <input name='sort_by' type="radio" checked={sortBy==='name'} onChange={()=>{
                                const params = new URLSearchParams(searchParams);
                                params.set('sortBy', 'name')
                                replace(`${pathname}?${params.toString()}`);

                                setSortBy('name')
                            }}/>
                        </p>
                        <p  className="m-2">
                            <label>Birth date </label> 
                            <input name='sort_by' type="radio" checked={sortBy==='birthDate'} onChange={()=>{
                                const params = new URLSearchParams(searchParams);
                                params.set('sortBy', 'birthDate')
                                replace(`${pathname}?${params.toString()}`);

                                setSortBy('birthDate')
                            }}/>
                        </p>
                    </form>
                </div>
            </div>
    </>)
}

export default Search