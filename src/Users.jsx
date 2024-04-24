import { useLoaderData } from "react-router";

const Users = () => {
  const loadedUsers = useLoaderData();
  console.log(loadedUsers);
  return (
    <div>
      <h2 className="text-2xl">users:{loadedUsers.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Eamil</th>
              <th>Create At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                loadedUsers.map(user => <tr key={user._id} className="bg-base-200">
                <th>1</th>
                <td>{user.email}</td>
                <td>{user.createAt}</td>
                <td>Blue</td>
              </tr>)
            }
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Users;
