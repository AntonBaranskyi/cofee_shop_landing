import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  padding-top: 30px;
`;

export const Logo = styled.img`
  position: relative;
  left: 85px;
  height: 50px;
  top: 4px
`;

export const ListMenu = styled.div`
  display: flex;
`;

export const MenuItem = styled.a`
  text-decoration: none;
  position: relative;
  left: 110px;
  top: 15px;
  font-family: "Merienda";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 17px;
  margin: 15px;

  color: #fff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
