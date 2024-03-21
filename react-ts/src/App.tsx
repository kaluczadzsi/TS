import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { useState } from 'react';
import { Todo } from './todo.model';

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos([...todos, { id: Math.random().toString(), text: text }]);
  };

  return (
    <div className="app">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
