import React, { useState, useEffect } from 'react';
import { Button, InputLabel, FormControl, Input } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    //this code here... fires when app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id , todo: doc.data().todo})))
    })
  }, []);

  const addTodo = (event) => {
    //this will fire off when we click the button
    event.preventDefault(); //will stop the REFRESH

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp() 
    })

    //setTodos([...todos, input]);
    setInput(''); //clear input field
  }
  return (
    <div className="App">
      <h1>Hello People!! 🦹‍♂️</h1>
      <h2>Welcom to my Todo 📝 Application </h2>

      <form>
        <FormControl>
          <InputLabel> 🐱‍🏍 Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>

        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
          //<li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
