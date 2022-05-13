import { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useGetReportsQuery } from './services/reportsApi';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [patientReports, setPatientReports] = useState([]);
    const { data: reportsList } = useGetReportsQuery();


    useEffect(() => {
        console.log(reportsList?.data)
        setPatientReports(reportsList?.data)
    }, [])

    return (
        <div className="App">
            <Container>
                <h1>Patient Reports App</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Registered</th>
                            <th>E-mail</th>
                            <th>Gender</th>
                            <th>Reports</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            patientReports.map(pReport => pReport &&
                                <tr>
                                    <td>{pReport.name}</td>
                                    <td>{pReport.registered}</td>
                                    <td>{pReport.email}</td>
                                    <td>{pReport.gender}</td>
                                    <td>{pReport.reports.length}</td>
                                </tr>)
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}

export default App;
