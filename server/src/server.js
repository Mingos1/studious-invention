/*
Create database
Create student schemas
Be able to create, read, update, and delete students and student data

Have this shown on the front end
Be able to do the CRUD stuff on the FE
Have the DB update when CRUD happens
*/
const mongoose = require('mongoose'),
    MongoClient = require('mongodb').MongoClient,
    assert = require('assert'),
    express = require('express'),
    app = express(),
    url = 'mongodb://localhost:27017/';

// DB stuff

MongoClient.connect(url, {
        useUnifiedTopology: true
    })
    .then(client => {
        const db = client.db('students');
        console.log('Connected Successfully to database');
        const studentCollection = db.collection('test_cluster');

        app.post('/students', (req, res) => {
            studentCollection.insertOne(req.body)
            .then(result => {
                console.log(result)
            })
            .catch(err => console.log(err))
        })
        app.get()
        app.use()
    })
    .catch(error => console.log(error))

// Routing
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(3000, () => {
    console.log('App has started listening on port 3000')
})