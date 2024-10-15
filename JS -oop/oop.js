                        //   Craeting Objects

1.// Creating object using object literal 

// let circle = {
//     radius: 1,
//     location: {
//         x:1,
//         y:2
//     },
//     area: function() {
//         console.log("area")
//     }
// }

// circle.area();
// console.log(circle.radius);

//*********************************************************************************** */

// factory re constructor function (return)

// function createCircle(radius){
//     return { // return indicates factory function
//         radius,
//         draw : function(){
//             console.log('draw');
//         }

//     }
// }

// const cirCle =createCircle(1);
// console.log(cirCle);

// /********************************************************************************************************************//

// Constructor(this) Built in constructor function

// function CirCle(radius){   // this is a type of class in js when we use capital letters in the function name
//     this.radius = radius;
//     this.draw = function(){
//         console.log("draw");
//     }

// }

// const another = new CirCle(1);// imagine it creates new object in heap with different address to it
// // if we forget to use new keyword it will assig to the global object
// console.log(another);

// *************************************************************************************************************************

// **value types and reference types**

//Value types
// two are different and stores values seperately

// Primitives are copied by their value 


// let x=10; 
// let y =x;

// x=20;

// console.log(x);
// console.log(y);

// *******************************************************************************


// Objects are copied by their reference **

// let x={value: 10}; 
// let y =x;

// x.value=20;

// console.log(x);
// console.log(y);


// **********************************************************************************

// Function example for primitives and reference types 

// this does not increase the number because its an primitive type .
// so the number inside the function stays as local and when consoling the global values comes in

// let number =10;

// function increase(number){
//     number++;
// }

// increase(number);
// console.log(number);



// *********************************************************************************************
// Reference function


// let obj ={value : 10};

// function increase1(obj){
//     obj.value++;
// }
// increase1(obj);
// console.log(obj);

// **************************************************************************************************

// Adding and removing properties

// function Circle(radius){  
//     this.radius = radius;
//     this.draw = function(){
//         console.log("draw");
//     }
    
// }

// const circle = new Circle(10);

// // Adding 
// circle.location = {x :1};
// const propertyName = 'location';
// circle[propertyName] = {x:1};

// delete circle['location'];

// *********************************************************************************************


// function Circle(radius){  
//     this.radius = radius;
//     this.draw = function(){
//         console.log("draw");
//     }
    
// }

// const circle = new Circle(10);

// for(let key in circle){
//     if(typeof circle[key] !== 'function');
//         console.log(key,circle[key]);
// }

// // for storing it in array use Object keyword

// const keys = Object.keys(circle);
// console.log(keys);

// // to check existence of an property or an method we use in operator

// if('radius' in circle){
//     console.log("circle has an radius");
// }


// *************************************************************************************************

// Abstraction  Private

// ** when we use this it becomes an property 

// instead of using this we can use let to become it private and local the function 

// function Circle(radius){  
//     this.radius = radius;

//     let defaultLocation = {x:0 ,y:0};

//     let computeOptimumLocation = function() {
//         console.log('draw');
//     };
//     this.draw = function(){
//         computeOptimumLocation();
//         console.log("draw");
//     }
    
// }

// const circle = new Circle(10);
// circle.draw();

// **********************************************************************************

// Getter functions to display private properties  

function Circle(radius){  
    this.radius = radius;
    
    let defaultLocation = {x:0 ,y:0};
    
    this.getDefaultLocation = function(){
        return defaultLocation;
    }
    this.draw = function(){
        computeOptimumLocation();
        console.log("draw");
    }
        
}

const circle = new Circle(20);
console.log(circle.getDefaultLocation());