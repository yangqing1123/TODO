import { useState } from 'react'
import Header from './components/Header'
import TodoList from './components/TodoList'
import Footer from './components/Footer'
import AddTodo from './components/AddTodo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <TodoList/>
      <Footer/>
    </>
  )
}

export default App
