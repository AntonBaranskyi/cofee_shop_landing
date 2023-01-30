import {
  AboutImg,
  AboutInfo,
  AboutText,
  AboutTitle,
  BeanImg,
  Border,
  Wrapper,
} from "./SecondAboutStyled";
import about from "../../assets/second_page/About.png";
import bean from "../../assets/second_page/Beans logo_black.svg";

const SecondAbout: React.FC = () => {
  return (
    <>
      <Wrapper>
        <AboutImg src={about} />
        <AboutInfo>
          <AboutTitle>About our beans</AboutTitle>
          <BeanImg src={bean} />
          <AboutText>
            Extremity sweetness difficult behaviour he of. On disposal of as
            landlord horrible.
          </AboutText>
          <AboutText>
            Afraid at highly months do things on at. Situation recommend
            objection do intention so questions. As greatly removed calling
            pleased improve an. Last ask him cold feel met spot shy want.
            Children me laughing we prospect answered followed. Extremity
            sweetness difficult behaviour he of. On disposal of as landlord
            horrible. At it went is song that held help face.
          </AboutText>
        </AboutInfo>
      </Wrapper>
      <Border />
    </>
  );
};

export default SecondAbout;
