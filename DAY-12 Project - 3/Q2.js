function q2(){

    let leap_year = document.getElementById("data").value

    if( leap_year %4 == 0){
        document.getElementById("ans").innerText = `This is leap year`;
    }

    else{
        document.getElementById("ans").innerText = `This is a not leap year`;
    }

}