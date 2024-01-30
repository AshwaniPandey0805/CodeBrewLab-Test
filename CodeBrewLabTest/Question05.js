                                    //                              var  
                                    //                          ===========
//  1) var has the function or global scope.
// Ex:
var x = 1;

if (x === 1) {
   x = 2;
    // console.log(x); // 2
}
// console.log(x); // 2

//-------------------------------------------------------------------------------------------------------

// 2) var get hoisted on the top and initilised undefined

function checkHoist(){
    // console.log(y) // output : undefined
}

checkHoist();

var y = 10; // y -> hosited to the top level of the program or block and assigned as Undefined

//----------------------------------------------------------------------------------------------------------

// 3) It can be updated or re-declared.

var name = 'Ashwani'; // First we initilized 'name' variable with "Ashwani"

function setName(){
    var name = "Pandey"; // Now when function invoked 'name' variable with "Pandey"  
    // onsole.log(name); // output : Pandey
}
setName(); // function invoked
// console.log(name) // output : "Ashwani"

//========================================================================================================================================

//                                                          let
//                                                  ==================

// 1) let has function scope

// let a = 1

if (true) {
    let a = 2; // variable is accessible to if-block, not out side the block
    console.log(a); // 2
}
// console.log(a); // ReferenceError: a is not defined

//-----------------------------------------------------------------------------------------------------------------------------------

// 2) It also got hoisted to the top of its scope but didn't initialize.

function checkHoist(){
    // console.log(b)  // ReferenceError: Cannot access 'b' before initialization , if we used var 'undefined' will be printed 
}

let b = 10;

checkHoist();

 // y -> hosited to the top level of the program or block, but cannot initialization

//-----------------------------------------------------------------------------------------------------------------------------------

// 3) It can only be updated and can't be re-declared.

let name = 'Ashwani'; // First we initilized 'name' variable with "Ashwani"

function setName(){
     name = "Pandey"; 
    onsole.log(name); // SyntaxError: Identifier 'name' has already been declared
}
setName(); // function invoked
console.log(name) // output : "Ashwani

//========================================================================================================================================

// const

// 1) const variable has the block scope.

if (true) {
    const c = 2; // variable is accessible to if-block, not out side the block
    console.log(c); // 2
}

//---------------------------------------------------------------------------------------------------------------------



// 2) It also got hoisted to the top of its scope but didn't initialize.

// console.log(a); // ReferenceError: a is not defined

function checkHoist(){
    // console.log(b)  // ReferenceError: Cannot access 'b' before initialization , if we used var 'undefined' will be printed 
}

const c = 10;

checkHoist();


// 3) It can't be updated or re-declared.

const name = 'Ashwani'; // First we initilized 'name' variable with "Ashwani"

function setName(){
     name = "Pandey"; 
    onsole.log(name); // SyntaxError: Identifier 'name' has already been declared
}
setName(); // function invoked
console.log(name) // output : "Ashwani









