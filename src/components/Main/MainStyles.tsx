import styled from "styled-components";

export const Header = styled.header`
  background-size: cover;
  height: 700px;
  width: 100%;
  background-repeat: no-repeat;
`;

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const BeanLogo = styled.img`
  display: block;
  padding-bottom: 35px;
`;

export const MainTitle = styled.h2`
  padding-top: 111px;
  width: 100%;
  text-align: center;
  padding-bottom: 20px;

  font-family: "Merienda";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 58px;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const SecondTitle = styled.h2`
  text-align: center;
  font-family: "Merienda";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;

  color: #ffffff;
  padding-bottom: 20px;
`;

export const MainButton = styled.button`
  display: inline-block;
  background-color: transparent;
  cursor: pointer;
  width: 120px;
  height: 30px;
  margin: 0 auto;
  outline: none;
  border-radius: 5px;
  border: 1px solid #fff;
  color: #fff;

  font-family: "Merienda";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;
