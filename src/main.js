function kmkts() {
    var result = document.getElementById("numberInput").value*0.539957;

    if (result >= 0) {
        document.getElementById("resultOutput").innerHTML = result;
    }
    else {
        alert("Please enter valid number!");
    }
}

document.getElementsByClassName("wrapper").style.height = "200px";