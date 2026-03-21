//all the setOrg vars are for the org catagories and hold the values in a array like obj
const searchInput = document.querySelector("[data-search]")
const setOrg = document.querySelectorAll("[data-user-cards-container]")
//ex org1 set to last index 
//waits for someone to type into the thing and gets input
searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  users.forEach(user => {
    const isVisible =
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value)
    user.element.classList.toggle("hide", !isVisible)
  })
})
let users = []
const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
fetch("../scripts/DirectoryInfo.json")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")
      header.textContent = user.name
      body.append("Description: "+user.desc, "\n","Category: "+ user.category, "\n", "Area: "+user.area, "\n", "Address: "+user.address, "\n"+"Site: ")

      // 👇 create clickable site link
      const siteLink = document.createElement("a")
      siteLink.href = user.site.startsWith("http") ? user.site : "https://" + user.site
      siteLink.textContent = user.site
      siteLink.target = "_blank"      // opens in new tab
      siteLink.rel = "noopener"       // security best practice

      body.append(siteLink, "\n","Number: "+ user.number)
      body.style.whiteSpace = "pre-wrap";
      userCardContainer.append(card)
      return { name: user.name, email: user.desc, element: card }
    })
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
