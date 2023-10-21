import { Paper, Typography, Box, Grid, LinearProgress, linearProgressClasses } from "@mui/material";
import { styled } from '@mui/material/styles';
import theme from "../utils/ThemeProvider";


export const HomePageBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100vw",
  p: 3,
  padding: '10px',
  paddingTop: '0',
  marginTop: '0'
})

export const StyledBankingGrid = styled(Grid)({
  padding: '5px !important',
})

export const StyledGridItem = styled(Grid)({
  margin: '5px',
  paddingTop: '0px !important',
  marginTop: '5px',
});

export const StyledBoxForPiggyBank = styled(Box)({
  display: "flex", 
  flexDirection: "column",
  alignItems: "center", 
  justifyContent: "center",
  width: "100vw",
  p: 3,
  padding: '10px',
  background: theme.palette.secondary.main
})

export const StyledTypographyBalanceTitle = styled(Typography)({
  fontSize: '25px',
  padding: '0px !important',
  lineHeight: '12px',
  color: theme.palette.primary.main,
});


export const StyledTypographyBalance = styled(Typography)({
  fontSize: '40px',
  fontWeight: 'bold',
  padding: '0px !important',
  lineHeight: '40px',
  margin: '10px',
  color: "white",
});

export const CustomLinearProgress = styled(LinearProgress)(({ }) => ({
  height: 30,
  borderRadius: 5,
  marginBottom: '10px',
  paddingRight: '50px',
  paddingLeft: '50px'
}));

export const StyledPaper = styled(Paper)({
  flexBasis: 'calc(33.33% - 16px)', // Assumes 8px spacing on either side
  boxSizing: 'border-box',
  paddingRight: '3px',
  paddingTop: '8px',
  marginTop: '5px',
  marginBottom: '4px', // Add spacing between tiles vertically
  marginLeft: '4px', // Spacing on the left side of each tile
  height: '100%',
  textAlign: 'center',
  color: 'black',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '5px',
  minHeight: '80px',
  columnGap: '3px !important'
});


export const StyledBox = styled(Box)({
  gap: '3px !important',
})

export const StyledBoxItem = styled(Box)({
  margin: '5px',
  paddingTop: '0px !important',
  marginTop: '5px',
  gap: '5px !important',
});

export const StyledTypographyBig = styled(Typography)({
  fontSize: '18px',
  fontWeight: 'bold',
  padding: '0px !important',
  lineHeight: '12px'
});

export const StyledTypographySmall = styled(Typography)({
  fontSize: '12px',
  lineHeight: '12px'
});

export const StyledBankingBox = styled(Box)({
    padding: '5px !important',
})
