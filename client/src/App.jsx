import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import MultiStepForm from './components/MultiStepForm/MultiStepForm';
import Support from './components/support/support';
import AboutTeam from './components/AboutTeam/AboutTeam';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<h1>About Us</h1>} />
        <Route path="/team" element={<AboutTeam/>} />
        <Route path="/support" element={<Support/>} />
        <Route path="/form" element={<MultiStepForm />} />
        
      </Routes>
    </>
  )
}

export default App
