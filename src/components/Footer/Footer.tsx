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
        <FooterLogo src={logo} />

        {footerData &&
          footerData.map(({ link, title }) => {
            return (
              <FooterItem key={uniqid()} href={link}>
                {title}
              </FooterItem>
            );
          })}
      </FooterMenu>

      <BeanImg src={bean} />
    </FooterWrapper>
  );
};

export default Footer;
