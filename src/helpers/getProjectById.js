import { companies } from "../data/companies"

export const getProjectById = ( id ) => {
    return companies.find( company => company.id === id);
}