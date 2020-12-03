import React from 'react';
import User from './User';
import './UserList.css';

function UserList({ users, onDeleteUser }) {
    return (
        <>
            {users &&
                users.map(user => {
                    return <User key={user.id} id={user.id} name={user.name} bio={user.bio} onDeleteUser={onDeleteUser} />;
                })
            }
        </>
    )
};

export default UserList;
