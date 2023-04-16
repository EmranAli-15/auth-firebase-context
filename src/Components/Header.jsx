import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from './Providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link className="btn btn-ghost normal-case text-xl" to="/">Auth Master</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/orders">Orders</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
                <div>{user ? <div>{user.email} <button onClick={handleLogOut} className="btn btn-xs">sign out</button></div> : ''}</div>
            </div>
        </div>
    );
};
export default Header;