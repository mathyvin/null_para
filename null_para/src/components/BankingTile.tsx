import {
  StyledBox,
  StyledBoxItem,
  StyledPaper,
  StyledTypographyBig,
  StyledTypographySmall,
} from "./StyledComponents";
import React, { useEffect, useState } from "react";
import { ITransaction } from "../interfaces/ITransaction";
import { dateReturn } from "../utils/date";
import { toDoubleDecimal } from "../utils/utils";

interface BankingTileParams {
  isBlinkingOn: boolean;
  transaction: ITransaction;
}
export default function BankingTile({ isBlinkingOn, transaction }: BankingTileParams) {
  const [blinkClass, setBlinkClass] = useState('');

  useEffect(() => {
    if (transaction.amount > 0) {
      setBlinkClass('blinkingGreen');
    } else if (transaction.amount < 0) {
      setBlinkClass('blinkingRed');
    }
  }, [transaction]);

  return (
    <StyledPaper>
      <StyledBox display="flex" flexDirection="column">
        <StyledBoxItem>
          <StyledTypographyBig className={isBlinkingOn ? blinkClass: ''}>
            {toDoubleDecimal(transaction.amount)}€
          </StyledTypographyBig>
        </StyledBoxItem>

        <StyledBoxItem>
          <StyledTypographySmall className={isBlinkingOn ? blinkClass: ''}>
            {dateReturn(transaction.datetime)}
          </StyledTypographySmall>
        </StyledBoxItem>

        <StyledBoxItem>
          <StyledTypographySmall>
            {transaction.receiverId}
          </StyledTypographySmall>
        </StyledBoxItem>
      </StyledBox>
    </StyledPaper>
  );
}
