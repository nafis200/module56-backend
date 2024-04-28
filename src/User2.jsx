

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
const User2 = () => {
    const loadedUsers = useLoaderData();
    const [users,setUsers] = useState([])
    // useEffect(()=>{
    //     fetch('http://localhost:5005/user')
    //     .then(res => res.json())
    //     .then(data => setUsers(data))
    // },[])

    const {isPending, isError, error, data : getData} = useQuery({
      queryKey: ['users'],
      queryFn: async()=>{
         const res = await fetch('http://localhost:5005/user')
         return res.json()
      }
    })
    if(isPending){
      <span className="loading loading-spinner text-primary"></span>
    }

     if(isError){
        <p>this is error</p>
     }
    
    console.log('hellow');
     console.log(getData);

    const handleDelete = id=>{
        console.log(id);
        fetch(`http://localhost:5005/user/${id}`,{
           method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
               alert('deleted successfully')
               
            }
        })
     }
    return (
        <div>
     
      <h1>{getData?.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Eamil</th>
              <th>Create At</th>
              <th>Last Logged In</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                users.map(user => <tr key={user._id} className="bg-base-200">
                <th>1</th>
                <td>{user.email}</td>
                <td>{user.createAt}</td>
                <td></td>
                <td>
                    <button onClick={()=>handleDelete(user._id)} className="btn">X</button>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>

    </div>
    );
};

export default User2;