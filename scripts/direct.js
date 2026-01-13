const searchInput = document.querySelector("[data-search]")
const setOrgName = document.querySelectorAll("[org-names]")
const setOrg = document.querySelectorAll("[orgs-des]")
//ex org1 set to last index 

searchInput.addEventListener("input",(e)=>{
    const value = e.target.value.toLowerCase()
    console.log(value)
    for(let i=0;i< setOrg.length;i++ ){
        console.log(i)
        const isVis = setOrg[i].textContent.toLowerCase().includes(value) || setOrgName[i].textContent.toLowerCase().includes(value)
        console.log(isVis)
        if(isVis){
        setOrg[i].classList.toggle("hide", !isVis)
        setOrgName[i].classList.toggle("hide", !isVis)
        }
        else{
        setOrg[i].classList.toggle("hide", !isVis)
        setOrgName[i].classList.toggle("hide", !isVis)
        }}
})
//function hideHeader() {
  // Add the 'hide' class, making it disappear
  //headerElement.classList.toggle("hide", true);
//}