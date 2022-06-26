import { Grid } from "@mui/material";

interface StackProps {
  left: React.ReactNode;
  right: React.ReactNode;
}
export const Splitter: React.FC<StackProps> = ({ left, right }) => {
  return (
    <Grid container>
      <Grid item xs={5.7}>
        {left}
      </Grid>
      <Grid item xs={0.6} />
      <Grid item xs={5.7}>
        {right}
      </Grid>
    </Grid>
  );
};
