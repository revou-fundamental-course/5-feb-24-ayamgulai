const convert = () => {

        var c = document.getElementById('celcius');
        var f = document.getElementById('fahrenheit');
        var cpro = document.getElementById('calculation-process');
        // c ke f
        if(c.disabled == false){
            if(isNaN(c.value) || c.value == "") {
                alert("Silahkan Masukkan Nilai Angka")
                f.value = "";
            }
            else {
            f.value = (c.value * 9 / 5) + 32;
            cpro.value = "(" + c.value+"°C * 9 / 5) + 32 = " + f.value + "°F";
        
            } 
        }

        // f ke c
        if(f.disabled == false){
            if(isNaN(f.value) || f.value == "") {
                alert("Silahkan Masukkan Nilai Angka")
                c.value = "";
            }
            else {
            c.value = (f.value -32) * 5 / 9;
            cpro.value = "(" + f.value+"°F - 32 ) * 5 / 9 = " + c.value +"°C";
          
            } 
        }
}

const reset = () => {
    var c = document.getElementById('celcius');
    var f = document.getElementById('fahrenheit');
    var cpro = document.getElementById('calculation-process');

    f.value = "";
    c.value = "";
    cpro.value = "";
}
const reverse = () => {
    var c = document.getElementById('celcius');
    var f = document.getElementById('fahrenheit');

    reset();
    if(c.disabled == true){
        c.disabled = false;
        f.disabled = true;
    } else {
        f.disabled = false;
        c.disabled = true;
    }
}
