import React, { useEffect, useState } from 'react';
import UserList from './UserList';
import UserForm from './UserForm';
import { fetchUsers } from './api/fetchUsers';
import { deleteUser } from './api/deleteUser';
import { postUser } from './api/postUser';


function Users() {
    const [users, setUsers] = useState([]);

    // EVENT HANDLERS
    function onDeleteUser(id) {
        deleteUser(id).then(res => {
            setUsers(res.data.users);
        })
        .catch(err => {
            console.log(err.response.errorMessage);
        });
    };

    function onPostUser(user) {
        postUser(user).then(res => {
            const newUser = res.data;
            console.log(res);
            setUsers([ ...users, newUser ]);
        })
        .catch(err => {
            console.log(err.response.errorMessage);
        })
    }

    useEffect(() => {
        fetchUsers().then(res => {
            setUsers(res.data);
        })
        .catch(err => {
            console.log(err.response);
        });
    }, []);

    return (
        <div className="box user-list">
            <h2 className="title is-4 has-text-centered">Users</h2>
            <div className="users-containers">
                <UserList users={users} onDeleteUser={onDeleteUser} />
                <UserForm onPostUser={onPostUser} />
            </div>
        </div>
    )
};

export default Users;
