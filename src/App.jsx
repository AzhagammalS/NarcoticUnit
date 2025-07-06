import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Navbar from './layouts/Navbar';
import NewMafia from './pages/NewMafia';
import MafiaMember from './pages/MafiaMember';
import MafiaChart from './pages/MafiaChart';
import IsInputs from './pages/IsInputs';
import LandingPage from './pages/LandingPage';
import MafiaInfo from './pages/MafiaInfo';
import OtherDepartmentInputs from './pages/OtherDepartmentInputs';

function App() {
  return (
    <BrowserRouter basename="/CRU/">
      <Routes>
        <Route path='/' index element={<LandingPage />} />
        <Route path='otherdepartmentinputs' element={<OtherDepartmentInputs />} />
        {/* Layout route with Navbar */}
        <Route  element={<Navbar />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="mafiainfo" element={<MafiaInfo />} />
          <Route path="newmafia" element={<NewMafia />} />
          <Route path='mafiamember' element={<MafiaMember />} />
          <Route path='mafiachart' element={<MafiaChart /> } />
          <Route path='isinputs' element={<IsInputs /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
