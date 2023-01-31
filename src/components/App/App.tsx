import Main from "../Main/Main";
import About from "../About/About";
import BestList from "../BestList/BestList";
import Footer from "../Footer/Footer";
import SecondHeader from "../SecondHeader/SecondHeader";
import SecondAbout from "../SecondAbout/SecondAbout";
import SearchFilter from "../SearchFilter/SearchFilter";
import CofeeList from "../CofeeList/CofeeList";

function App() {
  return (
    <div className="App">
      {/* <Main />
      <About />
      <BestList />
      <Footer /> */}

      <SecondHeader/>
      <SecondAbout/>
      <SearchFilter/>
      <CofeeList/>
      <Footer/>
    </div>
  );
}

export default App;
