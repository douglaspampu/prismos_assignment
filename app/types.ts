export type PoliticianSummary = {
    birthDate: string,
    firstName: string,
    firstNameTransliterated: string,
    gender?: 'Male'|'Female',
    id: string,
    lastName: string,
    lastNameTransliterated: string,
    email: string,
    careers:Career[]
}

export type Career = {
    id: string,
    isPublic: true,
    endDate: string,
    position: string,
    startDate: string,
    organization: Organization
}

export type Organization = {
    description: string,
    name: string,
    institution: Instituition
}

export type Instituition = {
    name: string,
    id: string
}

export type PoliticiansList = {
    people:PoliticianSummary[]
}

export type SearchQuery = {
    name?:string,
    organization?:string,
    institution?:string,
    lastTerm?: string
}

