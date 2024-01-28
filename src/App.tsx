import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Accomadation from './pages/accomadation/Accomadation';
import Allahabad from './pages/allahabad/Allahabad';
import Banaras from './pages/banaras/Banaras';
import Kanpur from './pages/kanpur/Kanpur';
import Lucknow from './pages/lucknow/Lucknow';
import Travel from './pages/travel/Travel';
import TravelWithAccomadation from './pages/travelwithaccomadation/TravelWithAccomadation';
import NoPage from './pages/nopage/NoPage';
import ExamCityDescription from "./components/examcitydescription/ExamCityDescription";
import ExamCityMain from "./components/examcity/ExamCityMain";


function App() {
  return (
    <div className="page-width">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/accomadation" element={<Accomadation />} />
          <Route path="/allahabad" element={<Allahabad />} />
          <Route path="/banaras" element={<Banaras />} />
          <Route path="/kanpur" element={<Kanpur />} />
          <Route path="/lucknow" element={<Lucknow />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/travelwithaccomadation" element={<TravelWithAccomadation />} />
          <Route path="/examcitydescription" element={<ExamCityDescription />} />
          <Route path="/examcitymain" element={<ExamCityMain />} />
          <Route path="/*" element={<NoPage />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
