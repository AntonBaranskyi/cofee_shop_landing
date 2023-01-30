import React from "react";
import About from "./components/About/About";
import BestList from "./components/BestList/BestList";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Main />
      <About/>
      <BestList/>
      <Footer/>
    </div>
  );
}

export default App;
