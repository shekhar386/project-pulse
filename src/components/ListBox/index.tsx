import React, { CSSProperties, useState } from "react";
import "./styles.css";
import { FaEllipsis } from "react-icons/fa6";
import EditableText from "../EditableText";

interface ListBoxProps {
  cardArr: unknown[];
}

const ListBox: React.FC<ListBoxProps> = ({ cardArr }) => {
  const [cardArr0, setCardArr0] = useState<unknown[]>(cardArr);
  const [listName, setListName] = useState<string>("List Name");

  return (
    <div className="listBoxRootContainer">
      <div className="listHeader">
        <div className="listName">
          <EditableText
            text={listName}
            textStyles={styles.listNameText}
            inputStyles={styles.listNameInput}
            onSave={(value: string): void => {
              setListName(value);
            }}
          />
        </div>
        <div className="listUtils">
          <FaEllipsis size={12} />
        </div>
      </div>
      <div>Cards</div>
    </div>
  );
};

export default ListBox;

interface StylesProps {
  listNameText: CSSProperties;
  listNameInput: CSSProperties;
}

const styles: StylesProps = {
  listNameText: {
    fontSize: "14px",
    fontWeight: "700",
  },
  listNameInput: {
    fontSize: "14px",
    fontWeight: "700",
    border: "none",
  },
};
