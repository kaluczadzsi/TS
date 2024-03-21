import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

const App = () => {
  const todos = [{ id: 't1', text: 'Finish the course' }];

  return (
    <div className="app">
      <NewTodo />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
