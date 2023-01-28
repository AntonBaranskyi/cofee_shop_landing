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
      <Logo src={logo} />
      <ListMenu>
        {cofeeData.map((item) => {
          return <MenuItem href={item.link}>{item.title}</MenuItem>;
        })}
      </ListMenu>
    </Nav>
  );
};

export default NavBar;
