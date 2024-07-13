const express = require('express');
// It parses the HTTP request body
// It parses the incoming request body and makes it available under req.body property.
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Calculator function
const calculate = (operand1, operand2, operator) => {
    operand1 = parseFloat(operand1);
    operand2 = parseFloat(operand2);

    switch (operator) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
            return operand1 / operand2;
        default:
            return 'Invalid operator';
    }
};

// Route for calculator
app.get('/calculate', (req, res) => {
    const { operand1, operand2, operator } = req.body;

    if (!operand1 || !operand2 || !operator) {
        return res.status(400).json({ error: 'Invalid request. Please provide operand1, operand2, and operator in the request body.' });
    }

    const result = calculate(operand1, operand2, operator);
    res.json({ result });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


/*
If you want to be able to access the /calculate route via a web browser or a tool 
like Postman using GET requests, you can modify the route to support both GET and POST requests.


If your main intention is to test the /calculate route with Postman or other tools, you can continue 
using POST requests in those tools. Simply make sure you are sending a POST request rather than trying 
to access the route directly in the browser, which sends GET requests by default.
*/