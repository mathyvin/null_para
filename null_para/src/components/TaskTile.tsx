import { Box, Paper, Typography } from "@mui/material";
import {
  StyledBoxItem,
  StyledPaper,
  StyledTypographyBig,
  StyledTypographySmall,
} from "./StyledComponents";
import React from "react";
import { ITask } from "../interfaces/ITask";
import { toDoubleDecimal } from "../utils/utils";

interface TaskTileParams {
  task: ITask;
}

export default function TaskTile({ task }: TaskTileParams) {
  return (
    <StyledPaper>
      <Box display="flex" flexDirection="column" gap={2}>
        <StyledBoxItem>
          <StyledTypographyBig>
            {toDoubleDecimal(task.value)}€
          </StyledTypographyBig>
        </StyledBoxItem>

        <StyledBoxItem>
          <StyledTypographySmall variant="body1">
            {task.title}
          </StyledTypographySmall>
        </StyledBoxItem>
      </Box>
    </StyledPaper>
  );
}
