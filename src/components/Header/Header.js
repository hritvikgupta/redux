import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.scss"
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    return (
        <div className='header'>
            <Link to = "/">
            <div className='logo'> Movie App</div>
            </Link>
            <div className='user-image'>
                <div className='img'>
                {< FontAwesomeIcon icon={faUser} color='white'/>}
                </div>
                
            </div>
        </div>
    );
};

export default Header;