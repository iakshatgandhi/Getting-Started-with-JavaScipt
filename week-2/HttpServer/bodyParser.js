const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Parse incoming requests with URL-encoded payloads
app.use(bodyParser.urlencoded({ extended: true }));

// Your routes and other middleware can now access the parsed request body using req.body

app.post('/example', (req, res) => {
  console.log(req.body); // Access the parsed request body
  res.json({
    message: 'Request received!',
    data: req.body
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


/**
    * The body-parser package is used to parse incoming request bodies in a middleware before your handlers, available under the req.body property.
    * body-parser is used to extract the entire body portion of an incoming request stream and exposes it on req.body. This middleware primarily parses the request body in different formats such as JSON, URL-encoded, etc., and makes it available for further processing within your application.
        Here's a basic example of using body-parser with an Express application:
 */