import { useState } from 'react'
import Header from './components/Header'
import TodoList from './components/TodoList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <TodoList/>
    </>
  )
}

export default App
