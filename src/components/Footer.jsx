import React from "react";
import { Button, Divider, Checkbox} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { completeAllTodo } from "../store/modules/todoSlice";
import { ActionCreators as UndoActionCreators } from "redux-undo";

const Footer = () => {
  
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const canUndo = todos.past.length > 0
  const canRedo = todos.future.length > 0

  const handleUndo = () => {
    dispatch(UndoActionCreators.undo());
  };

  const handleRedo = () => {
    dispatch(UndoActionCreators.redo());
  };

  return (
    <div className="footer" >
        <Checkbox style={{ marginRight:'20px' }}></Checkbox>
        <Button type="text" style={{ fontSize:'20px' }} onClick={handleUndo} disabled={!canUndo}>Undo</Button>
        <Button type="text" style={{ fontSize:'20px' }} onClick={handleRedo} disabled={!canRedo}>Redo</Button>
      <Divider />
    </div>
  );
};

export default Footer;
