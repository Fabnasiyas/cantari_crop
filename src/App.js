import logo from './logo.svg';
import './App.css';
import Home from './Pages/HomePage.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
        
        <Router>
        <Routes>
        <Route path='/' element={<Home />} />
        </Routes>
        </Router>
    </>
  );
}

export default App;
