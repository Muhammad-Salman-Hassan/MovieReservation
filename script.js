const container=document.querySelector('.container')
const seats=document.querySelectorAll('.row .seat:not(.occupied)')
let count=document.querySelector(".count")
const total=document.querySelector(".total")
const movieSelect=document.querySelector("#movies")
const ticketPrice=+movieSelect.value
// seats.forEach((seat)=>{
//     seat.addEventListener("click",()=>{
//         console.log("click")
//     })
// })


container.addEventListener('click',(e)=>{
    if(e.target.classList.contains('seat')&&!e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected')
    }
})
console.log(ticketPrice)
console.log(container)