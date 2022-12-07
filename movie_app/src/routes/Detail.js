import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Detail(){
    const navigate = useNavigate();

    const location = useLocation();
    console.log("state : " , location.state);

    useEffect(() => { // 렌더링 이후 작동되는 것
        if(location.state === undefined) {
            navigate('/');
        }
    });
    if(location.state){
        return (
            <div className='movie-detail'>
                <span>{location.state.title}</span>
                <div>
                    <img src={location.state.poster} alt={location.state.title} />
                </div>
                <div>{location.state.year}</div>
                <div>{location.state.summary}</div>
            </div>
        ); 
    } else {
        return null;
    }
    

}

export default Detail;