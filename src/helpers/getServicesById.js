import { services } from "../data/services"

export const getServicesById = (id) => {
    return services.filter( service => service.id === id)
}