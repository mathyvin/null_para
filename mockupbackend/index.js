const express = require('express')
const app = express()
const PORT = 3002

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const session = require('express-session');

// Einbinden der Session-Middleware
app.use(session({
  secret: 'dein geheimes Wort', 
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

// Für JSON-Body-Parsing
app.use(express.json());

const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:3000',  // oder den Port, auf dem Ihre Frontend-Anwendung läuft
  optionsSuccessStatus: 200 // Für ältere Browser-Versionen, die nicht HTTP-Status 204 unterstützen
}

app.use(cors(corsOptions));


// Dummy-Datenbank (als Platzhalter)
let users = [
    {
      id: 1,
      username: 'elternteil',
      password: '$2a$10$Mq/TjO0.8KSS.VC8kec9WOXj2OTC2ep.ytnKI8IT0slyfU4uIKv22',
      role: 'parent',
      balance: 100
    },
    {
      id: 2,
      username: 'kind',
      password: '$2a$10$Mq/TjO0.8KSS.VC8kec9WOXj2OTC2ep.ytnKI8IT0slyfU4uIKv22',
      role: 'child',
      balance: 20
    }
  ];


  app.post('/logout', (req, res) => {
    // Die User-Session zerstören
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ error: 'Failed to logout' });
        }

        res.json({ message: 'Successfully logged out' });
    });
});

  // Route für den Login
  app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username);

    if (!user) {
        return res.status(400).json({ error: 'Username not found' });
    }

    // Passwort-Vergleich mit bcrypt
    const isMatch = await bcrypt.compare(password, user.password);
    
    if (!isMatch) {
        return res.status(400).json({ error: 'Incorrect password' });
    }

    // User in die Session speichern
    req.session.user = user;

    res.json({ message: 'Successfully logged in', user });
});
  // Route zum Abrufen aller Benutzer
app.get('/users', (req, res) => {
  res.json(users);
});

// Route zum Erstellen eines neuen Benutzers
app.post('/users', async (req, res) => {
  const { username, password, role, balance } = req.body;

  // Passwort hashen, bevor es gespeichert wird
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: users.length + 1,
    username: username,
    password: hashedPassword,
    role: role,
    balance: balance
  };

  users.push(newUser);

  res.status(201).json(newUser);
});

// Route zum Aktualisieren eines Benutzers
app.put('/users/:id', async (req, res) => {
  const userId = parseInt(req.params.id);
  const { username, password, role, balance } = req.body;

  const userToUpdate = users.find(user => user.id === userId);

  if (!userToUpdate) {
    return res.status(404).json({ message: 'Benutzer nicht gefunden' });
  }

  if (username) {
    userToUpdate.username = username;
  }
  if (password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    userToUpdate.password = hashedPassword;
  }
  if (role) {
    userToUpdate.role = role;
  }
  if (balance) {
    userToUpdate.balance = balance;
  }

  res.json(userToUpdate);
});

// Route zum Löschen eines Benutzers
app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);

  const userIndex = users.findIndex(user => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ message: 'Benutzer nicht gefunden' });
  }

  users.splice(userIndex, 1);

  res.json({ message: 'Benutzer wurde gelöscht' });
});


