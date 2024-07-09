// //map

// const arr = [12,34,55,243,67];

// const mapArr = arr.map((Number) => {
//     return Number *2;
// })

// console.log(arr);
// console.log(mapArr);



// //filter
// const filteredArr = arr.filter((Number) => Number > 40 && Number < 486);
// console.log(filteredArr);

// //find

// const findNumber = arr.find((Number) => Number === 12);
// console.log(findNumber);

// //Sort

// const sortArr = arr.sort((curEl, nextEl) => {
//     return nextEl - curEl;
// });
// console.log(sortArr);


// const words = ["b","B","a","A"];
// console.log(words.sort());






// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
//   ];

//   const playersName = players.map((player) => {
//     const {name,timePlayed,points,online} = player;
//     const player_box = document.querySelector(".player_box"); 
//   const list = `<div><h2>${name}</h2><p>${timePlayed}</p><p>Досвід: ${points}</p><p class =".online">${online ? "Грає": "Відпочиває" ? "Грає": "Відпочиває"}</p></div>`;
//   player_box.insertAdjacentHTML("beforeend", list);
//   });
 
// document.addEventListener("DOMContentLoaded", ()=>{
//     const onlineEl = document.querySelectorAll(".online");
// });
//     onlineEl.forEach((element) => {
//         online ? element.classList.add ("green") : element.classList.add = ("red");
//     });




  