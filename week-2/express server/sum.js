const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

function Sum(n){
    let sum = 0;
    for(let i=0;i<=n;i++){
        sum+=i;
    }
    return sum;
}

app.get('/Sum', (req, res) => {
    const  n = req.query.n;
    const ans = Sum(n);
    res.send("hi your ans is "+ans);
    console.log("hi your ans is "+ans);
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});