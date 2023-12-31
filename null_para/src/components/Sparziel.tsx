import {
  CustomLinearProgress,
  StyledBox,
  StyledBoxItem,
  StyledPaper,
  StyledTypographyBig,
  StyledTypographySmall,
} from "./StyledComponents";

interface SparzielProps {
  isBlinkingOn: boolean;
  title: string;
  amount: number;
  balance: number;
}

export function Sparziel({ isBlinkingOn, title, amount, balance }: SparzielProps) {
  let progress = Math.round((balance / amount) * 100);
  progress = progress > 100 ? 100 : progress;

  return (
    <StyledPaper>
      <StyledBox display="flex" flexDirection="column">
        <StyledBoxItem>
          <StyledTypographyBig>{title}</StyledTypographyBig>
        </StyledBoxItem>
        <StyledBoxItem>
          <StyledTypographySmall>{amount}€</StyledTypographySmall>
        </StyledBoxItem>
        <StyledBoxItem>
          <CustomLinearProgress
            color="info"
            variant="buffer"
            value={progress}
          />
          <StyledTypographyBig marginBottom="15px">
            {progress}%
          </StyledTypographyBig>
        </StyledBoxItem>
      </StyledBox>
    </StyledPaper>
  );
}
