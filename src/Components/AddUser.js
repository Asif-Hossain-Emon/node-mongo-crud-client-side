import React, { useState } from 'react';

const AddUser = () => {
    const [user, setUser]= useState({})

const submitHandler=event=>{
    event.preventDefault()
    console.log(user)
 

    fetch('http://localhost:5000/users', {
        method: 'POST' ,
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{console.log(data)
    if (data.acknowledged){
        alert('User added succesfully')
        event.target.reset()
    }
    
    
    })
}

const blurHandler=event=>{
    const field=event.target.name
    const value= event.target.value 
    const newUser={...user}
    newUser[field]=value
    setUser(newUser)
   
}

    return (
        <div>
            <h3>Add a new user</h3>

            <form onSubmit={submitHandler}>
                <input onBlur={blurHandler} type='text' name='name' placeholder='name' required/> <br/>
                <input onBlur={blurHandler} type='email' name='email' placeholder='email' required/> <br/>
                <button  >Add User</button>
            </form>
        </div>
    );
};

export default AddUser;