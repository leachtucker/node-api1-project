// DEPENDENCIES
const express = require('express');
const cors = require('cors');
const uuid = require('uuid');

/* SETUP & CONFIG */
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 5000;

let users = [
    { id: uuid.v4(), name: "John", bio: "I like tech!" }
];

/* ENDPOINTS */
app.post('/api/users', (req, res) => {
    if (!req.body.name || !req.body.bio) {
        res.status(400).json({ errorMessage: "Please provide name and bio for the user." });
    } else {
        const newUser = { id: uuid.v4(), name: req.body.name, bio: req.body.bio };
        users.push(newUser);

        res.status(201).json(newUser);
    }
});

app.get('/api/users', (req, res) => {
    res.status(200).json(users);
});

app.get('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find(usr => usr.id === id);

    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ errorMessage: `The user with the specified ID does not exist.` });
    };
});

app.delete('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find(usr => usr.id === id);

    if (user) {
        // UPDATE ARRAY WITH USER REMOVED
        users = users.filter(usr => usr.id !== id);
        res.status(200).json({ message: `User '${user.name}' removed`, users: users });
    } else {
        res.status(404).json({ errorMessage: "The user with the specified ID does not exist." });
    }
});

app.put('/api/users/:id', (req, res) => {
    // CHECK INPUT
    if (!req.body.name || !req.body.bio) {
        return res.status(400).json({ errorMessage: "Please provide name and bio for the user." })
    };

    const { id } = req.params;
    const user = users.find(usr => usr.id === id);
    if (user) {
        // FIND INDEX
        const arrIndex = users.findIndex(usr => usr.id === id);
        // UPDATE ARRAY WITH NEW USER INFO
        users[arrIndex] = { id: user.id, name: req.body.name, bio: req.body.bio }
        res.status(200).json(users[arrIndex]);
    } else {
        res.status(404).json({ errorMessage: "The user with the specified ID does not exist." })
    }
});

/* MOUNT SERVER ON THE GIVEN PORT */
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});