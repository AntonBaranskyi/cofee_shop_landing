import { ListMenu, Logo, Nav, MenuItem } from "./NavBarStyled";
import logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { LinkBtn } from "./NavBarStyled";

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
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <ListMenu>
        {cofeeData.map((item) => {
          return (
            <LinkBtn
              style={{ textDecoration: "none" }}
              to={item.title === "Our cofee" ? "/about" : "/"}
            >
              <MenuItem key={uniqid()}>{item.title}</MenuItem>
            </LinkBtn>
          );
        })}
      </ListMenu>
    </Nav>
  );
};

export default NavBar;
