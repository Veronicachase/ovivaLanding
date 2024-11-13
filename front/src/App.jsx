import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from "./views/landing/LandingPage";
import LandingForm from "./views/landing/LandingForm"; 
import SuccessfulRegistry from "./views/landing/SuccesfulRegistry"
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route index element={<LandingPage />} />
        <Route path="/landing-form" element={<LandingForm />} /> 
        <Route path="/successful-registry" element={<SuccessfulRegistry/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
