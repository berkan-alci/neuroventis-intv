import { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useGetReportsQuery } from './services/reportsApi';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [patientReports, setPatientReports] = useState([]);
    const { data: reportsList } = useGetReportsQuery();


    useEffect(() => {
        let data = []
        reportsList?.map?.map((objects) => {

            // only get necessaryy data
            const adjusted = {
                "name": objects.name,
                "email": objects.email,
                "registered": objects.registered,
                "gender": objects.gender,
                "reports": objects.reports.length
            }
            data.push(adjusted)
        })
        setPatientReports(data);

    }, [reportsList])

    console.log(patientReports)
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
                            patientReports.map((pReport, i) => pReport &&
                                <tr key={i}>
                                    <td key={pReport.name}>{pReport.name}</td>
                                    <td key={pReport.registered}>{pReport.registered}</td>
                                    <td key={pReport.email}>{pReport.email}</td>
                                    <td key={pReport.gender}>{pReport.gender}</td>
                                    <td key={pReport.reports}>{pReport.reports}</td>
                                </tr>

                            )
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}

export default App;
