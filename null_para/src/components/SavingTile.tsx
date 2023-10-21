import React, { useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";

interface SavingTileProgressBarProps {
  currentAmount: number;
  goalAmount: number;
}

export default function SavingTileProgressBar(
  props: SavingTileProgressBarProps,
) {
  const progress = (props.currentAmount / props.goalAmount) * 100;

  return (
    <div>
      <h3>Playstation 5</h3>
      <LinearProgress variant="determinate" value={progress} />
      <p>{progress.toFixed(2)}%</p>
    </div>
  );
}
