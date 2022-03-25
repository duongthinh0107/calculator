function calculator(phanbiet) {
    let input1 = document.getElementById('input1').value;
    let input2 = document.getElementById('input2').value;
    let check = check_type(input1, input2);
    let result = '';
    if (check) {
        input1 = parseInt(input1);
        input2 = parseInt(input2);
        if (phanbiet === '+') {
            result = add(input1, input2)
        } else if (phanbiet === '-') {
            result = sub(input1, input2)
        } else if (phanbiet === '*') {
            result = mul(input1, input2)
        } else {
            result = div(input1, input2)
        }
    } else {
        result = "hay nhap so vao"
    }
    console.log(result)
    display(result)

};

function check_type(input1, input2) {
    if (!isNaN(input1) && !isNaN(input2)) {
        return true
    } else {
        return false
    }
}

function add(input1, input2) {
    return input1 + input2;

};

function sub(input1, input2) {
    return input1 - input2;

};

function mul(input1, input2) {
    return input1 * input2;

};

function div(input1, input2) {
    return input1 / input2;

};

function display(result) {
    document.getElementById('result').innerText = 'Result: ' + result
};

