import React, { useState } from 'react'
import '../Layout/MyTodo.css'
const EditUserForm = (props) => {
    const [user, setUser] = useState(props.currentUser)

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }
    return (
        <form className='form-upload'
            onSubmit={(event) => {
                event.preventDefault()
                props.updateUser(user);
            }}
        >
            <div className='form-input-upload'>
                <div className='add-name'>
                    <input className='add-name-input'
                        placeholder='Name'
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='add-username'>
                    <input className='add-name-input'
                        placeholder='Username'
                        type="text"
                        name="username"
                        value={user.username}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='btn'>
                    <button className='btn-update'
                    >
                        Update user
                    </button>
                    <button
                        onClick={() => props.setEditing(false)}
                        className="btn-cancel"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </form>
    )
}

export default EditUserForm