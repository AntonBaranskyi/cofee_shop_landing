import { ListMenu, Logo, Nav, MenuItem } from "./NavBarStyled";
import logo from "../../assets/Logo.svg";

interface CoffeNav {
  link: string;
  title: string;
}

const cofeeData: CoffeNav[] = [
  { title: "Our cofee", link: "#" },
  { title: "For your plesuare", link: "#" },
];

const NavBar: React.FC = () => {
  return (
    <Nav>
      <a href="/">
        <Logo src={logo} />
      </a>
      <ListMenu>
        {cofeeData.map((item) => {
          return <MenuItem href={item.link}>{item.title}</MenuItem>;
        })}
      </ListMenu>
    </Nav>
  );
};

export default NavBar;
