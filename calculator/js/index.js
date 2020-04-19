function insert(num) {
    document.getElementById('InputText').value = document.getElementById('InputText').value + num
    console.log(document.form.textview)
    console.log(typeof(document.getElementById('InputText').value))
}

function equal() {
    expresion = document.form.textview.value;
    res = eval(expresion);

    var res = Number(res) // The Number() only visualizes the type and is not needed
    var roundedres = res.toFixed(8);
    var rounded = Number(roundedres); // toFixed() returns a string (often suitable for printing already)
    if (expresion) {
        document.form.textview.value = eval(rounded)
    }
}

function clean() {
    document.form.textview.value = '';
}

function backspace() {
    leng = document.form.textview.value.length;
    document.form.textview.value = document.form.textview.value.substring(0, leng - 1);
}