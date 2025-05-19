import React from "react";
import { FaHouse, FaCircleUser } from "react-icons/fa6";
import TextInput from "../../components/TextInput";
import "./styles.css";

const Home: React.FC = () => {
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
            value=""
            onChange={() => {}}
          />
        </div>
        <div className="profileContainer">
          <FaCircleUser size={24} className="profileIcon" />
        </div>
      </div>
      <div className="contentContainer">Block 3</div>
    </div>
  );
};

export default Home;
