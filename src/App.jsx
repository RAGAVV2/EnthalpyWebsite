import './App.css';
import Navbar from './components/navbar/nav';
import HomeContent from './components/pages/mainpg';
import TeamContent from './components/pages/Teampg';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import { useContext} from "react";
import { themeContext } from "./Context";  
import ContactContent from './components/pages/Contact';
import SponsorContent from './components/pages/sponsors';
import ProjectContent from './components/pages/Projects';
 

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
    className="App"
    style={{
      background: darkMode ? "black" : "white",
      color: darkMode ? "white" : "black",
    }}>
    <Router>
    <Navbar />
    <Routes>
        <Route path='/EnthalpyWebsite/' element={<HomeContent />}/>
        <Route path='/EnthalpyWebsite/Team' element={<TeamContent />} />
        <Route path='/EnthalpyWebsite/Projects' element={<ProjectContent />} />
        <Route path='/EnthalpyWebsite/Sponsors' element={<SponsorContent />} />
        <Route path='/EnthalpyWebsite/Contact' element={<ContactContent />} />
    </Routes>
   </Router>
   </div>
  );
}

export default App
