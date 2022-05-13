import React from 'react'
import PatientInput from './PatientInput'
import { useNavigate, useParams } from 'react-router-dom'

const PatientDetails = () => {

    const { name } = useParams();
    return (
        <div>
            {name}
        </div>
        // <PatientInput/>
    )
}

export default PatientDetails