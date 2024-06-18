import React, { useState } from "react";
import { Divider, Checkbox } from "antd";
import { completeTodo ,deleteTodo} from "../store/modules/todoSlice";
import { useDispatch } from "react-redux";
import { DeleteTwoTone } from "@ant-design/icons";

const TodoItem = (props) => {
  const { todo } = props;
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  const onChange = (e) => {
    setChecked(e.target.checked);
    dispatch(completeTodo(todo));
  };

  return (
    <>
      <div  className="todo-item">
        <Checkbox checked={checked} onChange={onChange}>
          <span className={`todoText ${checked && "todoText-Complete"}`}>
            {todo.text}
          </span>
        </Checkbox>
        <DeleteTwoTone className="delete-icon" twoToneColor="#eb2f96" onClick={()=>dispatch(deleteTodo(todo.id))}/> 
      </div>
      <Divider />
    </>
  );
};

export default TodoItem;
