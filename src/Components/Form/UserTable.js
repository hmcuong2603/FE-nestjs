import React from 'react'
import './UserTable.css'
const UserTable = (props) => {
    return (
        <table className='user-table'>

            <tbody className='table-view'>
                {props.users.length > 0 ?
                    (
                        props.users.map((user, index) => (
                            <li key={user.id} className="table-row-table">
                                <div className="col col-1 col-table" >{index + 1}</div>
                                <div className="col col-2 col-table">{user.username}</div>
                                <div className="col col-2 col-table">{user.name}</div>
                                <div className="col col-4 btn-table">
                                    <button className="btn-edit"
                                        onClick={() => {
                                            props.editUser(user)
                                        }}
                                    >Edit
                                    </button>
                                    <button className="btn-delete"
                                        onClick={() => props.deleteUser(user.id)}
                                    >Delete
                                    </button>
                                </div>
                            </li>
                        ))
                    )
                    :
                    (
                        <tr>
                            <td className='no-user' colSpan={3}>No users</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default UserTable