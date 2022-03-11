// let num =1;
// function show() {
//     console.log("Hello " + num);
//     num++;
//     show(); 
// }
// show();          
//recursion follows stack -- lifo

//factorial of a number 


function fact(n){
    if(n==0)
    {
        return 1;
    }
    else
        return n* fact(n-1);    
}
console.log(fact(171));