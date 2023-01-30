import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Text = styled.p`
  font-family: "Merienda";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  padding-right: 20px;
  /* identical to box height */

  text-align: center;

  color: #000000;
`;

export const Input = styled.input`
  position: relative;
  bottom: 4px;

  width: 180px;
  height: 30px;

  border: none;
  background: #ffffff;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  margin-right: 83px;
`;

export const FilterBtn = styled.button`
  position: relative;
  bottom: 9px;

  background: #ffffff;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 4px 0px 0px 4px;
  border: none;
  margin: 5px;

  width: 75px;
  height: 30px;
`;
