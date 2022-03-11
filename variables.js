

// let user = 'Hari'          //global
// function grt(user, num)
// {
//     let num = 5             //local
//     return `Hello ${user} ${num}`
// }

// let str = grt(user, num);
// console.log(str);

function add(num1,num2, num3=1)      //default 
{
    return num1+num2+num3
}
let res = add(5,6,1);
console.log(res);