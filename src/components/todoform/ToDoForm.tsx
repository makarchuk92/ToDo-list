import React, { useRef } from 'react'
import './ToDoForm.css'

interface TodoFormProps {
   onAdd(title: string): void
}

const ToDoForm: React.FC<TodoFormProps> = (props) => {
   const ref = useRef<HTMLInputElement>(null)

   const keyPressHandler = (event: React.KeyboardEvent) => {
      if (event.key === 'Enter' ) {
         props.onAdd(ref.current!.value) 
         ref.current!.value = ''
         event.preventDefault();
      }
   }

   const ClickAddHandler = (event: React.MouseEvent) => {
      props.onAdd(ref.current!.value)
      event.preventDefault();
   }

   return (
      <form className='form'>
         <div className="input-field">
            <input id="title" type="text" placeholder="Enter the title" className='input-title'
            onKeyPress={keyPressHandler} ref={ref} 
            />
            <label htmlFor="title" className="active"> Enter the title </label>
            <a className="btn-floating btn-large waves-effect waves-light red" href='/'
            onClick={ClickAddHandler} >
            <i className="material-icons">
               add
            </i></a>
         </div>
      </form>
   )
}

export default ToDoForm