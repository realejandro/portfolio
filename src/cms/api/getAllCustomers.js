export const getAllCustomers = async() => {
        
    const resp = await fetch('http://localhost:1337/customers/list');

    const customers_db = await resp.json();

    return customers_db;
    
}