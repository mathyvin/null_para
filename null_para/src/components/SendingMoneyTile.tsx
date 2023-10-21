import { Box, IconButton, Paper, Typography } from "@mui/material";
import {
  StyledBoxItem,
  StyledPaperColumn,
  StyledTypographyBig,
  StyledTypographyBigNotBold,
  StyledTypographySmall,
} from "./StyledComponents";
import React, { useState } from "react";
import { ITask } from "../interfaces/ITask";
import { toDoubleDecimal } from "../utils/utils";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Send from "@mui/icons-material/Send";

interface SendingMoneyTileParams {
}

export default function SendingMoneyTile({
}: SendingMoneyTileParams) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    
  }

  return (
    <StyledPaperColumn>
      <Box display="flex" flexDirection="row" gap={0}>
        <StyledBoxItem alignContent="center" sx={{ width: "75%" }}>
              <StyledTypographyBigNotBold textAlign="left" alignContent={"center"}>
                {"Sende Geld"}
              </StyledTypographyBigNotBold>
        </StyledBoxItem>
        <StyledBoxItem sx={{ width: "15%" }}>
          <Box
            justifyContent="flex-end"
            display="flex"
            flexDirection="row"
            gap={2}
          >
            <StyledBoxItem marginRight={"10"}>
              <IconButton
                onClick={handleClick}
                color='success'
                                aria-label="CheckCircle"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                  <Send fontSize="large" />
              </IconButton>
            </StyledBoxItem>
          </Box>
        </StyledBoxItem>
      </Box>
    </StyledPaperColumn>
  );
}
