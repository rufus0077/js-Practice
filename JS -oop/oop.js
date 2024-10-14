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

// factory re constructor function 

function createCircle(radius){
    return { // return indicates factory function
        radius,
        draw : function(){
            console.log('draw');
        }

    }
}

const cirCle =createCircle(1);
// console.log(cirCle);

// /********************************************************************************************************************//

// Constructor

function CirCle(radius){   // this is a type of class in js when we use capital letters in the function name
    this.radius = radius;
    this.draw = function(){
        console.log("draw");
    }

}

const another = new CirCle(1);// imagine it creates new object in heap with different address to it
console.log(another);