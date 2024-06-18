import React, { useState } from "react";
import { Input, List } from "antd";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../store/modules/todoSlice";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const todos = useSelector((state) => state.todo);

  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    if (inputValue.trim().length !== 0) {
      const newTodo = {
        id: todos.length ,
        text: inputValue,
        completed: false,
      };
      dispatch(addTodo(newTodo));
      setInputValue("");
    }
  };


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
        {todos.map((todo)=>(
          <TodoItem key={todo.id} todo={todo}/>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
