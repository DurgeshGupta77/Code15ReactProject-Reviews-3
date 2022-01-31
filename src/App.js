import React from "react";
import './App.css';
import Review from "./Review";

const App = () => {
  return <React.Fragment>
    <section>
      <div className="body-component">
        <h1>Our Reviews</h1>
        <div className="underline"></div>
      </div>
      <Review />
    </section>
  </React.Fragment>
}

export default App;