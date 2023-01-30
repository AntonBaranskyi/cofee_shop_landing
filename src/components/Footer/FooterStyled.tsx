import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 150px;
  padding-top: 30px;
`;

export const FooterLogo = styled.img`
  height: 50px;
`;

export const FooterMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;
export const FooterItem = styled.a`
  text-decoration: none;

  font-family: "Merienda";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 17px;
  color: #000;
  margin: 15px;
  padding-top: 14px;
  padding-left: 15px;
`;

export const BeanImg = styled.img`
  position: relative;
  bottom: 25px;
`;
