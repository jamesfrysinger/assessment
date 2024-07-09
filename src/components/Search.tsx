import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from "react";
import ButtonStyled from "./common/ButtonStyled";
import TextFieldStyled from "./common/TextFieldStyled";

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
      <TextFieldStyled
        value={searchTerm}
        onChange={handleChange}
        label="Enter a name"
        helperText="Search for employees. Enter a name above."
      />
      <ButtonStyled label="Search" onClick={handleSubmit} />
    </section>
  );
};

export default Search;
