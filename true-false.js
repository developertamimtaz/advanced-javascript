//Below Values always return false.
//const name = "0";
// 0
// "";
// undefined
// null
// NaN
// false

//Below values always return true.
// '0', ' ', [], {}
// 'false'

let name = 12;


if(name || name == 0){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

//const age = 4;

//if(age > 0){ - either
// if(age){
//     console.log("condition is true");
// }
// else{
//     console.log("condition is false");
// }