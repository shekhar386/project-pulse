import React, { useState } from "react";
import { FaHouse, FaCircleUser } from "react-icons/fa6";
import TextInput from "../../components/TextInput";
import "./styles.css";
import ListBox from "../../components/ListBox";

const LIST = [1, 2];

const Home: React.FC = () => {
  const [searchInputValue, setSearchInputValue] = useState<string>("");

  const listItem = () =>
    LIST.map(() => (
      <div>
        <ListBox cardArr={[]} />
      </div>
    ));

  return (
    <div className="rootContainer">
      <div className="headContainer">
        <div className="homeContainer">
          <FaHouse className="homeIcon" size={24} />
        </div>
        <div className="searchContainer">
          <TextInput
            placeholder="Search"
            type="text"
            value={searchInputValue}
            onChange={(value: string): void => {
              setSearchInputValue(value);
            }}
          />
          <button className="searchButton" onClick={() => {}}>
            Search
          </button>
        </div>
        <div className="profileContainer">
          <FaCircleUser size={24} className="profileIcon" />
        </div>
      </div>
      <div className="filterContainer">
        <div className="projectName">Project Name</div>
        <div className="filterUtils">Filters</div>
      </div>
      <div className="contentContainer">
        <div className="listCategory">{listItem()}</div>
      </div>
    </div>
  );
};

export default Home;
