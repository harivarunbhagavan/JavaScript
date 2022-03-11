
// // //Arrow Function
// // let greet = (num1, num2) => {
    
// //     return num1+num2;
// // }

// // console.log(greet(5,6));

// //constructor function

// function Bio(name, tech)
// {
//     this.name = name;
//     this.tech = tech;
//     this.work = function()
//     {
//         console.log("I have 1 yr of exp");
//     }
// }

// let bio1= new Bio('Hari', 'js');
// let bio2= new Bio('varun','java');

// console.log(bio1);
// bio1.work();
// bio2.work();

//filter method -- filter based on condition
let nums= [4,5,6,7,8];
//map method -- take and double
//for each -- take and print
let result = nums.filter(n => n%2==0)
        .map( n => n*2)
        //to add all
        .reduce((a,b) => a+b);
        console.log(result);
    //    .forEach(n => {                
    //        console.log(n);
    //    });



