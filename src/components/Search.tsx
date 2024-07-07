import { Button, TextField } from "@mui/material";

const Search = () => {
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
      />
      <Button
        variant="contained"
        style={{ height: "55px", borderRadius: "0", backgroundColor: "#000" }}
      >
        Search
      </Button>
    </section>
  );
};

export default Search;
