
// let input = 'name'
// let alien = {
//     name : 'Hari',
//     tech : 'JS',
//     work_exp : 1
// }
// console.log(alien[input]);

//complex object

// let alien = {
//     name : 'Hari',
//     tech : 'JS',
//     work_exp : 1,
//     laptop : {
//         ram : 4,
//         brand : 'HP'
//     }
// }
// delete alien.laptop
// console.log(alien);


//object method -- function inside object
let laptop = {
    cpu : 'i9',
    ram : 4,
    brand : 'hp',

    greet : function() {
        console.log("Hello");
        console.log(this.cpu);   //this keyword -> refers current objects
    }
}
laptop.greet();


