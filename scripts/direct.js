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
fetch("directory-info.json")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")
      header.textContent = user.name
      body.textContent = user.desc
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
