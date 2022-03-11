

//Set DS--------------------------------------------
//give unique values
//accept and give unorder list - no sorted 

// let nums = new Set();
// nums.add(3);
// nums.add(31);
// nums.add(3);
// nums.add(32);
// nums.add(1);

// console.log(nums.has(38));
// nums.forEach((n , i, nums) => {
//     console.log(n, i, nums);
// });

//to search Element in set -- has() --------------



//Map DSA   ---------------------------------
//accept key and value pair
//get -- is to check the value of key

let map = new Map();
map.set(11, 23);         //assign
map.set(2, 33);
map.set(2, 53);
// console.log(map.get(2));         get values

// for(let [k,v] of map)
// {
//     console.log(k, " : ", v);
// }

map.forEach((v, k) => {
    console.log(k, " : ", v);
});