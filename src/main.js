function kmkts() {
    var result = document.getElementById("numberInput").value*0.539957;

    if (result >= 0) {
        document.getElementById("resultOutput").innerHTML = result;
        
        if (result >= 666.7389036) {
            document.getElementById("resultOutput").innerHTML = result.toFixed(2);
            alert("Speed of sound reached/exceeded!");
        }
    }
    else {
        alert("Please enter valid number!");
    }

}

document.getElementsByClassName("wrapper").style.height = "200px";