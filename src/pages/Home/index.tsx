import React, { CSSProperties, useState } from "react";
import { FaHouse, FaCircleUser } from "react-icons/fa6";
import TextInput from "../../components/TextInput";
import "./styles.css";
import ListBox from "../../components/ListBox";
import EditableText from "../../components/EditableText";

const LIST = [1, 2];

const Home: React.FC = () => {
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  const [projectName, setProjectName] = useState<string>("Project Name");

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
        <div className="projectName">
          <EditableText
            text={projectName}
            textStyles={styles.projectName}
            inputStyles={styles.projectNameInput}
            onSave={(value: string) => setProjectName(value)}
          />
        </div>
        <div className="filterUtils">Filters</div>
      </div>
      <div className="contentContainer">
        <div className="listCategory">{listItem()}</div>
      </div>
    </div>
  );
};

export default Home;

interface stylesProps {
  projectName: CSSProperties;
  projectNameInput: CSSProperties;
}

const styles: stylesProps = {
  projectName: {
    padding: "0 2vh 0 2vh",
    fontSize: "16px",
    fontWeight: 700,
    color: "white",
  },
  projectNameInput: {
    margin: "0 2vh 0 2vh",
    fontSize: "16px",
    fontWeight: 700,
    border: "none",
  },
};
