import {
  Box,
  Grid,
} from "@mui/material";

export default function SettingsPage() {
  return (
    <Box>
      <Grid
        marginTop="30px"
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        spacing={3}
      >
        Change settings
            <img
            src={'images/Deutschlandflagge.png'}
            style={{ width: "24px", height: "24px", marginRight: "8px" }}
          />
      </Grid>
    </Box>
  );
}
