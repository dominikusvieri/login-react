import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap'
import Login from './components/Login';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home title='Home Page' />} />
          <Route path='/dashboard' element={<Dashboard title='Dashboard' />} />
          <Route path='/login' element={<Login title='Login Page' />} />
          <Route path="/register" element={<Register title="REGISTER PAGE" description="MINI ABSENSI APPS" />} />
          <Route path='*' element={<h1>Page not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
