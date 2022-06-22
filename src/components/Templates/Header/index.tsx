import { Typography } from "@mui/material";

export const Header: React.FC = () => {
  return (
    <Typography
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: 1,
        fontSize: 20,
        height: 50,
        fontWeight: "bold",
      }}
      color="#313131"
    >
      開発アカウント
    </Typography>
  );
};
