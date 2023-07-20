# React Redux Todo App

![Redux architecture](https://ittrainingclasses.in/redux-dataflow.gif)

## Overview
This is a basic Todo application built using React, Redux, and React-Bootstrap for UI design. The app allows users to create, manage, and mark tasks as completed, providing a seamless task management experience.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Redux Overview](#redux-overview)
  - [Actions](#actions)
  - [Reducers](#reducers)
  - [Store](#store)
  - [React-Redux](#react-redux)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Features
- Add, edit, and delete tasks.
- Mark tasks as completed.
- Filter tasks based on their completion status.
- Responsive design with React-Bootstrap.

## Getting Started
To run this project locally, follow these steps:

1. Clone this repository: `git clone https://github.com/your-username/react-redux-todo-app.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Open the app in your browser: `http://localhost:3000`

## Redux Overview
Redux is a predictable state container for JavaScript applications, commonly used with React to manage state in a centralized manner. It follows the unidirectional data flow pattern and is composed of three main components: Actions, Reducers, and the Store.

### Actions
Actions are payloads of information that send data from your application to the Redux store. They are plain JavaScript objects and must have a `type` property indicating the type of action being performed. Actions can also carry additional data as needed.

### Reducers
Reducers specify how the application's state changes in response to actions. They are pure functions that take the previous state and an action as input and return the new state. Reducers are combined to create the overall state tree.

### Store
The store is a single source of truth that holds the entire application state. It is created by passing the root reducer to the `createStore` function from Redux. The store allows access to state via `getState()`, dispatch actions via `dispatch(action)`, and register listeners via `subscribe(listener)`.

### React-Redux
React-Redux is the official binding library that connects Redux with React components. It provides the `Provider` component to make the Redux store available to the entire React application and the `connect` function to connect individual components to the store.

## Technologies Used
- React
- Redux
- React-Bootstrap

## Contributing
Contributions are welcome! Feel free to submit any issues or pull requests.

## License
This project is licensed under the [MIT License](LICENSE).

---

We hope this README helps you understand the project and get started with React Redux and managing state with Redux. Happy coding!
