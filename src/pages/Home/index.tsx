import React, { CSSProperties } from "react";
import { FaHouse } from "react-icons/fa6";
import TextInput from "../../components/TextInput";

const Home: React.FC = () => {
  return (
    <div style={styles.rootContainer}>
      <div style={styles.headContainer}>
        <div>
          <FaHouse size={24} color="#83a1cc" />
        </div>
        <div>
          <TextInput
            placeholder="Search"
            type="text"
            value=""
            onChange={() => {}}
          />
        </div>
        <div>Profile</div>
      </div>
      <div style={styles.filterContainer}>Block 2</div>
      <div style={styles.contentContainer}>Block 3</div>
    </div>
  );
};

export default Home;

interface Style {
  rootContainer: CSSProperties;
  headContainer: CSSProperties;
  filterContainer: CSSProperties;
  contentContainer: CSSProperties;
}

const styles: Style = {
  rootContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  headContainer: {
    display: "flex",
    flex: 1,
    backgroundColor: "#e9f2ff",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  filterContainer: {
    display: "flex",
    flex: 1,
    backgroundColor: "#0052cc",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    display: "flex",
    flex: 16,
    backgroundColor: "#f5faff",
    width: "100%",
    justifyContent: "center",
  },
};
