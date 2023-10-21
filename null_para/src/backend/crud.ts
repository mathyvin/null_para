import { ITransaction } from "../interfaces/ITransaction";
import { ISavingsGoal } from "../interfaces/ISavingsGoal";
import { IUser } from "../interfaces/IUser";
import { IVideoLesson } from "../interfaces/IVideoLesson";
import { ITask } from "../interfaces/ITask";

const BASE_URL = "http://localhost:3002";

// Login
export const loginUser = async (username: string, password: string) => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  return response.json();
};

// Logout
export const logoutUser = async () => {
  const response = await fetch(`${BASE_URL}/logout`, {
    method: "POST",
  });
  return response.json();
};

// Benutzer-Methoden
export const getUsers = async () => {
  const response = await fetch(`${BASE_URL}/users`);
  return response.json();
};

export const createUser = async (user: IUser) => {
  const response = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return response.json();
};

export const updateUser = async (id: number, user: IUser) => {
  const response = await fetch(`${BASE_URL}/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return response.json();
};

export const deleteUser = async (id: number) => {
  const response = await fetch(`${BASE_URL}/users/${id}`, {
    method: "DELETE",
  });
  return response.json();
};

// Aufgaben-Methoden
export const getTasks = async () => {
  const response = await fetch(`${BASE_URL}/tasks`);
  return response.json();
};

export const createTask = async (task: ITask) => {
  const response = await fetch(`${BASE_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  return response.json();
};

export const updateTask = async (id: number, task: ITask) => {
  const response = await fetch(`${BASE_URL}/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  return response.json();
};

export const deleteTask = async (id: number) => {
  const response = await fetch(`${BASE_URL}/tasks/${id}`, {
    method: "DELETE",
  });
  return response.json();
};

// Transaktions-Methoden
export const getTransactions = async () => {
  const response = await fetch(`${BASE_URL}/transactions`);
  return response.json();
};

export const createTransaction = async (transaction: ITransaction) => {
  const response = await fetch(`${BASE_URL}/transactions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transaction),
  });
  return response.json();
};

export const updateTransaction = async (
  id: number,
  transaction: ITransaction,
) => {
  const response = await fetch(`${BASE_URL}/transactions/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transaction),
  });
  return response.json();
};

export const deleteTransaction = async (id: number) => {
  const response = await fetch(`${BASE_URL}/transactions/${id}`, {
    method: "DELETE",
  });
  return response.json();
};

// Sparziel-Methoden
export const getSavingsGoals = async () => {
  const response = await fetch(`${BASE_URL}/savingsGoals`);
  return response.json();
};

export const createSavingsGoal = async (goal: ISavingsGoal) => {
  const response = await fetch(`${BASE_URL}/savingsGoals`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(goal),
  });
  return response.json();
};

export const updateSavingsGoal = async (id: number, goal: ISavingsGoal) => {
  const response = await fetch(`${BASE_URL}/savingsGoals/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(goal),
  });
  return response.json();
};

export const deleteSavingsGoal = async (id: number) => {
  const response = await fetch(`${BASE_URL}/savingsGoals/${id}`, {
    method: "DELETE",
  });
  return response.json();
};

// Video-Lektionen-Methoden
export const getVideoLessons = async () => {
  const response = await fetch(`${BASE_URL}/videoLessons`);
  return response.json();
};

export const createVideoLesson = async (lesson: IVideoLesson) => {
  const response = await fetch(`${BASE_URL}/videoLessons`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(lesson),
  });
  return response.json();
};

export const updateVideoLesson = async (id: number, lesson: IVideoLesson) => {
  const response = await fetch(`${BASE_URL}/videoLessons/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(lesson),
  });
  return response.json();
};

export const deleteVideoLesson = async (id: number) => {
  const response = await fetch(`${BASE_URL}/videoLessons/${id}`, {
    method: "DELETE",
  });
  return response.json();
};
