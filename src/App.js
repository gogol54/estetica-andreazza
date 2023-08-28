import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Info from './pages/Info'
import Agendamento from './pages/Agendamento'
import Faqs from './pages/Faqs'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/agendamentos" element={<Agendamento />} />
        <Route path="/faqs" element={<Faqs />} />

      </Routes>
    </Router>
  );
}

export default App;
