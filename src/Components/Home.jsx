import React, { useContext } from 'react';
import { AuthContext } from './Providers/AuthProvider';

const Home = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h2>THis is home page {user && user.displayName}</h2>
        </div>
    );
};

export default Home; <h2>THis is home page</h2>