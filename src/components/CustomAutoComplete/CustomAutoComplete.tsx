import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

interface Props<TData> {
  label: string;
  data: TData[];
}

const CustomAutoComplete = <TData extends Record<string, any>>({
  data,
  label,
}: Props<TData>) => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={data}
      // style={{ zIndex: 15000 }}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};

export default CustomAutoComplete;
