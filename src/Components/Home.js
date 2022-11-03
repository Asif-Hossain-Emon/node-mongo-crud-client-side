import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const users= useLoaderData()
    const[displayUser, setDisplayUser]= useState(users)
    const removeHandler=user=>{
        const agree= window.confirm(`Are you sure want to delete "${user.name}"`)
        if(agree){
            fetch(`http://localhost:5000/users/${user._id}`, {
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount===1){
                    alert(`"${user.name}" deleted seccessfully`)
                    const reaminingUser=displayUser.filter(du=>du._id!==user._id)
                    setDisplayUser(reaminingUser)
                }
                console.log(data)
            }
              
              
                )
        }
        console.log(agree)
    }
    return (
        <div>
            <h1>Total User: {displayUser.length}</h1> <br/>
            {
                displayUser.map(user=> <p key={user._id}> 
                Name: {user.name} 
                <Link to={`/update/${user._id}`}> <button>Update</button> </Link>
                <button onClick={()=>removeHandler(user)} >X</button></p>)
            }
        </div>
    );
};

export default Home;