import React, { useState } from 'react';

const initialFormValues = {
    name: "",
    bio: ""
};

function UserForm({ onPostUser }) {
    const [formValues, setFormValues] = useState(initialFormValues);

    // EVENT HANDLERS
    function onChange(evt) {
        setFormValues({ ...formValues, [evt.target.name]: evt.target.value });
    }

    function onSubmit(evt) {
        evt.preventDefault();
        const newUser = { name: formValues.name, bio: formValues.bio };
        onPostUser(newUser);
    }

    return (
        <div className="box form-container py-4 my-4 mx-2">
            <h2 className="title is-5 has-text-centered mt-4">Add User</h2>
            <form onSubmit={onSubmit}>
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input name="name" onChange={onChange} class="input" type="text" placeholder="John Doe" />
                </div>
            </div>
            <div class="field">
                <label class="label">Bio</label>
                <div class="control">
                    <input name="bio" onChange={onChange} class="input" type="text" placeholder="I like aviation" />
                </div>
            </div>
            <div class="field has-text-centered">
                <div class="control">
                    <button class="button is-link">Add!</button>
                </div>
            </div>
            </form>
        </div>
    )
};

export default UserForm;
