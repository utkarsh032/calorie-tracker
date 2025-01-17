import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import MultiStepForm from './components/MultiStepForm/MultiStepForm';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<h1>About Us</h1>} />
        <Route path="/team" element={<h1>Our Team</h1>} />
        <Route path="/support" element={<h1>Support</h1>} />
        <Route path="/form" element={<MultiStepForm />} />
      </Routes>
    </>
  )
}

export default App
