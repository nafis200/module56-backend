import { useLoaderData } from "react-router";


const Users = () => {
    const loadedUsers = useLoaderData()
    return (
        <div>
        <h2 className="text-2xl">users:{loadedUsers.length}</h2>
        </div>
    );
};

export default Users;