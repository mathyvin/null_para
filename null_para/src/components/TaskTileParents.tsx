import { Box, IconButton, Paper, Typography } from '@mui/material';
import { StyledBoxItem, StyledPaperColumn, StyledTypographyBig, StyledTypographyBigNotBold, StyledTypographySmall } from './StyledComponents'
import React, { useState } from 'react';
import { ITask } from '../interfaces/ITask';
import { toDoubleDecimal } from '../utils/utils';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

interface TaskTileParams {
  task: ITask
}

export default function TaskTileParents({task} : TaskTileParams){
  const [isHovered, setIsHovered] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  const handleButtonClick = () => {
      //submitParentMethode callen
      setIsAccepted(true);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  return (  
    <StyledPaperColumn>
      <Box display="flex" flexDirection="row" gap={0}>
      <StyledBoxItem sx={{ width: '75%' }}>
      <Box display="flex" flexDirection="column" gap={2}>
        <StyledBoxItem>
          <StyledTypographyBig textAlign="left">
            {toDoubleDecimal(task.value)}€
          </StyledTypographyBig>
        </StyledBoxItem>

        <StyledBoxItem>
          <StyledTypographyBigNotBold textAlign="left">
              {task.title}
          </StyledTypographyBigNotBold>
        </StyledBoxItem>
      </Box>
      </StyledBoxItem>
      <StyledBoxItem sx={{ width: '15%' }}>
      <Box justifyContent="flex-end" display="flex" flexDirection="row" gap={2}>
        <StyledBoxItem marginRight={'10'}>
          <StyledTypographySmall>
          <IconButton 
            onClick={handleButtonClick} 
            color="primary" 
            aria-label="CheckCircle"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}      
            >
      {isAccepted && 'Accepted'} {isHovered || isAccepted ? <CheckCircleIcon fontSize='large' /> : <CheckCircleOutlineIcon fontSize='large' />}
    </IconButton>
          </StyledTypographySmall>
      </StyledBoxItem>
      </Box>
      </StyledBoxItem>
      </Box>
    </StyledPaperColumn>
  )
}
