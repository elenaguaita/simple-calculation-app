document.getElementById('calculate-btn').addEventListener('click', async () => {
    const first_num = Number(document.getElementById('first-num').value);
    const second_num = Number(document.getElementById('second-num').value);

    const input_data = JSON.stringify({ first_num: first_num, second_num: second_num });

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
    let operation_str = `${first_num} + ${second_num} + ${prime_num}`
    document.getElementById('operation').textContent = operation_str;
})

let clicked = false;

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