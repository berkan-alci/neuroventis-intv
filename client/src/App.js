import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import ErrorPage from './Components/ErrorPage';
import Nav from './Components/Nav';
import PatientDetails from './Components/PatientDetails';

function App() {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<ErrorPage />} />
                <Route path="/:id" element={<PatientDetails />} />
            </Routes>
        </>

    )

}

export default App;
