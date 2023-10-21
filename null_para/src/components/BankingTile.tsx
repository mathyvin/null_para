import {
  StyledBox,
  StyledBoxItem,
  StyledPaper,
  StyledTypographyBig,
  StyledTypographySmall,
} from "./StyledComponents";
import React from "react";
import { ITransaction } from "../interfaces/ITransaction";
import { dateReturn } from "../utils/date";
import { toDoubleDecimal } from "../utils/utils";

interface BankingTileParams {
  transaction: ITransaction;
}

export default function BankingTile({ transaction }: BankingTileParams) {
  return (
    <StyledPaper>
      <StyledBox display="flex" flexDirection="column">
        <StyledBoxItem>
          <StyledTypographyBig>
            {toDoubleDecimal(transaction.amount)}€
          </StyledTypographyBig>
        </StyledBoxItem>

        <StyledBoxItem>
          <StyledTypographySmall>
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
