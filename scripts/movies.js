// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let showthemoney =JSON.parse( localStorage.getItem("amount"))
document.querySelector("#wallet").innerText=showthemoney
document.querySelector("#search").addEventListener("keypress",bounce)

function appendmovie(){
    let search=document.querySelector("#search").value
fetch(`https://www.omdbapi.com/?apikey=f925545c&s=${search}`)
.then(function(res){
    return res.json()
})  
.then (function(res){
    console.log(res.Search)
    appendcont(res.Search)
}) 
function appendcont(data){
    document.querySelector("#movies").innerHTML=null
data.map(function(el){
    let div=document.createElement("div")
    let image=document.createElement("img")
    let p=document.createElement("p")
    let but=document.createElement("button")
    but.setAttribute("class", "book_now")
    image.src=el.Poster
    p.innerText=el.Title;
    but.innerText="Book Now"
   but.addEventListener("click",function(){
       showcheck(el)
   })
    div.append(image,p,but)
    document.querySelector("#movies").append(div)
})

}
}
let arr=[]
function showcheck(el){
    arr.push(el)
   
    localStorage.setItem("movie",JSON.stringify(arr))
    window.location.href="checkout.html"
} 
var id  
function bounce(){
    if(id){
        clearTimeout(id)
    }
  id= setTimeout(function(){
       appendmovie()
   },1000)
}


