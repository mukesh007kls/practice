const result=()=>{
    let num1=document.getElementById('firstNumber').value;
    let num2=document.getElementById('secondNumber').value;
    let x=0;
    if(document.getElementById('addition').checked){
        x=num1+num2;
    }else if(document.getElementById('subraction').checked){
        x=num1-num2;
    }else if(document.getElementById('multiplication').checked){
        x=(num1)*(num2);
    }else if(document.getElementById('division').checked){
        x=num1/num2;
    }
    alert(x);
    let rs=document.getElementById('result');
    rs.innerHTML="result=" + x;
}