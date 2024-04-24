import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/user">users</NavLink>
            <NavLink to="/signup">SignUp</NavLink>
            
        </div>
    );
};

export default Header;