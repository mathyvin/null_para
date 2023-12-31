import { useEffect, useState } from "react";
import {
  Box,
} from "@mui/material";

import {
  getTransactions,
  getTasks,
  getUsers,
} from "../backend/crud";
import { ITask } from "../interfaces/ITask";
import { ITransaction } from "../interfaces/ITransaction";
import {
  HomePageBox,
  StyledBoxForPiggyBank,
  StyledTypographyBalance,
  StyledTypographyBalanceTitle,
  StyledTypographyBig,
} from "../components/StyledComponents";
import TaskTileParents from "../components/TaskTileParents";
import { IUser } from "../interfaces/IUser";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import SendingMoneyTile from "../components/SendingMoneyTile";
import BASE_URL from "../config";

export default function HomeParentPage() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [balance, setBalance] = useState<number>(0);
  
  const kindName = 'Vladimir';

  const [open, setOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    amount: 0,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewTask({
      ...newTask,
      [name]: name === "amount" ? parseFloat(value) : value,
    });
  };

  const handleAddTask = () => {
    // Create a new task object with the data entered by the user
    const newTaskData = {
      title: newTask.title,
      description: "", // You can leave this empty or modify it as needed
      completed: false, // Initial value for completed
      value: newTask.amount, // Use the amount entered by the user
    };
    console.log(`${BASE_URL}/tasks`)
  
    // Send a POST request to add the new task
    fetch(`${BASE_URL}/tasks`, {

      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTaskData),
    })
      .then((response) => {
        if (response.ok) {
          // Fetch the updated task list and set it in the state
          fetchData(); // Assuming fetchData() fetches the updated task list
          handleClose(); // Close the dialog
        } else {
          console.error("Fehler beim Hinzufügen der Aufgabe");
        }
      })
      .catch((error) => {
        console.error("Fehler beim Senden der Anfrage:", error);
      });
  };
  
  async function fetchData() {
    const fetchedTasks = await getTasks();
    setTasks(fetchedTasks);

    //TODO Login user would be selected
    const fetchedUsers: IUser[] = await getUsers();

    setBalance(fetchedUsers[1].balance);
  }
  useEffect(() => {


    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = (task: ITask) => {
    // PUT-Anfrage an den Endpunkt /tasks/:id/completed senden
    fetch(`${BASE_URL}/tasks/${task.id}/completed`, {

      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: true }), // Hier wird der completed-Status auf true gesetzt
    })
      .then((response) => {
        if (response.ok) {
          task.completed = true;
          setTasks(tasks);
        } else {
          // Handle den Fall, wenn die Anfrage fehlschlägt
          console.error("Fehler beim Aktualisieren des Aufgabenstatus");
        }
      })
      .catch((error) => {
        console.error("Fehler beim Senden der Anfrage:", error);
      });
  };

  return (
    <HomePageBox>
      <StyledBoxForPiggyBank padding="20px">
        <StyledTypographyBalanceTitle marginTop="20px">
          Kontostand von {kindName}
        </StyledTypographyBalanceTitle>
        <StyledTypographyBalance>{balance.toFixed(2)}€</StyledTypographyBalance>
      </StyledBoxForPiggyBank>

      <Box width={{ xs: "100%", sm: "80%", md: "60%" }} paddingTop="25px" my={2}>
        <StyledTypographyBig>Aufgaben von {kindName}</StyledTypographyBig>
        <Box display="flex" flexDirection="column" gap={"0px"} flexWrap="wrap">
          {tasks.slice(0, 3).map((task, index) => (
            <Box key={"task" + task.id} m={1}>
              <TaskTileParents
                handleButtonClick={handleButtonClick}
                task={task}
              />
            </Box>
          ))}
        </Box>
      </Box>
      

      <Button color='success' variant="outlined" onClick={handleClickOpen}>
        Neue Aufgabe hinzufügen
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Neue Aufgabe hinzufügen</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name der Aufgabe"
            name="title"
            fullWidth
            value={newTask.title}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Betrag"
            type="number"
            name="amount"
            fullWidth
            value={newTask.amount}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='error'>
            Abbrechen
          </Button>
          <Button onClick={handleAddTask} color='success'>
            Hinzufügen
          </Button>
        </DialogActions>
      </Dialog>


      <Box width={{ xs: "100%", sm: "80%", md: "60%" }} paddingTop="25px" my={2}>
        <StyledTypographyBig>Schnell Geld senden</StyledTypographyBig>
        <Box display="flex" flexDirection="column" gap={"0px"} flexWrap="wrap">
            <Box m={1}>
              <SendingMoneyTile />
            </Box>
        </Box>
      </Box>

    </HomePageBox>

  );
}
