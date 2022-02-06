const container=document.querySelector('.container')
const seats=document.querySelectorAll('.row .seat:not(.occupied)')
let count=document.querySelector(".count")
const total=document.querySelector(".total")
const movieSelect=document.querySelector("#movies")
let ticketPrice=+movieSelect.value
// seats.forEach((seat)=>{
//     seat.addEventListener("click",()=>{
//         console.log("click")
//     })
// })

const updateSelctedCount=()=>{
    const selectedSeat=document.querySelectorAll(".row .seat.selected")
    const seatIndex=[...selectedSeat].map((seat)=>{
        return [...seats].indexOf(seat)
    })
    console.log(seatIndex)
    const selectedSeatLength=selectedSeat.length
    count.innerText=selectedSeatLength
    total.innerText=selectedSeatLength*ticketPrice
    localStorage.setItem("selectedSeats",JSON.stringify(seatIndex))
}

const setMovieUpdate=(index,MoviePrice)=>{
localStorage.setItem("Selected Movie Price",MoviePrice)
localStorage.setItem("Selected Movie Index",index)
}

container.addEventListener('click',(e)=>{
    if(e.target.classList.contains('seat')&&!e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected')
        updateSelctedCount()
    }
})

movieSelect.addEventListener("change",(e)=>{
    ticketPrice=Number(e.target.value)
    setMovieUpdate(e.target.value,e.target.selectedIndex)
    updateSelctedCount()
})