const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());  // middleware necessary to parse request body
app.use(express.static("public"));

function isPrime(number) {
    // exclude negative and 0, 1
    if (number < 2) return false;
    
    // check if any divider exists
    for (let divider = 2; divider < number; divider++) {
        if (number % divider === 0) {
            // in that case, number is NOT a prime number
            return false
        }
    }

    // otherwise, number is a prime number
    return true
}

function findNextPrime(num1, num2) {
    let bigger = 0
    let next_prime = 0

    // find which number is bigger
    if (num1 > num2) {
        bigger = num1
    } else {
        bigger = num2
    }
    
    next_prime = bigger + 1

    // find the next prime number
    while(!isPrime(next_prime)) {
        next_prime++
    }

    return next_prime
}

// / home endpoint
app.get('/', (req, res) => {
    res.sendFile("index.html")
});

// /calculate endpoint (accepting a POST request with 2 numbers in the payload)
app.post("/calculate", (req, res) => {
    const { first_num, second_num } = req.body;
    
    // elaboration of the result
    const result = first_num + second_num + findNextPrime(first_num, second_num)  // next prime number added

    // send result in JSON format
    res.json({ result })
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
