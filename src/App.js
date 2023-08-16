import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Info from './pages/Info'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/information" element={<Info />} />
      </Routes>
    </Router>
  );
}

export default App;
