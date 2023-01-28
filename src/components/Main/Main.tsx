import back from "../../assets/desk-791178_1920.png";
import NavBar from "../NavBar/NavBar";
import {
  BeanLogo,
  Header,
  MainButton,
  MainTitle,
  MainWrapper,
  SecondTitle,
} from "./MainStyles";
import beanLogo from "../../assets/Beans logo.svg";

const Main: React.FC = () => {
  return (
    <Header style={{ backgroundImage: `url(${back})` }}>
      <NavBar />

      <MainWrapper>
        <MainTitle>Everything You Love About Coffee</MainTitle>
        <BeanLogo src={beanLogo} />

        <SecondTitle style={{ paddingBottom: "25px" }}>
          We makes every day full of energy and taste
        </SecondTitle>
        <SecondTitle>Want to try our beans?</SecondTitle>

        <MainButton>More</MainButton>
      </MainWrapper>
    </Header>
  );
};

export default Main;
