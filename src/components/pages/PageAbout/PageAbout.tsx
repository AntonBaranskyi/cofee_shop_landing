import SecondHeader from "../../SecondHeader/SecondHeader";
import SecondAbout from "../../SecondAbout/SecondAbout";
import SearchFilter from "../../SearchFilter/SearchFilter";
import CofeeList from "../../CofeeList/CofeeList";
import Footer from "../../Footer/Footer";

import {useState} from 'react';
import cofeeImg from '../../../assets/second_page/coffee_list.png';

export interface ICofeeList {
  image: string;
  title: string;
  country: string;
  price: number;
}

const PageAbout = () => {
  const [cofeeData] = useState<ICofeeList[]>([
    {
      image: cofeeImg,
      title: "AROMISTICO Coffee 1 kg",
      country: "Brazil",
      price: 6.99,
    },
    {
      image: cofeeImg,
      title: "Benyan Coffee 1 kg",
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
  ]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [filter, setFilter] = useState<string>("");

  const searchItem = (items: ICofeeList[], term: string): ICofeeList[] => {
    if (!items) {
      return items;
    }

    return items.filter((item) => item.title.toLowerCase().indexOf(term) > -1);
  };

  const updateSearch = (term: string): void => {
    setSearchValue(term);
  };

  const updateFilter = (items: ICofeeList[], filter: string): ICofeeList[] => {
    switch (filter) {
      case "Brazil":
        return items.filter((item) => item.country === "Brazil");
      case "Columbia":
        return items.filter((item) => item.country === "Columbia");
      case "Kenya":
        return items.filter((item) => item.country === "Kenya");
      case "Reset":
        return items;

      default:
        return items;
    }
  };

  const settingFilter = (filter: string): void => {
    setFilter(filter);
  };

  const visibleData = updateFilter(searchItem(cofeeData, searchValue), filter);
  return (
    <>
      <SecondHeader />
      <SecondAbout />
      <SearchFilter settingFilter={settingFilter} updateSearch={updateSearch} />
      <CofeeList cofeeData={visibleData} />
      <Footer />
    </>
  );
};

export default PageAbout;
