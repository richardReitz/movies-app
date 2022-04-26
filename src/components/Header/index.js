import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';

export default function Header(){
    return(
        <header>
            <div className='links'> 
                <Link className='logo' to="/">Filmaria</Link>
                <Link className='favorites' to={"/favorites"}>Favorites</Link>
            </div>    
        </header>
    );
}