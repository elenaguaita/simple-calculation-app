const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());  // middleware necessary to parse request body
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile("index.html")
});

// /calculate endpoint (accepting a POST request with 2 numbers in the payload)
app.post("/calculate", (req, res) => {
    const { first_num, second_num } = req.body;
    
    if (typeof first_num === 'number' && typeof second_num === 'number') {  // input validation 
        
        // elaboration of the result
        const result = first_num + second_num // first bigger prime number to be added

        // send result in JSON format
        res.json({ result })
    } else {

        // send error message (response status 400: Bad Request)
        res.status(400).json({ error: "Invalid input. Please provide two numbers." });  // to be displayed
    }
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
