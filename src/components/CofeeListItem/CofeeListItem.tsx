import {
  ItemCountry,
  ItemImg,
  ItemPrice,
  ItemTitle,
  ItemWrapper,
} from "./CofeeListItemStyled";
import { ICofeeList } from "../pages/PageAbout/PageAbout";

const CofeeListItem = ({ image, title, country, price }: ICofeeList) => {
  return (
    <ItemWrapper>
      <ItemImg src={image} />
      <ItemTitle>{title}</ItemTitle>
      <ItemCountry>{country}</ItemCountry>
      <ItemPrice>{`${price} $`}</ItemPrice>
    </ItemWrapper>
  );
};

export default CofeeListItem;
