// Given this function:

// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function(num) {
//     return num % 2 === 0
//   });
// }

// Refactor it to use the rest operator & an arrow function:




const filterOutOdds = (...nums) => {
    
    return nums.filter((num)=> num % 2 === 0 )
}

console.log(filterOutOdds('1', '3' , '6')); 
//  ['6']








//  Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
//  Make sure to do this using the rest and spread operator.



const findMin = (...numbers) => {return Math.min(...numbers)};

console.log(findMin(1,2,3));
//  1











//  Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.




const mergeObjects = (obj1, obj2)=> {return {...obj1 , ...obj2} };

console.log(mergeObjects({a:1 , b:2} , {c:3 , d:4}));
//  {a: 1, b: 2, c: 3, d: 4}











//  Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. 
//  The function should return a new array with the original array values and all of additional arguments doubled.



function doubleAndReturnArgs(arr , ...nums){
    let doubledNums = nums.map((num)=>  num * 2);
    return [...arr , ...doubledNums];
}

console.log(doubleAndReturnArgs([1,2,3], 2, 2.5, 3));
//  (6) [ 1,2,3,4,5,6 ]








//  Slice and Dice!
//  For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!
//  Make sure that you are always returning a new array or object and not modifying the existing inputs.
/** remove a random element in the items array
and return a new array without that item. */





const removeRandom = (...items)=>{
    let newItemsList = [...items];
    let randomIndex = Math.floor(Math.random() * items.length );
    newItemsList.splice(randomIndex, 1);
    return newItemsList ;
}
console.log(removeRandom(1,2,3,4,5,6,7,8,9,10));
//  (9) [1, 2, 3, 4, 5, 6, 7, 9, 10]



//-------------------------------------------------------------------------------------------------------------------------



const extend = (arr1, arr2)=>{return [...arr1, ...arr2]};

console.log(extend(['hello'],['there']));
//  (2) [ 'hello' , 'there' ]



//-------------------------------------------------------------------------------------------------------------------------



const addKeyVal = (obj, key, val)=>{
    let object = {...obj, [key]: val}
    return object
}
console.log(addKeyVal({name : 'Paulo'} , 'status' , 'sleepy' ));
//  {name : 'Paulo' , status : 'sleepy' }



//-------------------------------------------------------------------------------------------------------------------------




const removeKey = (obj , key)=>{
    let copyObj = {...obj};
    delete copyObj[key];
    return copyObj ;
};

console.log(removeKey({name:'batman' , friend:'superman'} , 'friend'));
//  { name : 'batman' }





//-------------------------------------------------------------------------------------------------------------------------






const combine = (obj1 , obj2 )=>{
    return {...obj1 , ...obj2};
}

console.log(combine({name : 'Paulo'}, {hobbies : ['coding', 'fitness', 'drawing', 'sleeping']}));
//  {name: 'Paulo', hobbies: Array(4)} 




//-------------------------------------------------------------------------------------------------------------------------




const update = (obj , key , val)=> {
    let newObj = {...obj};
    newObj[key] = val ;
    return newObj ;
}

console.log(update({name : 'Kanye West' , recent_hit : 'off the grid'} , 'recent_hit' , 'carnival'));
//  { name: 'Kanye West' , recent_hit: 'carnival' }