import React, { useState } from "react";
import { Input, Divider } from "antd";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../store/modules/todoSlice";
import Footer from "./Footer";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const todos = useSelector((state) => state.todo.present);
  const visibilityFilter = useSelector((state) => state.visibilityFilter);

  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    if (inputValue.trim().length !== 0) {
      const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 0; 
      const newTodo = {
        id: newId,
        text: inputValue,
        completed: false,
      };
      dispatch(addTodo(newTodo));
      setInputValue("");
    }
  };
  const getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case 'All':
        return todos
      case 'Completed':
        return todos.filter(t => t.completed)
      case 'Active':
        return todos.filter(t => !t.completed)
      default:
        return todos;  
    }
  }

  const visibleTodos = getVisibleTodos(todos,visibilityFilter)


  return (
    <div className="todo-list">
      <div className="addTodo">
        <Input
          size="large"
          className="addTodo-input"
          placeholder="Add todo..."
          value={inputValue}
          onChange={(e)=>setInputValue(e.target.value)}
          onPressEnter={handleAddTodo}
        />
      </div>
      <div className="todos">
        {visibleTodos.map((todo)=>(
          <TodoItem key={todo.id} todo={todo}/>
        ))}
      </div>
      <Footer/>
      <Divider />
    </div>
  );
};

export default TodoList;
