import { Container } from 'react-bootstrap';
import './App.css';
import AddTodo from './components/AddTodo.js';
import DisplayTodos from './components/DisplayTodos.js';


function App() {
  return (
    <Container className='py-3'>
      <AddTodo />
      <DisplayTodos />
    </Container>
  );
}

export default App;
