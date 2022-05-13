import React from 'react'
import { useNavigate } from 'react-router-dom'
const Nav = () => {
    let navigate = useNavigate();

    return (
        <div>
            <nav>
                <button className='btn' onClick={() => navigate("/")}>HOME</button>
            </nav>
        </div>
    )
}

export default Nav