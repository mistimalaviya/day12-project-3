function q6(){

    let a=document.getElementById("income").value ;
    let b=document.getElementById("score").value ;
    let c=document.getElementById("amount").value ;
 

    if(a<=50000 && b<=700 && c<=a/2){
        document.getElementById("ans").innerText ="Eligible";
    }
   
    else{
        document.getElementById("ans").innerText ="Not Eligible";
    }
 
}