import React from "react";
import "./styles.css";

interface TextInputProps {
  label?: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type: string;
}

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  value,
  onChange,
  type,
}) => {
  return (
    <div className="field">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default TextInput;
