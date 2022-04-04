import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/review'}>Review</Link>
                <Link to={'/dashboard'}>Dashboard</Link>
                <Link to={'/blogs'}>Blogs</Link>
                <Link to={'/about'}>About</Link>
            </nav>
        </div>
    );
};

export default Header;