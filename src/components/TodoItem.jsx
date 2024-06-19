import React, { useState } from "react";
import { Divider, Checkbox, Input } from "antd";
import { completeTodo, deleteTodo, editTodo } from "../store/modules/todoSlice";
import { useDispatch } from "react-redux";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";

const TodoItem = (props) => {
  const { todo } = props;
  const [checked, setChecked] = useState(todo.completed);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const dispatch = useDispatch();

  const handleCheckedChange = (e) => {
    setChecked(e.target.checked);
    dispatch(completeTodo(todo));
  };

  const handleSave = () => {
    dispatch(editTodo({...todo, text : editedText}));
    setIsEditing(false);
  };

  return (
    <>
      <div className="todo-item">
        <Checkbox className="checkbox" checked={checked} onChange={handleCheckedChange}>
          {isEditing ? (
            <Input
              type="text"
              className="editInput"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              onPressEnter={handleSave}
              onBlur={() => {setIsEditing(false);setEditedText(todo.text)}}
              autoFocus
            />
          ) : (
            <span className={`todoText ${checked && "todoText-Complete"}`}>
              {todo.text}
            </span>
          )}
        </Checkbox>
        <div className="icon">
          <EditTwoTone
            className="edit-icon"
            onClick={() => setIsEditing(true)}
          />
          <DeleteTwoTone
            className="delete-icon"
            twoToneColor="#eb2f96"
            onClick={() => dispatch(deleteTodo(todo.id))}
          />
        </div>
      </div>
      <Divider style={{ margin: '18px 0' }} />
    </>
  );
};

export default TodoItem;
