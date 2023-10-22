
# Infrastructure:

1.  **Directories**:
    
    -   **mockupbackend**: This is the directory for the mock backend setup. It's a Node.js project.
    -   **null_para**: This is the the primary project directory. Given the structure, it's a React-based project, created with Create React App (CRA).
2.  **File Structure**:
    
    -   Within **mockupbackend**, there's an `index.js` pointing the starting point for the backend, and package-related files (`package-lock.json` and `package.json`), showing its dependencies and configurations.
    -   Inside **null_para**, there's a clear separation between public assets (`public` directory) and source code (`src` directory). Within `src`, there are separate directories for `backend`, `components`, `interfaces`, `pages`, and `utils`, a organized frontend structure.

### Technologies:

1.  **React**: The primary library for building the user interface. Evident from the `react` and `react-dom` dependencies.
2.  **TypeScript**: The project uses TypeScript for static typing, evident from the `.tsx` file extensions and the `typescript` dependency.
3.  **MUI (formerly Material-UI)**: A popular React UI framework. The project uses both MUI's core components (`@mui/material`) and icons (`@mui/icons-material`).
4.  **Emotion**: A library for writing CSS styles with JavaScript. This is evident from the dependencies `@emotion/react` and `@emotion/styled`.
5.  **React Router**: Used for routing in the React application, evident from the `react-router-dom` dependency.
6.  **Testing Libraries**: The project is set up for testing with libraries such as `@testing-library/react`, `@testing-library/jest-dom`, and others.
7.  **ESLint and Prettier**: Tools for maintaining code quality and formatting. Evident from the `eslintConfig` in `package.json` and the `.prettier` file.
8.  **web-vitals**: A library for measuring web performance.
9.  **cross-env**: A utility for setting and using environment variables across platforms. Used in the build script for setting the `BASE_URL`.

In summary, the infrastructure consists of a mock backend built with Node.js and a frontend built with React and TypeScript, incorporating MUI for UI components. The frontend is structured, separating concerns like components, pages, and utility functions, and is set up for testing and maintaining code quality.

# Getting Started with null_para repository
  

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

  

In the project directory, you can run:

  

### `npm start`

  

Runs the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

  

The page will reload if you make edits.\

You will also see any lint errors in the console.
  

### `npm run build`

  

Builds the app for production to the `build` folder.\

It correctly bundles React in production mode and optimizes the build for the best performance.

  

The build is minified and the filenames include the hashes.\

Your app is ready to be deployed!

  

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

  ### Routes for Children (`routesChildren`):

1.  **Home Route**:
    
    -   **URL**: `/`
    -   **Component**: `HomeChildrenPage`
    -   **Name**: "Home"
    -   **Description**: This is the default landing page for children when they access the application. The component associated with it provides the main interface or dashboard for children.
2.  **Saving Route**:
    
    -   **URL**: `/saving`
    -   **Component**: `SavingChildrenPage`
    -   **Name**: "Saving"
    -   **Description**: This page is dedicated to the savings-related features and tools for children, allowing them to view or manage their savings goals.
3.  **Learn Route**:
    
    -   **URL**: `/learn`
    -   **Component**: `LearnPage`
    -   **Name**: "Learn"
    -   **Description**: A page dedicated to educational content, perhaps offering financial literacy resources, tutorials, or lessons for children.
4.  **Banking Route**:
    
    -   **URL**: `/banking`
    -   **Component**: `BankingPage`
    -   **Name**: "Banking"
    -   **Description**: This page might provide banking-related features such as viewing account balances, transaction histories, or initiating transfers.
5.  **Settings Route**:
    
    -   **URL**: `/settings`
    -   **Component**: `SettingsPage`
    -   **Name**: "Settings"
    -   **Description**: A page where children can modify their application preferences, account details, or other configurable aspects of their user experience.

### Routes for Parents (`routesParent`):

1.  **Home Route for Parents**:
    
    -   **URL**: `/eltern`
    -   **Component**: `HomeParentsPage`
    -   **Name**: "Home"
    -   **Description**: The main dashboard or interface for parents when they log into the application.
2.  **Learn Route** (similar to children):
    
    -   **URL**: `/learn`
    -   **Component**: `LearnPage`
    -   **Name**: "Learn"
3.  **Banking Route** (similar to children):
    
    -   **URL**: `/banking`
    -   **Component**: `BankingPage`
    -   **Name**: "Banking"
4.  **Switch Child Route**:
    
    -   **URL**: `/kindwechseln`
    -   **Component**: `SettingsPage`
    -   **Name**: "Kind wechseln" (Translation: "Switch Child")
    -   **Description**: This is a special settings page for parents, allowing them to switch between the accounts or profiles of multiple children.
5.  **Settings Route** (similar to children):
    
    -   **URL**: `/settings`
    -   **Component**: `SettingsPage`
    -   **Name**: "Settings"

In summary, these frontend routes determine the navigation structure of the application, with separate navigational flows for children and parents. The children's flow emphasizes features like savings and learning, while the parents' flow provides management tools like switching between children's profiles.
  
  

# express.js mockbackend

## Express.js Node Server Setup

### Introduction

This section provides a guide on how to set up and run the Express.js Node server for this project.

### Prerequisites

-   [Node.js](https://nodejs.org/) and npm (Node Package Manager) installed on your machine.

### Setting Up

1.  Navigate to the project directory:
    
    bashCopy code
    
    `cd path/to/your/project-directory` 
    
2.  Install required dependencies:
    
    bashCopy code
    
    `npm install` 
    

### Starting the Server


#### Features:

-   (ToDo not implemented) User authentication with Passport.js and session-based authentication.
-    (ToDo not implemented) Hashed password storage using bcryptjs.
-   Basic CORS support.
-   CRUD (Create, Read, Update, Delete) operations for different entities such as users, tasks, transactions, and savings goals.

#### Entities and their Routes:

**1. Users:**

1.  `POST /login`: To log in a user.
2.  `POST /logout`: To log out a user.
3.  `GET /users`: Fetch all users.
4.  `POST /users`: Create a new user.
5.  `PUT /users/:id`: Update a user's information based on user ID.
6.  `DELETE /users/:id`: Delete a user based on user ID.

**2. Tasks:**

1.  `GET /tasks`: Fetch all tasks.
2.  `POST /tasks`: Create a new task.
3.  `PUT /tasks/:id`: Update a task's information based on task ID.
4.  `DELETE /tasks/:id`: Delete a task based on task ID and perform related actions like updating the balance and adding a transaction.

**3. Transactions:**

1.   `GET /transactions`: Fetch all transactions.
2.   `POST /transactions`: Create a new transaction.
3.   `PUT /transactions/:id`: Update a transaction's information based on transaction ID.
4.   `DELETE /transactions/:id`: Delete a transaction based on transaction ID.

**4. Savings Goals:**

1.  `GET /savingsGoals`: Fetch all savings goals.
2.  `POST /savingsGoals`: Create a new savings goal.
3.  `PUT /savingsGoals/:id`: Update a savings goal's information based on the goal's ID.
4.  `DELETE /savingsGoals/:id`: Delete a savings goal based on its ID.


#### Starting the server:

1.  Use the command `node <your_server_file_name>.js` to start the server.
2.  The server will be running at `http://localhost:3002`.

#### Tips and Notes:

-   Regularly backup the dummy database (or any data storage) to prevent data loss.
-   Implement data validation before handling requests to ensure data integrity.

That's it! Your Express.js Node server is up and running. Adjust and expand upon this guide as your application grows and features are added. Happy coding!