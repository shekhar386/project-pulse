import React, { useState } from "react";
import "./styles.css";
import { FaEllipsis } from "react-icons/fa6";

interface ListBoxProps {
  cardArr: unknown[];
}

const ListBox: React.FC<ListBoxProps> = ({ cardArr }) => {
  const [cardArr0, setCardArr0] = useState<unknown[]>(cardArr);

  return (
    <div className="listBoxRootContainer">
      <div className="listHeader">
        <div className="listName">List Name</div>
        <div className="listUtils">
          <FaEllipsis size={12} />
        </div>
      </div>
      <div>Cards</div>
    </div>
  );
};

export default ListBox;
