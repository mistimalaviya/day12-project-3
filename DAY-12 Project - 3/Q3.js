function q3(){

    let a = document.getElementById("data1").value
    let b = document.getElementById("data2").value
    let c = document.getElementById("data3").value

    if( a >= b && a <= c ){
        document.getElementById("ans").innerText = `A is second largest of three numbers`
    }

    else if ( b >= a && b <= c ){
        document.getElementById("ans").innerText = `B is second largest of three numbers`
    }   

    else if ( c >= a && c <= b ){    
        document.getElementById("ans").innerText = `C is second largest of three numbers`
    }   


}