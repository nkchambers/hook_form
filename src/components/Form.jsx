import React, { useState } from 'react'

const Form = (props) => {
    //STATE variables
    const[FirstName, setFirstName] = useState("");
    const[LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState(""); 
    const [ConfirmPassword, setConfirmPassword] = useState("");
    
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = {
            FirstName, 
            LastName, 
            Email, 
            Password, 
            ConfirmPassword 
        };
        
        console.log("Welcome", newUser);
        // function from props -> app.js
        props.addUser(newUser);

        // resetState
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    };

    
    return (

        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstName(e.target.value) } value={ FirstName } />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastName(e.target.value) } value={ LastName } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } value={ Email } />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } value={ Password } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => setConfirmPassword(e.target.value) } value={ ConfirmPassword } />
            </div>
            <input type="submit" value="Create User" />


            <h3>Your Form Info</h3>
            <p>First Name: { FirstName }</p>
            <p>Last Name: { LastName }</p>
            <p>Email: { Email }</p>
            <p>Password: { Password }</p>
            <p>Confirm Password: { ConfirmPassword }</p>

        </form>


    );
}

export default Form
