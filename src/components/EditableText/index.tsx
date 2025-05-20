import React, { CSSProperties, useEffect, useRef, useState } from "react";

interface EditableTextProps {
  text: string;
  textStyles: CSSProperties;
  inputStyles: CSSProperties;
  onSave: (value: string) => void;
}

const EditableText: React.FC<EditableTextProps> = ({
  text,
  textStyles,
  inputStyles,
  onSave,
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [value, setValue] = useState<string>(text);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleBlur = (): void => {
    setIsEditing(false);

    if (value !== text) {
      onSave(value);
    }
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      inputRef.current?.blur();
    } else if (e.key === "Escape") {
      setValue(text);
      setIsEditing(false);
    }
  };

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  return isEditing ? (
    <input
      ref={inputRef}
      value={value}
      type="text"
      onChange={(e) => setValue(e.target.value)}
      style={inputStyles}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    />
  ) : (
    <span
      onClick={() => setIsEditing(true)}
      style={{ ...textStyles, cursor: "pointer" }}
    >
      {text}
    </span>
  );
};

export default EditableText;
