import './App.css';
import LandingPage from './pages/LandingPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TestingPage from './pages/TestingPage';

function App() {
  return (
    <Router >
      <div className="App">
        <Routes>
          <Route path='/' element={
            <LandingPage />
          } />
          <Route path='/testing-page' element={<TestingPage />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
