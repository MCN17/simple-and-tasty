import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Pages
import LandingPage  from "./pages/LandingPage";
import Recipes  from "./pages/Recipes";
function App() {


  return (

    
    <Router>
        <Routes>
          <Route path="*" element={<LandingPage/>}/>
          <Route path="/recipes" element={<Recipes/>}/>
        </Routes>
  </Router>
  );
};

export default App;
