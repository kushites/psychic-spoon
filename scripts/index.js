// Store the wallet amount to your local storage with key "amount"
document.querySelector("#add_to_wallet").addEventListener("click", walletstore)
 var sum=JSON.parse(localStorage.getItem("amount"))

function walletstore(){
    let money =document.querySelector("#amount").value 
    sum=sum+Number(money)
    localStorage.setItem("amount", JSON.stringify(sum))
    let showmoney=JSON.parse(localStorage.getItem("amount"))
    document.querySelector("#wallet").innerText=showmoney
    window.location.reload()
}
let showmoney=JSON.parse(localStorage.getItem("amount"))
    document.querySelector("#wallet").innerText=showmoney