import { MultiSelect } from "@progress/kendo-react-dropdowns";
import { useState } from "react";
import "./InputChip.css";

const InputChip = ({ options }) => {
  const [value, setValue] = useState([]);
  console.log(options);

  const onChange = (event) => {
    setValue([...event.value]);
  };

  console.log(value);

  return (
    <div className="example-wrapper">
      <div>
        <div>Favorite sports:</div>
        <MultiSelect data={options} onChange={onChange} value={value} />
      </div>
    </div>
  );
};

export default InputChip;
