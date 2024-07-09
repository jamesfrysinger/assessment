import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from 'react';
import ButtonStyled from './common/ButtonStyled';
import TextFieldStyled from './common/TextFieldStyled';
import { Box } from '@mui/material';

const Search: FC<{
  setQuery: Dispatch<SetStateAction<string | undefined>>;
}> = ({ setQuery }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setQuery(searchTerm);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  return (
    <Box component="form" onSubmit={handleSubmit} className="flex">
      <TextFieldStyled
        value={searchTerm}
        onChange={handleChange}
        label="Enter a name"
        helperText="Search for employees. Enter a name above."
      />
      <ButtonStyled label="Search" type="submit" />
    </Box>
  );
};

export default Search;
