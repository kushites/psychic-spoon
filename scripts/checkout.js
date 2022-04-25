// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let showthemoney =JSON.parse( localStorage.getItem("amount"))
document.querySelector("#wallet").innerText=showthemoney
let movieap=JSON.parse(localStorage.getItem("movie"))
let image=document.createElement("img")
image.src=movieap[0].Poster
let p=document.createElement("h3")
p.innerText=movieap[0].Title
document.querySelector("#movie").append(image,p)
document.querySelector("#confirm").addEventListener("click", reducemoney)


function reducemoney(){
    let input = document.querySelector("#number_of_seats").value 
    let final = 100*Number(input)
    if(final>showthemoney){
        alert("Insufficient Balance!")
    }
    else{
        let final1=showthemoney-final;
        localStorage.setItem("amount",JSON.stringify(final1))
        alert("Booking successful!")
        window.location.reload()
    }

}