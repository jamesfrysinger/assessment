import { TextField } from '@mui/material';
import { ChangeEvent, FC } from 'react';

const TextFieldStyled: FC<{
  label: string;
  helperText: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}> = ({ label, helperText, value, onChange }) => {
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      style={{ width: '100%' }}
      helperText={helperText}
      FormHelperTextProps={{
        sx: { marginLeft: '0', color: '#888' },
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: 0,
          borderRight: 0,
        },
      }}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextFieldStyled;
