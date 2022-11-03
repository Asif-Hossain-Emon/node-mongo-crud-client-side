import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const updateUser= useLoaderData()
   
    const [user, setUser]= useState(updateUser)

const updateHandler=event=>{
    event.preventDefault()
    console.log(user)

    fetch(`http://localhost:5000/user/${updateUser._id}`,{
        method:"PUT",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
 

    
}

const changeHandler=event=>{
    const field=event.target.name
    const value= event.target.value 
    const newUser={...user}
    newUser[field]=value
    setUser(newUser)
   
}
    return (
        <div>
            <h3>Place for update {updateUser.name}</h3>
            <form onSubmit={updateHandler}>
                <input onChange={changeHandler} defaultValue={updateUser.name} type='text' name='name' placeholder='name' required/> <br/>
                <input onChange={changeHandler} defaultValue={updateUser.email} type='email' name='email' placeholder='email' required/> <br/>
                <button >Update User</button>
            </form>
        </div>
    );
};

export default Update;