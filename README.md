# Simple Calculator App

## Description
This web app calculates the sum of two numbers provided by the user and adds the first prime number greater than the largest of the two numbers. The result is only displayed when the user inputs two valid numbers, after clicking on the **Calculate** button. Otherwise, an error message is shown. The **Reset** button resets the screen and the inputs to their placeholder values. **Show operation** shows the operands added to calculate the result: when clicked on it changes into **Hide operation** to let the user hide the same operands.

### Features:
1. Accepts both **positive and negative numbers**, as well as both **integer and decimal numbers**.
2. Considers prime numbers only as **positive integers greater than 2 or equal**, which are divisible only by 1 and themselves.
3. **Example**: If the inputs are 3 and 4, the sum will be `3 + 4 + 5 = 12`, where 5 is the next prime number greater than 4.
4. **Example 2**: If both input numbers are negative, the first prime number greater than them will be 2.


### Technologies Used:
- **Frontend and styling**: HTML, CSS, JavaScript.
- **Backend**: Node.js with Express.js framework (to serve static files and handle **/calculate** and **/** home routes).

### Installation and Setup

1. Clone the repository or download the project files.
2. Open a terminal and navigate to the project directory.
3. Install the project dependencies (especially Express):
   ```bash
   npm install
   ```
4. Start the application:
   ```bash
   node app.js
   ```
5. Open your browser and navigate to `http://localhost:8080` to use the app.

#### Note on Data Validation
The input data is validated in the frontend, before being sent to the backend in the body of a POST request.

Some tests showed a problem on Safari: the browser lets the user insert values different from numbers, it accepts them and stores them as empty strings (""). The Number constructor by default turns an empty string into a 0 (valid number). This way, any String input is turned into a 0 and sent to the backend for elaboration. 

**Possible solution**: check if inputs' values are different from "" and then convert them into numbers using Number constructor.


