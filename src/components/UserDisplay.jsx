import React from 'react'

const UserDisplay = (props) => {

    console.log(props);
    //const {users} = props;
    return (
        <fieldset>

            <legend>UserDisplay.jsx</legend>

            <hr />

            {
                props.users.map( (u, i) => {
                    return <div>
                                <p key={i}> {u.FirstName}</p>
                                <p key={i}> {u.LastName}</p>
                                <p key={i}> {u.Email}</p>
                                <p key={i}> {u.Password}</p>
                                <p key={i}> {u.ConfirmPassword}</p>
                            </div>
                })
            }

        </fieldset>
    )
}

export default UserDisplay