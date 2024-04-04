  
function convert(){

    var myvalue= document.getElementById("value").value;
    
    var myresult= document.getElementById("result");
   
    
    if(myvalue==""){
        myresult.innerHTML="enter value";
    }else if(isNaN(myvalue)){
        myresult.innerHTML="enter number not Text";
    }else if (myvalue==0) {
        myresult.innerHTML= "enter another number rather than zero";
    }else if (myvalue<0){
        myresult.innerHTML="enter positive Number";
    }else {
        myresult.innerHTML= myvalue*50;
    }
    return false;
}