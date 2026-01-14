//all the setOrg vars are for the org catagories and hold the values in a array like obj
const searchInput = document.querySelector("[data-search]")
const setOrgName = document.querySelectorAll("[org-names]")
const setOrgDes = document.querySelectorAll("[orgs-des]")
const setOrgLoc = document.querySelectorAll("[orgs-location]")
const setOrgSite = document.querySelectorAll("[orgs-site")
const setOrgCat = document.querySelectorAll("[org-cat]")
//ex org1 set to last index 
//waits for someone to type into the thing and gets input
searchInput.addEventListener("input",(e)=>{
    const value = e.target.value.toLowerCase()
    console.log(value)
    for(let i=0;i< setOrgDes.length;i++ ){
        //console.log(i)
        //long if statemtn that gets what the user typed and checks which orgs have it in any catagoy 
        const isVis = setOrgDes[i].textContent.toLowerCase().includes(value) || setOrgName[i].textContent.toLowerCase().includes(value)|| setOrgLoc[i].textContent.toLowerCase().includes(value) || setOrgSite[i].textContent.toLowerCase().includes(value)|| setOrgCat[i].textContent.toLowerCase().includes(value)
        console.log(isVis)
        if(isVis){
        setOrgDes[i].classList.toggle("hide", !isVis)
        setOrgLoc[i].classList.toggle("hide", !isVis)
        setOrgName[i].classList.toggle("hide", !isVis)
        setOrgSite[i].classList.toggle("hide", !isVis)
        setOrgCat[i].classList.toggle("hide", !isVis)
        }
        else{
        setOrgDes[i].classList.toggle("hide", !isVis)
        setOrgLoc[i].classList.toggle("hide", !isVis)
        setOrgName[i].classList.toggle("hide", !isVis)
        setOrgSite[i].classList.toggle("hide", !isVis)
        setOrgCat[i].classList.toggle("hide", !isVis)
        }}
})
/*
 "name": "211",
      "category": "General",
      "number": "211",
      "site": "https://www.211oklahoma.org",
      "area": "Statewide",
      "address": "N/A",
      "desc": "2-1-1 Oklahoma offers information and referral across the spectrum of human need including, but not limited to, food pantries, affordable housing, health resources, child care, after-school programs, caregiver support, financial programs, literacy, and job programs."
    },*/
