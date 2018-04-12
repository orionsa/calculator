
let num1= document.querySelector(".num-1");
let num2 = document.querySelector(".num-2");
let opr = document.querySelector(".oparator");

function calculate(x,y,oparation){
    switch(oparation){
        case "*": document.querySelector('.res').innerHTML = (x*y);   
        break
        case "-": document.querySelector('.res').innerHTML = (x-y);
        break
        case '+': {let res = eval(x) + eval(y);
                   document.querySelector('.res').innerHTML = res 
        }
        break
        case '/': document.querySelector('.res').innerHTML = (x/y);
        break
    }
}

num1.addEventListener("change", ()=> {
    calculate(num1.value,num2.value,opr.value)
});
num2.addEventListener("change", ()=> {
    calculate(num1.value,num2.value,opr.value)
});
opr.addEventListener("change", ()=> {
    calculate(num1.value,num2.value,opr.value)
});

