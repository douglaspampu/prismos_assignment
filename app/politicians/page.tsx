'use server'

import { promises as fs } from 'fs';
import PoliticianSummaryCard from '../components/politicianSummaryCard';
import { Career, PoliticianSummary, SearchQuery } from '../types';
import Search from '../components/searchComponent';

const getPastDate = (years:number) => {
    const pastDate = new Date()
    pastDate.setMonth(new Date().getMonth() - years*12)

    return pastDate
}

const dateFilters = {
    still_active:(p:PoliticianSummary) => {return p.careers[0]?.endDate === null},
    last_year:(p:PoliticianSummary) => {return p.careers[0]?.endDate && new Date(p.careers[0].endDate) > getPastDate(1)},
    last_5_years:(p:PoliticianSummary) => {return p.careers[0]?.endDate && new Date(p.careers[0].endDate) > getPastDate(5)},
    all_time:(p:PoliticianSummary) => {return true},
}

export default async function Politicians(props: {
        searchParams?: Promise<SearchQuery>;
    }) {

    const searchParams:SearchQuery = await props.searchParams!;

    const getPoliticians = async () => {
        const file = await fs.readFile(process.cwd() + '/public/data.json', 'utf8');

        const {data} = JSON.parse(file)

        const politicians = data.people
        .map((p:PoliticianSummary)=>{
            const validPolitician = {...p, careers:p.careers.sort((a:Career,b:Career)=>{
                const aDate = a.endDate? new Date(a.endDate) : new Date ()
                const bDate = b.endDate? new Date(b.endDate) : new Date ()
                return bDate.getTime() - aDate.getTime()
            })}

            return validPolitician
        })
        .filter((p:PoliticianSummary)=>{
            const filterByName = (el:PoliticianSummary) => {
                return searchParams.name ? `${el.firstName} ${el.lastName}`.includes(searchParams.name!) : true
            }

            const filterByOrganization = (el:PoliticianSummary) => {
                return searchParams.organization ? el.careers.some((c:Career)=>
                    c.organization.name.includes(searchParams.organization!))
                : true
            }

            const filterByInstitution = (el:PoliticianSummary) => {
                return searchParams.institution ? el.careers.some((c:Career)=>
                    c.organization.institution.name.includes(searchParams.institution!))
                : true
            }

            const filterByDate = (el:PoliticianSummary) => {
                return searchParams.lastTerm ? dateFilters[searchParams.lastTerm as keyof typeof dateFilters](el) : true
            }


            return filterByName(p)
            && filterByOrganization(p)
            && filterByInstitution(p)
            && filterByDate(p)
            
        })

        return politicians as PoliticianSummary[]
    }

    const politicians:PoliticianSummary[] = await getPoliticians()

    return (
        <>
            <div>
                <Search/>
            </div>
            <div key='PoliticiansList'>
                {politicians.map((politician:PoliticianSummary)=>{
                    return (<PoliticianSummaryCard key={politician.id} politician={politician}/>)
                })}
            </div>
        </>
    )
}