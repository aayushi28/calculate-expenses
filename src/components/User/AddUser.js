import React, {useState} from 'react';
import './AddUser.css';
import Button from './Button';

const AddUser = (props) =>{
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [isValid, setIsValid] = useState(true);
    const addUserHandler = (event)=>{
        event.preventDefault();
        if(enteredUsername.trim().length===0 || enteredAge.trim().length===0){
            setIsValid(false);
            return;
        }
        if(+enteredAge<1){
            setIsValid(false);
            return;
        }
        console.log(enteredUsername,enteredAge);
        setEnteredAge('');
        setEnteredUsername('');
    };
    const usernameChangeHandler = event =>{
        if(event.target.value.trim().length>0){
            setIsValid(true);
          }
        setEnteredUsername(event.target.value);
    };
    const ageChangeHandler = event =>{
        if(event.target.value.trim().length>0){
            setIsValid(true);
          }
        setEnteredAge(event.target.value);
    };
    return(
    <div className="addUser">
        <form onSubmit={addUserHandler}>
            <div className='addUser_control'>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
                
            </div>
            <Button type="submit">Add User</Button>
     </form>
    </div>
    
    )
};

export default AddUser;