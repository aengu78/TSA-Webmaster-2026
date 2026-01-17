//all the setOrg vars are for the org catagories and hold the values in a array like obj
const acceptSub = document.querySelector("[suggestion-but]")
const clearItems = document.querySelectorAll("[clear-sub]")
const changeItems = document.querySelectorAll("[change-sub]")

//ex org1 set to last index 
//waits for someone to type into the thing and gets input
acceptSub.addEventListener("click",(e)=>{
    for(let i=0;i< clearItems.length;i++ ){
        clearItems[i].classList.toggle("hide", true)
    }
    changeItems[0].textContent = "We will review your suggestion shortly."
    changeItems[1].textContent ="Thank You!"
})