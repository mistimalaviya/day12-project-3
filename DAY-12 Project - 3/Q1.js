function q1(){

    let year = document.getElementById("data").value

    if( year <= 0 && year < 1){
    document.getElementById("ans").innerText = `Ancient Time`;
    }
    else if( year >= 1 && year <= 1500 ){
    document.getElementById("ans").innerText = `Medieval Time`;
    }
    else if( year >= 1501 && year <= 2024 ){
    document.getElementById("ans").innerText = `Modern Time`;
    }

    else if ( year > 2024){
    document.getElementById("ans").innerText = `Future Time`;    
    }  
}