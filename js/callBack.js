// function fnA(a, b, callback){
//  const message = "hello";
// console.log(a,b);
// console.log(callback(a,b, message));
// }

// const FnB = function (x, y, message){
// console.log(message);
// return x + y;
// };

// const fn0 = function (x,y){
//     return x * y;
// }

// fnA(2, 3, FnB);
// fnA(2,2, fn0);

// fnA(12,4,function (x,y){return x/y});


// document.addEventListener('scroll', (e) =>  {

// })


// function onGetPositionSuccess(position){
// console.log("Це виклик onGetPositionSuccess");
// console.log(position);
// };
// function onGetPositionError(error){
//     console.log("Це виклик onGetPositionError");
//     console.log(error);
// };
// window.navigator.geolocation.getCurrentPosition(
//     onGetPositionSuccess,
//      onGetPositionError
//     );

function callback (){
    console.log("В середині колбека в таймауті через 5 секунд");
};
console.log("В коді перед timeout");
setTimeout(callback, 5000);
console.log("В коді після timeout");
// setInterval(callback, 3000);


