import React from 'react';

function User({ id, name, bio, onDeleteUser }) {

    return (
        <div className="card my-2">
            <div className="card-content">
                <div className="media">
                    <div className="media-left mr-5">
                        <div className="is-flex is-justify-content-center is-align-content-center">
                            <a onClick={() => onDeleteUser(id)} className="delete is-medium"></a>
                        </div>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">{name}</p>
                        <p className="subtitle is-6">ID: {id}</p>
                    </div>
                </div>
                <div className="content">
                    <b>Bio:</b> {bio}
                </div>
        </div>
    </div>
    )
};

export default User;
