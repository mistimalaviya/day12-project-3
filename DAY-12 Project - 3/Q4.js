function q4(){

    let start= document.getElementById("data1").value;
    let end= document.getElementById("data2").value;
    let num= document.getElementById("data3").value;
    

    if( num >= start && num <=end ){
        document.getElementById("ans").innerText = `Within Range`;
    }
  
    else{
        document.getElementById("ans").innerText = `Out of Range`;
    }

}