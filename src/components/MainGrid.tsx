import { SxProps, Theme } from "@mui/material";
import Grid from "@mui/material/Grid";
import { ReactNode } from "react";

interface MainGridProps {
  children: ReactNode;
  noBackground?: boolean;
  center?: boolean;
  sx?: SxProps<Theme>;
  sb?: boolean;
}

const MainGrid = ({ children, sx, sb }: MainGridProps) => {
  const options = {
    borderRadius: 3,
    backgroundColor: "white",
    padding: 2,
    marginBottom: sb ? 3 : 0,
    ...sx,
  };
  return (
    <Grid container item direction="column" sx={options}>
      {children}
    </Grid>
  );
};

export default MainGrid;
