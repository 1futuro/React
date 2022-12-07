import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Detail.css';

function Detail() {
    const navigate = useNavigate();

    const location = useLocation();
    console.log('state',location.state);
    
    useEffect(() => {
        if(location.state == null){
            navigate('/');        
        } 
    });
    
    if(location.state){
        return (
            <div className='detail'>
                <div className='img'> 
                    <img src={location.state.img} alt='album'/>
                </div>
                <div className='title'> 제목 : {location.state.title}</div>           
            </div>
        )    
    }
    
}
export default Detail