let tasks = [
  {
    id: 2,
    title: 'Aufräumen',
    description: 'Aufräumen',
    completed: false,
    value: 2
  },
    {
      id: 1,
      title: 'Mathe Drei',
      description: 'Schulnoten',
      completed: false,
      value: 50
      }
  ];

  // Route zum Abrufen aller Aufgaben
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Route zum Erstellen einer neuen Aufgabe
app.post('/tasks', (req, res) => {
  const { title, description, completed, value } = req.body;

  const newTask = {
    id: tasks.length + 1,
    title: title,
    description: description,
    completed: completed,
    value: value
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

// Route zum Aktualisieren einer Aufgabe
app.put('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const { title, description, completed } = req.body;

  const taskToUpdate = tasks.find(task => task.id === taskId);

  if (!taskToUpdate) {
    return res.status(404).json({ message: 'Aufgabe nicht gefunden' });
  }

  if (title) {
    taskToUpdate.title = title;
  }
  if (description) {
    taskToUpdate.description = description;
  }
  if (completed !== undefined) {
    taskToUpdate.completed = completed;
  }

  res.json(taskToUpdate);
});

// Route um eine neue aufgabe hinzuzufügen
app.post('/tasks', (req, res) => {
  const { title, description, completed, value } = req.body;

  const newTask = {
    id: tasks.length + 1,
    title: title,
    description: description,
    completed: completed,
    value: value
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

app.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);

  const taskIndex = tasks.findIndex(task => task.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Aufgabe nicht gefunden' });
  }

  // Find the task to be deleted
  const taskToDelete = tasks[taskIndex];

  // TODO: Here you should check for the login user
  const loggedInUser = users[1];

  // Create a transaction object
  const transaction = {
    id: transactions.length + 1, // Assign a new ID
    amount: taskToDelete.value,  // Use the task value as the transaction amount
    description: `Task Completed: ${taskToDelete.title}`, // Add a description
    senderId: loggedInUser.id,   // Assign the sender ID (assuming it's the logged-in user)
    receiverId: "Papa", // You need to specify the receiver ID
    datetime: new Date().toISOString() // Use the current date and time
  };

  // Add the transaction to the transactions array
  transactions.push(transaction);

  // Update the balance
  loggedInUser.balance += taskToDelete.value;

  // Remove the task from the tasks list
  tasks.splice(taskIndex, 1);

  res.json({ message: 'Aufgabe wurde gelöscht, Balance wurde aktualisiert und Transaktion wurde hinzugefügt' });
});



let transactions = [
    {
      id: 1,
      amount: 5,
      description: 'Taschengeld',
      senderId: 1,
      receiverId: "Eltern",
      datetime: (new Date()).toISOString() 
    },
    {
      id: 2,
      amount: -2,
      description: 'Pokemon Go',
      senderId: 1,
      receiverId: "Pokemon Go",
      datetime: (new Date()).toISOString() 
  }
  
  ];
// Route zum Abrufen aller Transaktionen
app.get('/transactions', (req, res) => {
  res.json(transactions);
});

// Route zum Erstellen einer neuen Transaktion
app.post('/transactions', (req, res) => {
  const { amount, description, senderId, receiverId, datetime } = req.body;

  const newTransaction = {
    id: transactions.length + 1,
    amount: amount,
    description: description,
    senderId: senderId,
    receiverId: receiverId,
    datetime: datetime
  };

  transactions.push(newTransaction);

  res.status(201).json(newTransaction);
});

// Route zum Aktualisieren einer Transaktion
app.put('/transactions/:id', (req, res) => {
  const transactionId = parseInt(req.params.id);
  const { amount, description, senderId, receiverId, datetime } = req.body;

  const transactionToUpdate = transactions.find(transaction => transaction.id === transactionId);

  if (!transactionToUpdate) {
    return res.status(404).json({ message: 'Transaktion nicht gefunden' });
  }

  if (amount !== undefined) {
    transactionToUpdate.amount = amount;
  }
  if (description) {
    transactionToUpdate.description = description;
  }
  if (senderId !== undefined) {
    transactionToUpdate.senderId = senderId;
  }
  if (receiverId !== undefined) {
    transactionToUpdate.receiverId = receiverId;
  }
  if (datetime !== undefined) {
    transactionToUpdate.datetime = datetime;
  }
  res.json(transactionToUpdate);
});

// Route zum Löschen einer Transaktion
app.delete('/transactions/:id', (req, res) => {
  const transactionId = parseInt(req.params.id);

  const transactionIndex = transactions.findIndex(transaction => transaction.id === transactionId);

  if (transactionIndex === -1) {
    return res.status(404).json({ message: 'Transaktion nicht gefunden' });
  }

  transactions.splice(transactionIndex, 1);

  res.json({ message: 'Transaktion wurde gelöscht' });
});



let savingsGoals = [
    {
      id: 1,
      title: 'Lego Deathstar',
      amount: 115,
      savedAmount: 20,
      childId: 2
    },
    {
      id: 2,
      title: 'Videospiel',
      amount: 60,
      savedAmount: 10,
      childId: 2
    }
  ];

  
// Route zum Abrufen aller Sparziele
app.get('/savingsGoals', (req, res) => {
  res.json(savingsGoals);
});

// Route zum Erstellen eines neuen Sparziels
app.post('/savingsGoals', (req, res) => {
  const { title, amount, savedAmount, childId } = req.body;

  const newSavingsGoal = {
    id: savingsGoals.length + 1,
    title: title,
    amount: amount,
    savedAmount: savedAmount,
    childId: childId
  };

  savingsGoals.push(newSavingsGoal);

  res.status(201).json(newSavingsGoal);
});

// Route zum Aktualisieren eines Sparziels
app.put('/savingsGoals/:id', (req, res) => {
  const goalId = parseInt(req.params.id);
  const { title, amount, savedAmount, childId } = req.body;

  const goalToUpdate = savingsGoals.find(goal => goal.id === goalId);

  if (!goalToUpdate) {
    return res.status(404).json({ message: 'Sparziel nicht gefunden' });
  }

  if (title) {
    goalToUpdate.title = title;
  }
  if (amount !== undefined) {
    goalToUpdate.amount = amount;
  }
  if (savedAmount !== undefined) {
    goalToUpdate.savedAmount = savedAmount;
  }
  if (childId !== undefined) {
    goalToUpdate.childId = childId;
  }

  res.json(goalToUpdate);
});

// Route zum Löschen eines Sparziels
app.delete('/savingsGoals/:id', (req, res) => {
  const goalId = parseInt(req.params.id);

  const goalIndex = savingsGoals.findIndex(goal => goal.id === goalId);

  if (goalIndex === -1) {
    return res.status(404).json({ message: 'Sparziel nicht gefunden' });
  }

  savingsGoals.splice(goalIndex, 1);

  res.json({ message: 'Sparziel wurde gelöscht' });
});
let videoLessons = [
    {
      id: 1,
      title: 'Wie man spart',
      description: 'Grundlagen des Sparens.',
      url: 'https://beispielvideo1.de'
    },
    {
      id: 2,
      title: 'Geld und du',
      description: 'Wie man verantwortungsvoll mit Geld umgeht.',
      url: 'https://beispielvideo2.de'
    }
  ];


// Route zum Abrufen aller Video-Lektionen
app.get('/videoLessons', (req, res) => {
  res.json(videoLessons);
});

// Route zum Erstellen einer neuen Video-Lektion
app.post('/videoLessons', (req, res) => {
  const { title, description, url } = req.body;

  const newVideoLesson = {
    id: videoLessons.length + 1,
    title: title,
    description: description,
    url: url
  };

  videoLessons.push(newVideoLesson);

  res.status(201).json(newVideoLesson);
});

// Route zum Aktualisieren einer Video-Lektion
app.put('/videoLessons/:id', (req, res) => {
  const lessonId = parseInt(req.params.id);
  const { title, description, url } = req.body;

  const lessonToUpdate = videoLessons.find(lesson => lesson.id === lessonId);

  if (!lessonToUpdate) {
    return res.status(404).json({ message: 'Video-Lektion nicht gefunden' });
  }

  if (title) {
    lessonToUpdate.title = title;
  }
  if (description) {
    lessonToUpdate.description = description;
  }
  if (url) {
    lessonToUpdate.url = url;
  }

  res.json(lessonToUpdate);
});

// Route zum Löschen einer Video-Lektion
app.delete('/videoLessons/:id', (req, res) => {
  const lessonId = parseInt(req.params.id);

  const lessonIndex = videoLessons.findIndex(lesson => lesson.id === lessonId);

  if (lessonIndex === -1) {
    return res.status(404).json({ message: 'Video-Lektion nicht gefunden' });
  }

  videoLessons.splice(lessonIndex, 1);

  res.json({ message: 'Video-Lektion wurde gelöscht' });
});

let quizzes = [];

// Route zum Aktualisieren des Aufgabenstatus
app.put('/tasks/:id/completed', (req, res) => {
  const taskId = parseInt(req.params.id);
  const { completed } = req.body;

  const taskToUpdate = tasks.find(task => task.id === taskId);

  if (!taskToUpdate) {
    return res.status(404).json({ message: 'Aufgabe nicht gefunden' });
  }

  if (completed !== undefined) {
    taskToUpdate.completed = completed;
  }

  res.json(taskToUpdate);
});

// Route zum Löschen einer Aufgabe
app.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);

  const taskIndex = tasks.findIndex(task => task.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Aufgabe nicht gefunden' });
  }

  tasks.splice(taskIndex, 1);

  res.json({ message: 'Aufgabe wurde gelöscht' });
});



app.listen(PORT, () => {
    console.log(`Server läuft auf PORT ${PORT}`);
});
