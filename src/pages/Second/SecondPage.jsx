import React from 'react'
import { useLocation } from 'react-router-dom';

const SecondPage = () => {


    const location = useLocation();
    const groups = location.state?.groups || [];

    return (
        <div className='bracket'>
            
        </div>
    )
}

export default SecondPage