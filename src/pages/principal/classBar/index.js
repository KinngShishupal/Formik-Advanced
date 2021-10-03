import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const options = [
  { key: 1, value: "First", name: "First" },
  { key: 2, value: "Second", name: "Second" },
  { key: 3, value: "Third", name: "Third" },
  { key: 4, value: "Fourth", name: "Fourth" },
  { key: 5, value: "Fifth", name: "Fifth" },
  { key: 6, value: "Sixth", name: "Sixth" },
  { key: 7, value: "Seventh", name: "Seventh" },
  { key: 8, value: "Eigth", name: "Eigth" },
  { key: 9, value: "Ninth", name: "Ninth" },
  { key: 10, value: "Tenth", name: "Tenth" },
  { key: 11, value: "Eleventh", name: "Eleventh" },
  { key: 12, value: "Twelvth", name: "Twelvth" },
];

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function ClassBar() {
  const classes = useStyles();
  const [classSelected, setClassSelected] = React.useState("");

  const handleChange = (event) => {
    // console.log(event.target.value);
    setClassSelected(event.target.value);
    console.log(classSelected);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Select a Class</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={classSelected}
          onChange={handleChange}
        >
          {options.map((item) => {
            return (
              <MenuItem value={item.value} key={item.key}>
                {item.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
