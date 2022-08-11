import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { Autocomplete, TextField } from "@mui/material";

export default function ChooseDose({
  onChange,
}: {
  onChange: (value) => void;
}) {
  const [temp, setTemp] = React.useState<string>();
  const [value, setValue] = React.useState<string | null>();
  const [inputValue, setInputValue] = React.useState("");
  onChange(value === null ? inputValue:value)
  return (
    <Autocomplete
      id="dose"
      options={dose}
      onChange={(event: any, newValue: string | null) => {
        setValue(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} label="Choose Dose" placeholder="Dose" />
      )}
    />
  );
}

const dose = [
  "1 + 0 + 1",
  "1 + 1 + 1",
  "0 + 1 + 1",
  "1 + 1 + 0",
  "0 + 0 + 1",
  "0 + 1 + 0",
];
