const from = document.getElementById("from");
const to = document.getElementById("to");
const inputNumber = document.getElementById("input-number");
const resultBox = document.getElementById("result-box");

// ? Converting value
document.getElementById("Convert").addEventListener("click", () => {
    //* check From
    let fromValue = from.value;

    //* check to
    let toValue = to.value;

    //* check input number
    let inputValue = inputNumber.value;

    //* convert input number FROM - TO
    let res = convertBase(fromValue, toValue, inputValue);

    //* showing result
    resultBox.innerText = res;
});

function convertBase(fromBase, toBase, num) {
    let d = parseInt(num, fromBase); //?  converting number into base10
    let result = d.toString(toBase); //? converting base10 to required
    console.log(result);
    return result;
}

// ? Swap
document.getElementById("Swap").addEventListener("click", () => {
    let temp = from.value;
    from.value = to.value;
    to.value = temp;
});
