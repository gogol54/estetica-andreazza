import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Info from './pages/Info'
import Agendamento from './pages/Agendamento'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/agendamentos" element={<Agendamento />} />

      </Routes>
    </Router>
  );
}

export default App;
