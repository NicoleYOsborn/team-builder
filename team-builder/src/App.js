import React, {useState} from 'react';
import {v4 as uuid} from 'uuid'
import './App.css';
import Form from './Form'

const initialList = {
  id: uuid(),
  name: '',
  email: '',
  role: ''
}

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  const [members, setMembers] = useState(initialList)
  const [formValues, setFormValues] = useState(initialFormValues)

  const onInputChange = evt => {
    const {name} = evt.target 
    const {value} = evt.target
    setFormValues({...formValues, [name]: value})
  }

  const onSubmit = evt=>{
    evt.preventDefault()
    if(!formValues.email.trim() || !formValues.username.trim() || !formValues.role.trim()){
      return
  }

  const newMember = {...formValues, id: uuid()}
  setMembers([newMember, ...members])
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Member List Builder</h1>
      </header>
      <Form
        values = {formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}/>
    </div>
  );
} export default App