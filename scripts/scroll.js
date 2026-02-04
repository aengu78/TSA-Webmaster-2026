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

const slideImages = document.querySelectorAll('.highlight-img');
slideImages.forEach(el => observer.observe(el));

const slideDescriptions = document.querySelectorAll('.highlight-desc');
slideDescriptions.forEach(el => observer.observe(el));
