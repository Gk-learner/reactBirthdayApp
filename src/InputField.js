import React  from "react";
import './inputField.css'

const InputField = ({ value, name, placeholder, type, onChange }) => (
  <div className="form-group">
    <input
      type={type}
      value={value}
      name={name}
      autoComplete={value}
      className="form-control"
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

export default InputField;