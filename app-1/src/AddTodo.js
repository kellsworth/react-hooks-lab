import React, { useState } from 'react';

const AddTodo = (props) => {
  const [userIniput, setUserInput] = useState('')

  function handleAddTodo(e) {
    e.preventDefault()
    props.addTodo(userInput)
    setUserInput('')
  }

  return (
    <form onSubmit={handleAddTodo}>
      <input
        placeholder="Add a todo!"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button>Submit</button>
    </form>
  )
}
export default AddTodo