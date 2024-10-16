const circle ={
    radius :1,
    draw(){
        console.log('draw');
    }
};

// normal way of cloning

// const another ={};

// for(let key in circle){
//     another[key] = circle[key];
// }

// const another = Object.assign({}, circle);  // cloing an object

const another = { ...circle}; // spread operator

console.log(another);