function valor(x) {
    document.getElementById("display").value += x;

}

function borrardisplay() {
    document.getElementById("display").value = '';

}

function cal_resultado() {
    var result = eval(document.getElementById("display").value);

    document.getElementById("display").value = result;

}