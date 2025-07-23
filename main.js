const navbar = document.querySelectorAll('nav ul li a')

navbar.forEach(nav => {
    nav.addEventListener('click', function() {
        navbar.forEach(n =>
            n.classList.remove('active'))
        this.classList.add('active')
    })
})
