import React, {useState, useEffect}  from 'react'
import ToDoForm from '../components/todoform/ToDoForm';
import TodoList from '../components/todoList/TodoList';
import { Itodo } from '../interfaces';

export const TodosPage: React.FunctionComponent = () => {
   const [todo, setTodo] = useState<Itodo[]>([])
   useEffect(() => {
     const saved = JSON.parse(localStorage.getItem('todo') || '[]' ) as Itodo[]
     setTodo(saved)
   }, [])
   useEffect(() => {
     localStorage.setItem('todo', JSON.stringify(todo) )
   }, [todo])
 
   const addHandler = (title: string) => {
   const newTodo: Itodo = {
     title: title,
     id: Date.now(),
     completed: false
   }
   setTodo(prev => [newTodo, ...todo])
 } 
 
   const toggleHandler = (id: number) => {
     setTodo(prev => prev.map(todo => {
       if (todo.id === id) {
         return {
           ...todo,
           completed: !todo.completed
         }
       }
       return todo
     }))
   }
   
   const removeHandler = (id: number) => {
     setTodo(prev => prev.filter(todo => todo.id !== id))
   }
   return (
      <>
      <ToDoForm onAdd={addHandler} />
      <TodoList todos={todo} onToggle={toggleHandler} onRemove={removeHandler}  />
      </>
   )
}