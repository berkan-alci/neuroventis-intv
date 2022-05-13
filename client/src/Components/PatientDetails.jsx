import React, { useEffect, useState } from 'react'
import PatientInput from './PatientInput'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetDetailsQuery } from '../services/reportsApi';
import { Container, Form, Table } from 'react-bootstrap';

const PatientDetails = () => {
    const { id } = useParams();
    const [patientData, setPatientData] = useState([]);

    const { data: patient } = useGetDetailsQuery(id);

    useEffect(() => {
        let data = patient['data'];
        setPatientData(data);

    }, [patient]);
    return (
        <div>
            <Container className="patientDetails">
                <h2>Patient Details</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Registered</th>
                            <th>E-mail</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            <tr>
                                <td>{patientData.name}</td>
                                <td key={patientData.registered}>{patientData.registered}</td>
                                <td key={patientData.email}>{patientData.email}</td>
                                <td key={patientData.gender}>{patientData.gender}</td>
                            </tr>
                        }
                    </tbody>

                </Table>
                <h2>Patient Reports</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Report Name</th>
                            <th>Report Event</th>
                            <th>Report Content</th>
                            <th>Report Created</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            patientData.reports.map((report, i) => report &&
                                <tr key={i}>
                                    <td key={report.reportName}>{report.reportName}</td>
                                    <td key={report.event}>{report.event}</td>
                                    <td key={report.content}>{report.content}</td>
                                    <td key={report.created}>{report.created}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>

            </Container>
        </div>
        // <PatientInput/>
    )
}

export default PatientDetails