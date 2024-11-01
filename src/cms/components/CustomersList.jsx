import React, { useEffect, useState } from 'react'
import { getAllCustomers } from '../api';

export const CustomersList = () => {

    const [customers, setCustomers] = useState([]);

    const updateCustomer = () => {
        console.log("update");
    }

    const deleteCustomer = () => {
        console.log("delete");
    }

    useEffect(() => {
      getAllCustomers().then( (data) => {
        setCustomers(data) 
        console.log(data)
    });
    }, [])
    

    console.log(customers);

  return (
    <div>
        <table className='table table-borderless'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>message</th>
                    <th>actions</th>
                </tr>
            </thead>

            <tbody>

                {
                    customers.map( ( {_id, name, email, message} ) => {
                        return ( 
                        <tr key={_id}>
                            <td> {_id.substring(_id.length - 4, _id.length)}</td>
                            <td> {name} </td> 
                            <td> {email} </td> 
                            <td> {message} </td>
                            <td>
                                <button onClick={ updateCustomer}> update </button>
                                <button onClick={ deleteCustomer }> delete </button>
                            </td> 
                        </tr> 
                        )
                    })
                }

            </tbody>
        </table>
    </div>
  )
}
