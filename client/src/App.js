
import './App.css';

// components
import Header from './Component/Header';
import TodoForm from './Component/TodoForm';
import Todos from './Component/Todos';

function App() {
  return (
    <div>
      <Header />
      <TodoForm />
      <Todos />
    </div>
  );
}

export default App;