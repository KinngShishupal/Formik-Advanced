import React from "react";
import DatePicker from "../../components/DatePicker";
import OptionSelector from "../../components/OptionSelector";
import InputChip from "../../components/InputChip/InputChip";
import styled from "styled-components";

const LectureSelection = () => {
  // need to pass the options in the option selector
  const options = [
    { name: "first", value: 1, key: 1 },
    { name: "second", value: 2, key: 2 },
    { name: "third", value: 3, key: 3 },
    { name: "fourth", value: 4, key: 4 },
  ];

  const chipOptions = [
    "Hindi",
    "English",
    "Maths",
    "Science",
    "History",
    "Politics",
  ];

  const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    > * {
      flex-basis: 1;
      display: block !important;
      width: 100%;
    }
  `;

  return (
    <Wrapper>
      <DatePicker />
      <form>
        <OptionSelector options={options} selectorType="Select Class" />
        <InputChip options={chipOptions} />
      </form>
    </Wrapper>
  );
};

export default LectureSelection;
