import { useEffect, useState } from "react";
import {
  Box,
  Button,
  
} from "@mui/material";
import { HomePageBox, StyledTypographyBig,StyledTypographyBigNotBold } from "../components/StyledComponents";
import { Sparziel} from "../components/Sparziel";
import { ITask } from "../interfaces/ITask";
import { ISavingsGoal } from "../interfaces/ISavingsGoal";
import TaskTile from "../components/TaskTile";
import {

  getTasks,
  getSavingsGoals,

} from "../backend/crud";
import AddIcon from '@mui/icons-material/Add';
export default function SavingChildrenPage() {

  const [tasks, setTasks] = useState<ITask[]>([]);
  const [savingGoals, setSavingGoals] = useState<ISavingsGoal[]>([]);
  const checkAndDeleteCompletedTask = async (fetchedTasks: ITask[]) => {
    console.log(fetchedTasks);
    const completedTasks = fetchedTasks.filter(
      (task) => task.completed !== false,
    );
  }
  useEffect(() => {
    async function fetchData() {
    const fetchedTasks = await getTasks();
    if (fetchedTasks.length > 0) {
      await checkAndDeleteCompletedTask(fetchedTasks);
    }

    const fetchedSavingsGoals = await getSavingsGoals();
  
    setTasks(fetchedTasks);
    setSavingGoals(fetchedSavingsGoals);
  }
     const interval = setInterval(() => {
      fetchData();
    }, 2000);
    


    return () => clearInterval(interval);
    }
  
    , []);


  return (
    <HomePageBox>
    <Box width={{ xs: "100%", sm: "80%", md: "60%" }} my={2}>
    <StyledTypographyBig
      marginTop={window.innerHeight > 830 ? "35px" : "10px"}
      marginBottom="10px"
    >
      Deine Aufgaben für Belohnungen
    </StyledTypographyBig>
    <Box display="flex" flexDirection="column" flexWrap="wrap">
          {tasks.length > 0 ? (
            tasks.slice(0, 3).map((task, index) => (
              <Box key={index} m={1}>
                <TaskTile task={task} />
              </Box>
            ))
          ) : (
            <StyledTypographyBigNotBold margin="15px">
              Keine Tasks
            </StyledTypographyBigNotBold>
          )}
        </Box>
        <StyledTypographyBig
      marginTop={window.innerHeight > 830 ? "35px" : "10px"}
      marginBottom="10px"
    >
      Sparziele - füge neue Ziele hinzu
      <Box display="flex" flexDirection="column" flexWrap="wrap">
          {savingGoals.length > 0 ? (
            savingGoals.slice(0, 3).map((savingGoal, index) => (
              <Box key={index} m={1}>
             <Sparziel isBlinkingOn={false} title={savingGoal.title} amount={savingGoal.amount} balance={savingGoal.savedAmount}></Sparziel>
              </Box>
            ))
          ) : (
            <StyledTypographyBigNotBold margin="15px">
              Keine Sparziele
            </StyledTypographyBigNotBold>
          )}
        </Box>
    </StyledTypographyBig>
  
    <Button  startIcon={<AddIcon />} variant="contained" >Hinzufügen</Button>
   
    </Box>
    </HomePageBox>
  );
  }
