import { ListMenu, Logo, Nav, MenuItem } from "./NavBarStyled";
import logo from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";

import uniqid from "uniqid";

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
      <NavLink to="/">
        <Logo src={logo} />
      </NavLink>
      <ListMenu>
        {cofeeData.map((item) => {
          return (
            <NavLink end to={item.title === "Our cofee" ? "/about" : "/"}>
              <MenuItem key={uniqid()}>{item.title}</MenuItem>
            </NavLink>
          );
        })}
      </ListMenu>
    </Nav>
  );
};

export default NavBar;
