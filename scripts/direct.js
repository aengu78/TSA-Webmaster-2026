//all the setOrg vars are for the org catagories and hold the values in a array like obj
const searchInput = document.querySelector("[data-search]")
const setOrg = document.querySelectorAll("[org-card]")
//ex org1 set to last index 
//waits for someone to type into the thing and gets input
searchInput.addEventListener("input",(e)=>{
    const value = e.target.value.toLowerCase()
    console.log(value)
    for(let i=0;i< setOrg.length;i++ ){
        //console.log(i)
        //long if statemtn that gets what the user typed and checks which orgs have it in any catagoy 
        const isVis = setOrg[i].textContent.toLowerCase().includes(value) 
        console.log(isVis)
        if(isVis){
        setOrg[i].classList.toggle("hide", !isVis)
        }
        else{
        setOrg[i].classList.toggle("hide", !isVis)
        }}
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=> {
        if(entry.isIntersecting) {
            console.log(entry.target)
            entry.target.classList.add('show')
        }else {
            entry.target.classList.remove('show')
        }
    })

}, {})

const slideImages = document.querySelectorAll('#cards-made');
slideImages.forEach(el => observer.observe(el));
