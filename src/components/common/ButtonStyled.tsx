import { Button } from "@mui/material";
import { FC } from "react";

const ButtonStyled: FC<{
  label: string;
  onClick?: () => void;
  type: string;
}> = ({ label, onClick, type }) => {
  return (
    <Button
      variant="contained"
      type="submit"
      sx={{
        height: "56px",
        marginLeft: "-1px",
        borderRadius: 0,
        backgroundColor: "#000",
        boxShadow: "none",
        "&:hover": {
          backgroundColor: "#f8dd14",
          boxShadow: "none",
        },
      }}
      onClick={onClick ? onClick : undefined}
    >
      {label}
    </Button>
  );
};

export default ButtonStyled;
