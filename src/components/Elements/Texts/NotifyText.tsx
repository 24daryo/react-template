import { Typography } from "@mui/material";

type Props = {
  children: React.ReactNode;
};
export const NotifyText: React.FC<Props> = ({ children }) => {
  return (
    <Typography sx={{ fontSize: 16, backgroundColor: "#edf6fe", padding: 2 }}>
      {children}
    </Typography>
  );
};
