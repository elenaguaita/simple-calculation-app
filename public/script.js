let clicked = false;

function resetOptions() {
    document.getElementById('error').style.display = "none"; 
    clicked = false    
    document.getElementById('operation').style.opacity = 0;
    document.getElementById("operation-btn").textContent = "Show operation"; 
}

document.getElementById('calculate-btn').addEventListener('click', async () => {
    const first_num = document.getElementById('first-num').value;
    const second_num = document.getElementById('second-num').value;

    // reset the screen before sending the request
    resetOptions();

    // data validation before sending data to backend
    // reason: "number" type buttons on some browsers (such a Safari) accept values different from numbers and store them as empty strings ""
    //          Number constructor turns an empty string into a 0 (valid number). This way, any string input is turned into a 0 and sent to backend for elaboration
    //          Possible solution: check is button's value is different from "" and then convert them into numbers using Number.
    if (first_num != "" && second_num != "") {
        const input_data = JSON.stringify({ first_num: Number(first_num), second_num: Number(second_num) });

        const response = await fetch('/calculate', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: input_data
        })

        const output = await response.json();
        document.getElementById('result').textContent = output.result;
        document.getElementById('result-display').style.opacity = 1;

        let prime_num = output.result - first_num - second_num
        let operation_str = `(${first_num}) + (${second_num}) + (${prime_num})`
        document.getElementById('operation').textContent = operation_str;
    } else {
        document.getElementById('error').style.display = "block";
        document.getElementById('result-display').style.opacity = 0;
    }
})

document.getElementById("operation-btn").addEventListener('click', async () => {
    if (clicked === false) {
        clicked = true
        document.getElementById('operation').style.opacity = 1;
        document.getElementById("operation-btn").textContent = "Hide operation";
    } else {
        clicked = false
        document.getElementById('operation').style.opacity = 0;
        document.getElementById("operation-btn").textContent = "Show operation";
    }
})