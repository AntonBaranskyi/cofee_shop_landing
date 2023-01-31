import styled from "styled-components";

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  width: 220px;
  height: 260px;

  background: #ffffff;
  border-radius: 8px;
  filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.25));
  margin: 0 71px 60px 0;
`;

export const ItemImg = styled.img`
  width: 167px;
  height: 115px;

  padding: 37px 27px 14px 26px;
`;

export const ItemTitle = styled.h2`
  font-family: "Merienda";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  padding-bottom: 4px;

  color: #000000;
`;

export const ItemCountry = styled.h3`
  font-family: "Merienda";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: right;
  padding-right: 30px;
  padding-bottom: 4px;

  color: #000000;
`;

export const ItemPrice = styled.p`
  font-family: "Merienda";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  text-align: center;

  padding-left: 130px;

  color: #000000;
`;
