import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <div className="div1">
        <div className="navbar">
          <ul>
            <li>HOME</li>
            <li>RECIPES</li>
            <li>GALLERY</li>
            <li>CONTACT US</li>
          </ul>
        </div>
        <div className="banner">
          <h2>Recipes that are<br></br>Simple and Tastey</h2>
          <button className="viewRecipesBtn">View Recipes</button>
        </div>
     </div>
    </div>
  );
}

export default App;
