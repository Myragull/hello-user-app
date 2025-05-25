import React, { useState } from 'react'

function HelloForm() {
    const [name, setName] = useState("");
    const [submittedName , setSubmittedName] = useState("");
       const handleInputChange = (e)=>{
        setName(e.target.value);
       };
        const handleSubmit = (e) =>{
            e.preventDefault();
            setSubmittedName(name);
        }
  return (
    <div className='form-container'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="nameInput">Enter your name:</label>
            <input 
            type="text"
            id='nameInput'
            value={name}
            onChange={handleInputChange}
            placeholder='Your Name'
            />
        <button type='submit'>Submit</button>
        </form>
         {submittedName && <h2>Hello,{submittedName}!</h2>}
         </div>
  )
}

export default HelloForm