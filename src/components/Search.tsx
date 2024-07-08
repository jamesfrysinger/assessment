import { Button, TextField } from "@mui/material";
import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from "react";

const Search: FC<{
  setQuery: Dispatch<SetStateAction<string | undefined>>;
}> = ({ setQuery }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSubmit = () => {
    setQuery(searchTerm);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  return (
    <section className="flex">
      <TextField
        id="outlined-basic"
        label="Enter name"
        variant="outlined"
        style={{ width: "100%" }}
        helperText="Search for users at URBN. Enter a name above."
        FormHelperTextProps={{
          sx: { margin: "10px 0 0 0", color: "#888" },
        }}
        value={searchTerm}
        onChange={handleChange}
      />
      <Button
        variant="contained"
        style={{ height: "55px", borderRadius: "0", backgroundColor: "#000" }}
        onClick={handleSubmit}
      >
        Search
      </Button>
    </section>
  );
};

export default Search;
