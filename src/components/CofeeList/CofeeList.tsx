import { Wrapper } from "./CofeeListStyled";
import cofeeImg from "../../assets/second_page/coffee_list.png";
import CofeeListItem from "../CofeeListItem/CofeeListItem";

export interface ICofeeList {
  image: string;
  title: string;
  country: string;
  price: number;
}

const cofeeData: ICofeeList[] = [
  {
    image: cofeeImg,
    title: "AROMISTICO Coffee 1 kg",
    country: "Brazil",
    price: 6.99,
  },
  {
    image: cofeeImg,
    title: "AROMISTICO Coffee 1 kg",
    country: "Kenya",
    price: 6.99,
  },
  {
    image: cofeeImg,
    title: "AROMISTICO Coffee 1 kg",
    country: "Columbia",
    price: 6.99,
  },
  {
    image: cofeeImg,
    title: "AROMISTICO Coffee 1 kg",
    country: "Brazil",
    price: 6.99,
  },
  {
    image: cofeeImg,
    title: "AROMISTICO Coffee 1 kg",
    country: "Kenya",
    price: 6.99,
  },
  {
    image: cofeeImg,
    title: "AROMISTICO Coffee 1 kg",
    country: "Columbia",
    price: 6.99,
  },
  {
    image: cofeeImg,
    title: "AROMISTICO Coffee 1 kg",
    country: "Kenya",
    price: 6.99,
  },
  {
    image: cofeeImg,
    title: "AROMISTICO Coffee 1 kg",
    country: "Columbia",
    price: 6.99,
  },
];

const CofeeList = () => {
  return (
    <Wrapper>
      {cofeeData &&
        cofeeData.map((item) => {
          return (
            <CofeeListItem
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
