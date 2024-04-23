import { createContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "./firebase.config";



export const AuthContext = createContext(null)


const Authprovider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(false)
    const createUser = (email,password)=>{
        setLoading(false);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const userinfo = {user,loading,createUser
    }
    return (
    <AuthContext.Provider value = {userinfo}>
        {children}
   </AuthContext.Provider>
    );
};

export default Authprovider;