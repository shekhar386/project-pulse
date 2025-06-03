import React from "react";
import "./styles.css";
import { IoAdd } from "react-icons/io5";

interface AddListBoxProps {
  addFunc: () => void;
}

const AddListBox: React.FC<AddListBoxProps> = ({ addFunc }) => {
  return (
    <div>
      <div className="addListBoxBaseContainer" onClick={() => addFunc()}>
        <IoAdd />
        Add Another List
      </div>
    </div>
  );
};

export default AddListBox;
