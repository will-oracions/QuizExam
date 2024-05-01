import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import React from "react";

interface Props<TData> {
  label: string;
  data: TData[];
}

const CustomAutoComplete = React.forwardRef(
  <TData extends Record<string, any>>(
    { data, label }: Props<TData>,
    ref: any
  ) => {
    console.log("ddd: ", data);
    return (
      <Autocomplete
        fullWidth
        disablePortal
        id="combo-box-demo"
        options={data}
        // style={{ zIndex: 15000 }}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={label} />}
        ref={ref}
      />
    );
  }
);

export default CustomAutoComplete;
