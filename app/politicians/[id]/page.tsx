'use server'

import { Career, PoliticianSummary } from '@/app/types';
import { promises as fs } from 'fs';
import "../../globals.css";
import CareerCard from '@/app/components/careerCard';
import PoliticianCard from '@/app/components/politicianCard';

const PoliticianCareer = async ({params}:{params: Promise<{ id: string }>}) => {

    const {id} = await params

    const getPolititianData = async (id:string) => {
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
        }).filter((p:PoliticianSummary)=>{
            return p.id === id
        })

        return politicians[0]
    }

    const politician:PoliticianSummary = await getPolititianData(id)

    return (
        <>
            <PoliticianCard politician={politician}/>
            <div key={`timeline-${id}`} className='m-3'>
                <label className='text-lg'>Career timeline</label>
                {politician.careers.map((c:Career)=>{
                    return <CareerCard career={c} />
                })}
            </div>
        </>
    )
}

export default PoliticianCareer