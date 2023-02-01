import { Wrapper } from "./CofeeListStyled";

import CofeeListItem from "../CofeeListItem/CofeeListItem";
import uniqid from "uniqid";
import { ICofeeList } from "../pages/PageAbout/PageAbout";

const CofeeList = ({ cofeeData }: any) => {
  return (
    <Wrapper>
      {cofeeData &&
        cofeeData.map((item: ICofeeList) => {
          return (
            <CofeeListItem
              key={uniqid()}
              image={item.image}
              title={item.title}
              country={item.country}
              price={item.price}
            />
          );
        })}
    </Wrapper>
  );
};

export default CofeeList;
