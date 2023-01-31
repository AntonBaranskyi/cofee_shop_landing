import { useState } from "react";
import { FilterBtn, Input, Wrapper } from "./SearchFilterStyled";
import { Text } from "./SearchFilterStyled";

import uniqid from "uniqid";

interface IButton {
  name: string;
}

const btnData: IButton[] = [
  { name: "Brazil" },
  { name: "Columbia" },
  { name: "Kenya" },
];

interface Props {
  updateSearch: (term: string) => void;
  settingFilter: (filter: string) => void;
}
const SearchFilter = ({ updateSearch, settingFilter }: Props) => {
  const [value, setValue] = useState<string>();

  const writeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateSearch(e.target.value.toLowerCase());
  };

  const updateFilter = (name: string): void => {
    settingFilter(name);
  };

  return (
    <Wrapper>
      <Text>Looking for</Text>
      <Input
        value={value}
        onChange={writeValue}
        type="text"
        placeholder="start typiyng here..."
      />

      <Text>Or filter</Text>
      {btnData &&
        btnData.map((item) => {
          return (
            <FilterBtn onClick={() => updateFilter(item.name)} key={uniqid()}>
              {item.name}
            </FilterBtn>
          );
        })}
    </Wrapper>
  );
};

export default SearchFilter;
