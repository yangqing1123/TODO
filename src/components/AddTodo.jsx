import React from 'react'
import { Input } from 'antd';

const AddTodo = () => {
  return (
    <div>
      <Input 
      size="large"
      className="addTodo-input" 
      placeholder="Add todo..." 
      />
    </div>
  )
}

export default AddTodo
