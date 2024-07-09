import { Button } from "@mui/material";
import { FC } from "react";

const ButtonStyled: FC<{ label: string; onClick?: () => void }> = ({
  label,
  onClick,
}) => {
  return (
    <Button
      variant="contained"
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
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default ButtonStyled;
