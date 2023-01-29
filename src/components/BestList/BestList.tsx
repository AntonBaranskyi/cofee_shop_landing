import {
  BestTitle,
  BestWrapper,
  ItemImg,
  ItemPrice,
  ItemTitle,
  ItemWrapper,
} from "./BestListStyled";
import back from "../../assets/Our_best_back.png";
import best1 from "../../assets/best_item1.png";
import best2 from "../../assets/best_item2.png";
import best3 from "../../assets/best_item3.png";

interface IbestData {
  img: string;
  title: string;
  price: number;
}

const bestData: IbestData[] = [
  {
    img: best1,
    title: "Presto Coffee Beans 1 kg",
    price: 16.99,
  },

  {
    img: best2,
    title: "Solimo Cofee Beans 2 kg",
    price: 10.73,
  },

  {
    img: best3,
    title: "AROMISTICO Cofee 1 kg",
    price: 6.99,
  },
];

const BestList: React.FC = () => {
  return (
    <BestWrapper style={{ backgroundImage: `url(${back})` }}>
      <BestTitle>Our best</BestTitle>
      {bestData &&
        bestData.map(({ img, title, price }) => {
          return (
            <ItemWrapper>
              <ItemImg src={img} />
              <ItemTitle>{title}</ItemTitle>
              <ItemPrice>{price + `$`}</ItemPrice>
            </ItemWrapper>
          );
        })}
    </BestWrapper>
  );
};

export default BestList;
