import { createTheme } from "@mui/system";

const { palette } = createTheme();
const { augmentColor } = palette;

export const createColor = (mainColor) => 
augmentColor({ color: { main: mainColor } });
