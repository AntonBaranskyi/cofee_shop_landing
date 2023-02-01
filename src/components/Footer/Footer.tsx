import bean from "../../assets/Beans logo_black.svg";
import {
  FooterItem,
  FooterLogo,
  FooterMenu,
  FooterWrapper,
} from "./FooterStyled";
import logo from "../../assets/footer/Logo.svg";
import { BeanImg } from "./FooterStyled";
import uniqid from "uniqid";
import { Link } from "react-router-dom";

interface CoffeFooter {
  link: string;
  title: string;
}

const footerData: CoffeFooter[] = [
  { title: "Our cofee", link: "#" },
  { title: "For your plesuare", link: "#" },
];

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterMenu>
        <Link to="/">
          <FooterLogo src={logo} />
        </Link>

        {footerData &&
          footerData.map(({ title }) => {
            return (
              <Link key={uniqid()} to={title === "Our cofee" ? "/about" : "/"}>
                <FooterItem key={uniqid()}>{title}</FooterItem>
              </Link>
            );
          })}
      </FooterMenu>

      <BeanImg src={bean} />
    </FooterWrapper>
  );
};

export default Footer;
