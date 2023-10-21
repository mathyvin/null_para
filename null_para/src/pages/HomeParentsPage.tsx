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
import {HomePageBox, StyledBoxForPiggyBank, StyledTypographyBalance, StyledTypographyBalanceTitle, StyledTypographyBig } from '../components/StyledComponents';
import { Sparziel } from '../components/Sparziel';
import { ISavingsGoal } from '../interfaces/ISavingsGoal';
import TaskTileParents from '../components/TaskTileParents';
import { IUser } from '../interfaces/IUser';

export default function HomeParentPage() {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    async function fetchData() {
      const fetchedTransactions = await getTransactions();
      setTransactions(fetchedTransactions);

      const fetchedTasks = await getTasks();
      setTasks(fetchedTasks);
      
      //TODO Login user would be selected
      const fetchedUsers : IUser[] = await getUsers();
      
      setBalance(fetchedUsers[1].balance);
    }

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = (task : ITask) => {
    // PUT-Anfrage an den Endpunkt /tasks/:id/completed senden
    fetch(`http://localhost:3002/tasks/${task.id}/completed`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed: true }), // Hier wird der completed-Status auf true gesetzt
    })
      .then(response => {
        if (response.ok) {
          task.completed = true
          setTasks(tasks)
        } else {
          // Handle den Fall, wenn die Anfrage fehlschlägt
          console.error('Fehler beim Aktualisieren des Aufgabenstatus');
        }
      })
      .catch(error => {
        console.error('Fehler beim Senden der Anfrage:', error);
      });
  };
  
  return (
    <HomePageBox>
      <StyledBoxForPiggyBank>
      <StyledTypographyBalanceTitle marginTop='20px'>Kontostand von Vladimir</StyledTypographyBalanceTitle>
      <StyledTypographyBalance>{balance.toFixed(2)}€</StyledTypographyBalance>
      </StyledBoxForPiggyBank>


      <Box width={{ xs: '100%', sm: '80%', md: '60%' }} my={2}>
        <StyledTypographyBig variant="h6">Letzte Aufgaben</StyledTypographyBig>
        <Box display="flex" flexDirection="column" gap={'0px'} flexWrap="wrap">
          {tasks.slice(0, 3).map((task, index) => (
            <Box key={'task'+index} m={1}>
              <TaskTileParents 
              handleButtonClick={handleButtonClick} 
              task={task} 
              />
            </Box>
          ))}
        </Box>
      </Box>

    </HomePageBox>
  );



}
