// DEPENDENCIES
const express = require('express');
const uuid = require('uuid');

/* SETUP & CONFIG */
const app = express();
app.use(express.json());
const PORT = 5000;

const users = [
    {id: uuid.v4(), name: "John", bio: "I like tech!"}
];

/* ENDPOINTS */
app.get('/api/users', (req, res) => {
    res.status(200).json({"users": users});
});

app.get('/api/users/:id', (req, res) => {
    req.params.id
});

/* MOUNT SERVER ON THE GIVEN PORT */
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});