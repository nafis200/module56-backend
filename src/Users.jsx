import { useState } from "react";
import { useLoaderData } from "react-router";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users,setUsers] = useState(loadedUsers)
  const handleDelete = id=>{
     console.log(id);
     fetch(`http://localhost:5005/user/${id}`,{
        method: 'DELETE'
     })
     .then(res => res.json())
     .then(data => {
         if(data.deletedCount > 0){
            alert('deleted successfully')
            const reamining = users.filter(user=> user._id !== id);
            setUsers(reamining)
         }
     })
  }

  return (
    <div>
      <h2 className="text-2xl">users:{users.length}</h2>

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

export default Users;
