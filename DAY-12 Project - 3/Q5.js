function q5(){

    let grad = document.getElementById("data").value
    

    if( grad >= 90 && grad <=100 ){
        document.getElementById("ans").innerText = `GPA is : 4.0`;
    }

    else if ( grad >=80 && grad < 90){
        document.getElementById("ans").innerText = `GPA is : 3.0`;
    }
     
    else if ( grad >=70 && grad < 80){
        document.getElementById("ans").innerText = `GPA is : 2.0`;
    }

    else if ( grad >=60 && grad < 70){
        document.getElementById("ans").innerText = `GPA is : 1.0`;
    }

    else{
        document.getElementById("ans").innerText = `GPA is : 0.0`;
    }

}