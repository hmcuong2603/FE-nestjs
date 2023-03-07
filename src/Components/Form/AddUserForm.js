import { useState } from 'react'
import * as React from 'react';
import * as Toast from '@radix-ui/react-toast';

import './AddUser.css'
const AddUserForm = (props) => {
    const initialFormState = { id: null, name: '', username: '' }
    const [user, setUser] = useState(initialFormState)

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
        // console.log(value);
    }

    const [open, setOpen] = React.useState(false);
    const eventDateRef = React.useRef(new Date());
    const timerRef = React.useRef(0);

    React.useEffect(() => {
        return () => clearTimeout(timerRef.current);
    }, []);




    return (

        <Toast.Provider swipeDirection="right">

            <form
            // onSubmit={event => {
            //     event.preventDefault()
            //     if (!user.name || !user.username) {
            //         alert('missing input')
            //         return
            //     } else {
            //         alert('Add success !')
            //     }
            //     props.addUser(user)
            //     setUser(initialFormState)
            // }}
            >
                <div className='add-name '>
                    <input
                        type="text" name="name"
                        placeholder='Name'
                        value={user.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='add-username'>
                    <input
                        type="text"
                        name="username"
                        placeholder='Username'
                        value={user.username}
                        onChange={handleInputChange}
                    />
                </div>
                <button
                    className='btn-add'
                    onClick={(e) => {
                        e.preventDefault()
                        if (!user.name || !user.username) {
                            alert('missing input')
                            return
                        }
                        else {
                            setOpen(false);
                            window.clearTimeout(timerRef.current);
                            timerRef.current = window.setTimeout(() => {
                                eventDateRef.current = oneWeekAway();
                                setOpen(true);
                            }, 100);
                        }
                        props.addUser(user)
                        setUser(initialFormState)
                    }}
                >
                    Add new user

                </button>
                {/* thông báo toast */}
                <div className='toast-view'>
                    <Toast.Root className="ToastRoot" open={open} onOpenChange={setOpen}>
                        <Toast.Title className="ToastTitle">Add user accsess !</Toast.Title>
                        <Toast.Description asChild>
                            <time className="ToastDescription" dateTime={eventDateRef.current.toISOString()}>
                                {prettyDate(eventDateRef.current)}
                            </time>
                        </Toast.Description>
                        <Toast.Action className="ToastAction" asChild altText="Goto schedule to undo">
                            <button className="Button small green">Undo</button>
                        </Toast.Action>
                    </Toast.Root>
                    <Toast.Viewport className="ToastViewport" />
                </div>
            </form>
        </Toast.Provider>
    )
}

function oneWeekAway(date) {
    const now = new Date();
    const inOneWeek = now.setDate(now.getDate() + 7);
    return new Date(inOneWeek);
}

function prettyDate(date) {
    return new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'short' }).format(date);
}

export default AddUserForm