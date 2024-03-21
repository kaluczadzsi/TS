import { FormEvent, useRef } from 'react';

const NewTodo = () => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    const enteredText = textInputRef.current!.value;
    console.log(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text"></label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
