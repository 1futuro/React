import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation(){
    return(
        <div className='nav'>
            <Link to="/">Home</Link>
            {/* <Link to="/about">About</Link> */}
            <Link to='/about'>About</Link>
            {/* pathname : URL을 의미, state : route props에 보내줄 데이터를 의미 */}
        </div>
    );
}

export default Navigation;