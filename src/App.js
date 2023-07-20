// Import necessary components and libraries
import { Container } from 'react-bootstrap'; 
import './App.css'; 
import AddTodo from './components/AddTodo.js'; 
import DisplayTodos from './components/DisplayTodos.js'; 
import { Provider } from 'react-redux'; 
import store from './redux/Store.js'; 

function App() {
  return (
    // Wrap the entire app with the Redux Provider to connect the Redux store
    <Provider store={store}>
      <Container className='py-3'>
        <AddTodo />
        <DisplayTodos />
      </Container>
    </Provider>
  );
}

export default App;
