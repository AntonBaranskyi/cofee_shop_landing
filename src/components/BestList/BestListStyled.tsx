import styled from "styled-components";

export const BestWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const BestTitle = styled.h2`
  padding-top: 80px;
  font-family: "Merienda";
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 35px;
  text-align: center;

  width: 100%;

  color: #000000;
`;

export const ItemWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background: rgba(255, 255, 255, 0.65);
  border-radius: 8px;
  width: 240px;
  height: 220px;
  margin: 70px;

  margin-bottom: 90px;
`;

export const ItemImg = styled.img`
  width: 150px;
  height: 135px;
  padding: 22px 35px 84px 33px;
`;

export const ItemTitle = styled.h3`
  position: absolute;
  top: 167px;
  left: 25px;
`;

export const ItemPrice = styled.p`
  position: absolute;
  top: 190px;
  left: 165px;
`;
