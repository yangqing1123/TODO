import React, { useState } from "react";
import { Button, Divider, Checkbox, Radio } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { completeAllTodo } from "../store/modules/todoSlice";
import { ActionCreators as UndoActionCreators } from "redux-undo";
import { setVisibilityFilter } from "../store/modules/visibilityFilterSlice";

const Footer = () => {
  const todos = useSelector((state) => state.todo);
  const [selectAll, setSelectAll] = useState(false);
  const dispatch = useDispatch();
  const canUndo = todos.past.length > 0;
  const canRedo = todos.future.length > 0;

  const handleSelectAll = (e) => {
    const isChecked = e.target.checked;
    setSelectAll(isChecked);
    dispatch(completeAllTodo(todos));
  };

  const handleUndo = () => {
    dispatch(UndoActionCreators.undo());
  };

  const handleRedo = () => {
    dispatch(UndoActionCreators.redo());
  };

  return (
    <div className="footer">
      {/* <Checkbox style={{ marginRight:'20px' }} checked={selectAll} ></Checkbox> */}
      <Button
        style={{ fontSize: "20px" }}
        onClick={handleUndo}
        disabled={!canUndo}
      >
        Undo
      </Button>
      <Button
        style={{ fontSize: "20px", marginRight: "20px" }}
        onClick={handleRedo}
        disabled={!canRedo}
      >
        Redo
      </Button>
      <Radio.Group  defaultValue="large">
        <Radio.Button
          value="large"
          onChange={() => dispatch(setVisibilityFilter("All"))}
          style={{ fontSize: "20px" }}
        >
          All
        </Radio.Button>
        <Radio.Button
          value="default"
          onChange={() => dispatch(setVisibilityFilter("Active"))}
          style={{ fontSize: "20px" }}
        >
          Active
        </Radio.Button>
        <Radio.Button
          value="small"
          onChange={() => dispatch(setVisibilityFilter("Completed"))}
          style={{ fontSize: "20px" }}
        >
          Completed
        </Radio.Button>
      </Radio.Group>
      <Divider />
    </div>
  );
};

export default Footer;
