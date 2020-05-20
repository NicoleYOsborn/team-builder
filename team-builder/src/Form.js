import React from 'react'


export default function Form(props){
    const {
        values,
        onInputChange,
        onSubmit
    } = props

    return(
        <form onSubmit = {onSubmit}>
            <div>
                <h2>Add Team Member</h2>
                <button>Submit</button>
            </div>

            <div className = 'inputs'>
                <label>Name:&nbsp;
                    <input type='text' placeholder="Name" maxLength='100' name='membername'
                    value={values.membername}
                    onChange={onInputChange}/>
                </label>

                <label>Email:&nbsp;
                     <input type='text' placeholder='Type email' maxLength='30'  name='email'
                         value={values.email}
                         onChange={onInputChange}
                        />
                </label>

                <label>Role:&nbsp;
                    <select 
                    name='role' 
                    value={values.role} 
                    onChange={onInputChange}>
                        <option value =''>Select a Role</option>
                        <option value ='Front End'>Front End</option>
                        <option value = 'Backend'>Backend</option>
                        <option value='Data Science'>Data Science</option>
                        <option value='IOS'>IOS</option>

                    </select>
                   
                 </label>
            </div>
        </form>
    )
}