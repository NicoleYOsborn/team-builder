import React, {useState} from 'react';
import {v4 as uuid} from 'uuid'
import './App.css';
import Form from './Form'
import Member from './Member'

const initialList = [
{
  id: uuid(),
  membername: 'Nicole',
  email: 'nicole.y.osborn@gmail.com',
  role: 'Front End'
},
]
const initialFormValues = {
  membername: '',
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
    if(!formValues.email.trim() || !formValues.membername.trim() || !formValues.role.trim()){
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

      {
        members.map(member =>{
          return(
            <Member key={member.id} details={member}/>
          )
        })
      }  
        
    </div>
  );
} export default App