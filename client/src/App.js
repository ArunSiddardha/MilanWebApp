import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Team from './pages/Team'
import Home from './pages/Home'
import Schedule from './pages/Schedule'
import Sponsors from './pages/Sponsors'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/sponsors" element={<Sponsors/>}/>
        <Route path="/Schedule" element={<Schedule/>}/>
      </Routes>
    </Router>
  );
}

export default App;
