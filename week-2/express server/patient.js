const express = require('express');
const { use } = require('../02-nodejs/solutions/todoServer.solution');
const app = express();
const zod = require('zod');
const port = 3000;

var users = [{
    name: 'John',
    age: 25,
    kidneys: [{
        id: 1,
        condition: 'good'
    }]
}];

const NumberSchema = zod.number();

app.use(express.json());

app.get('/users', function(req, res) {
    const johnkidney = users[0].kidneys;
    const numberOfKidneys = johnkidney.length;
    const validatedData = NumberSchema.safeParse(numberOfKidneys);
    if(!validatedData.success) {
        let numberOfHealthyKidneys = 0;
        for(let i = 0; i < numberOfKidneys; i++) {
            if(johnkidney[i].condition === 'good') {
                numberOfHealthyKidneys++;
            }
        }
        const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
        res.json({
            numberOfKidneys,
            numberOfHealthyKidneys,
            numberOfUnhealthyKidneys
        });
    }
})

app.post('/users', function(req, res) {
    const newUser = req.body;
    users.push(newUser);
    res.json(users);
    res.json({
        message: 'User added successfully'
    });
})

app.put("/users", function(req, res) {
    for(let i = 0; i < users.length; i++) {
        if(users[i].name === 'John') {
            users[i].age = 26;
            users[i].kidneys.push({
                id: 2,
                condition: 'bad'
            });
            res.json(users);
        }
    }
});

app.delete("/users", function(req, res) {
    const newkidneys = [];
    for(let i = 0; i < users.length; i++) {
        if(users[i].kidneys.condition === 'bad') {
            newkidneys.push(users[i].kidneys.condition = ['good']);
        }
        users[i].kidneys = newkidneys;
    }
    res.json(users);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});