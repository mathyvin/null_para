import React, { useEffect, useState } from 'react';
import { AppBar, IconButton, Typography, Box, List, ListItem, ListItemText, LinearProgress, Toolbar } from '@mui/material';
import SavingTileProgressBar from '../components/SavingTile';
import MenuIcon from '@mui/icons-material/Menu';
import { Navigation } from '@mui/icons-material';
import BankingTile from '../components/BankingTile';
import TaskTile from '../components/TaskTile';

import { getTransactions, getTasks, getSavingsGoals, getUsers } from '../backend/crud';
import { ITask } from '../interfaces/ITask';
import { ITransaction } from '../interfaces/ITransaction';
import theme from '../utils/ThemeProvider';
import {HomePageBox, StyledBoxForPiggyBank, StyledTypographyBalance, StyledTypographyBalanceTitle, StyledTypographyBig, StyledTypographyBigNotBold, StyledTypographySmall } from '../components/StyledComponents';
import { Sparziel } from '../components/Sparziel';
import { ISavingsGoal } from '../interfaces/ISavingsGoal';
import { IUser } from '../interfaces/IUser';

export default function HomeChildrenPage() {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [balance, setBalance] = useState<number>(0);
  const [saving, setSaving] = useState<ISavingsGoal>();


  
  useEffect(() => {
    async function fetchData() {
      const fetchedTransactions : ITransaction[] = await getTransactions();
      fetchedTransactions.sort(function(a : ITransaction,b : ITransaction){
        return new Date(b.datetime).getTime() - new Date(a.datetime).getTime();
      });
      
      setTransactions(fetchedTransactions);
    
      const fetchedTasks = await getTasks();
      if (fetchedTasks.length > 0) {
        await checkAndDeleteCompletedTask(fetchedTasks);
      }
      setTasks(fetchedTasks);
    
      const fetchedSavings = await getSavingsGoals();
      // TODO Needs to be done with the favorite saving
      // setSavingGoal(fetchedSavings.map((fetchedSaving: ISavingsGoal) => fetchedSaving.favourite));
      setSaving(fetchedSavings[0]);
    
      // TODO Login user would be selected
      const fetchedUsers: IUser[] = await getUsers();
    
      setBalance(fetchedUsers[1].balance);
    }
    

    fetchData();

    const interval = setInterval(() => {
      fetchData();
      
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const checkAndDeleteCompletedTask = async (fetchedTasks: ITask[]) => {
    console.log(fetchedTasks)
    const completedTasks = fetchedTasks.filter((task) => task.completed !== false);
  
    if (completedTasks.length > 0) {
      completedTasks.forEach(async (completedTask) => {
        // Here you can trigger an event and send the task ID (completedTask.id) to TaskTile
        // Example:
        console.log('A task has been marked as "completed." ID:', completedTask.id);
  
        // You can also send the delete event to the backend here
        try {
          const response = await fetch(`http://localhost:3002/tasks/${completedTask.id}`, {
            method: 'DELETE',
          });
  
          if (response.ok) {
            console.log('Task deleted successfully.');
          } else {
            console.error('Error deleting the task');
          }
        } catch (error) {
          console.error('Error sending delete request:', error);
        }
      });
    }
  };
  
  
  
  return (
    <HomePageBox>
      <StyledBoxForPiggyBank>
      <img src="/images/Schwein.png" alt="Piggy" style={{ width: 150, height: 150 }} />
      <StyledTypographyBalanceTitle>Kontostand</StyledTypographyBalanceTitle>
      <StyledTypographyBalance>{Number(balance).toFixed(2)}€</StyledTypographyBalance>
      </StyledBoxForPiggyBank>

      <Box width={{ xs: '100%', sm: '80%', md: '60%' }} my={2}>
        <StyledTypographyBig marginTop='25px'>Letzten Zahlungen</StyledTypographyBig>
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
          {tasks.length > 0 ?
          tasks.slice(0, 3).map((task, index) => (
            <Box key={index} m={1} width="calc(33.33% - 16px)">
              <TaskTile task={task} />
            </Box>
          )): <StyledTypographyBigNotBold margin='15px'>Keine Tasks</StyledTypographyBigNotBold>}
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
