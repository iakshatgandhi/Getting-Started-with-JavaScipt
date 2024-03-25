const mongoose = require('mongoose');

async function connectToDatabase() {
    try {
        await mongoose.connect("mongodb+srv://akshatgandhi224663:AdrsfW67y4TVejRq@cluster0.d9zawrw.mongodb.net/testing");
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

//connects to the MongoDB Atlas cluster without specifying a specific database. 
// Therefore, Mongoose will default to using the "test" database if one is not specified.
connectToDatabase();

const User = mongoose.model('users', { 
    name: String, 
    email: String, 
    password: String
});

async function createUser() {
    try {
        const user = new User({ 
            name: 'something', 
            email: 're@gmail.com', 
            password: '123' 
        });
        await user.save();
        console.log('User saved successfully:', user);
    } catch (error) {
        console.error('Error saving user:', error);
    }
}

createUser();
