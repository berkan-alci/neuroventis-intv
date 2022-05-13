import React from 'react'
import PatientInput from './PatientInput'
import { useNavigate, useParams } from 'react-router-dom'

const PatientDetails = () => {

    const { id } = useParams();
    return (
        <div>
            {id}
        </div>
        // <PatientInput/>
    )
}

export default PatientDetails