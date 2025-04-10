import React from 'react'; 

const LandingPage = () => {
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
          <h2>Recipes that are<br></br>Simple and Tasty</h2>
          <button className="viewRecipesBtn"><a href="/recipes">View Recipes</a></button>
        </div>
     </div>
    </div>
  );
};

export default LandingPage;