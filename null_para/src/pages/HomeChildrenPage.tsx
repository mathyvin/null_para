import React, { useEffect, useState } from 'react';
import { AppBar, IconButton, Typography, Box, List, ListItem, ListItemText, LinearProgress, Toolbar } from '@mui/material';
import SavingTileProgressBar from '../components/SavingTile';
import MenuIcon from '@mui/icons-material/Menu';
import { Navigation } from '@mui/icons-material';
import BankingTile from '../components/BankingTile';
import TaskTile from '../components/TaskTile';

import { getTransactions, getTasks, getSavingsGoals } from '../backend/crud';
import { ITask } from '../interfaces/ITask';
import { ITransaction } from '../interfaces/ITransaction';
import theme from '../utils/ThemeProvider';
import {HomePageBox, StyledBoxForPiggyBank, StyledTypographyBalance, StyledTypographyBalanceTitle, StyledTypographyBig } from '../components/StyledComponents';
import { Sparziel } from '../components/Sparziel';
import { ISavingsGoal } from '../interfaces/ISavingsGoal';

export default function HomeChildrenPage() {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [balance, setBalance] = useState<number>(0);
  const [saving, setSaving] = useState<ISavingsGoal>();

  useEffect(() => {
    async function fetchData() {
      const fetchedTransactions = await getTransactions();
      setTransactions(fetchedTransactions);

      const fetchedTasks = await getTasks();
      setTasks(fetchedTasks);

      const fetchedSavings = await getSavingsGoals();
      // TODO Needs to be done with favourite saving
      // setSavingGoal(fetchedSavings.map((fetchedSaving: ISavingsGoal) => fetchedSaving.favourite));
      setSaving(fetchedSavings[0])
      

      setBalance(300);
    }

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  
  return (
    <HomePageBox>
      <StyledBoxForPiggyBank>
      <img src="/images/Schwein.png" alt="Piggy" style={{ width: 150, height: 150 }} />
      <StyledTypographyBalanceTitle>Kontostand</StyledTypographyBalanceTitle>
      <StyledTypographyBalance>{balance.toFixed(2)}€</StyledTypographyBalance>
      </StyledBoxForPiggyBank>

      <Box width={{ xs: '100%', sm: '80%', md: '60%' }} my={2}>
        <StyledTypographyBig>Letzten Zahlungen</StyledTypographyBig>
        <Box display="flex" flexDirection="row" flexWrap="wrap">
          {transactions.slice(0, 3).map((transaction, index) => (
            <Box key={index} m={1} width="calc(33.33% - 16px)">
              <BankingTile transaction={transaction} />
            </Box>
          ))}
        </Box>
      </Box>

      <Box width={{ xs: '100%', sm: '80%', md: '60%' }} my={2}>
        <StyledTypographyBig variant="h6">Letzte Aufgaben</StyledTypographyBig>
        <Box display="flex" flexDirection="row" flexWrap="wrap">
          {tasks.slice(0, 3).map((task, index) => (
            <Box key={index} m={1} width="calc(33.33% - 16px)">
              <TaskTile task={task} />
            </Box>
          ))}
        </Box>
      </Box>

      <Box width={{ xs: '100%', sm: '80%', md: '60%' }} my={2}>
        {saving?.amount &&
        <Sparziel balance={balance} amount={saving.amount} title={saving.title} />
        }
      </Box>
    </HomePageBox>
  );



}
