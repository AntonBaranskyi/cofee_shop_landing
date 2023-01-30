import { FilterBtn, Input, Wrapper } from "./SearchFilterStyled";
import { Text } from "./SearchFilterStyled";

interface IButton {
  name: string;
}

const btnData: IButton[] = [
  { name: "Brazil" },
  { name: "Columbia" },
  { name: "Kenya" },
];

const SearchFilter: React.FC = () => {
  return (
    <Wrapper>
      <Text>Looking for</Text>
      <Input type="text" placeholder="start typiyng here..." />

      <Text>Or filter</Text>
      {btnData &&
        btnData.map((item) => {
          return <FilterBtn>{item.name}</FilterBtn>;
        })}
    </Wrapper>
  );
};

export default SearchFilter;
