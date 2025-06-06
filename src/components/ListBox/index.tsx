import React, { CSSProperties, useState } from "react";
import "./styles.css";
import { IoMdClose } from "react-icons/io";
import EditableText from "../EditableText";

interface ListBoxProps {
  cardArr: unknown[];
  deleteBox: () => void;
}

const ListBox: React.FC<ListBoxProps> = ({ cardArr, deleteBox }) => {
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
        <div onClick={() => deleteBox()} className="listUtils">
          <IoMdClose size={16} />
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
