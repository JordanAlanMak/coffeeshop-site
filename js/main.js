/*Handle Element Fade In
***********************/
const scrollElements = Array.from(document.querySelectorAll('.to-fade-in'))
const scrollOffset = 5

const handleElementFadeIn = () => {
    scrollElements.forEach(item => {
        const elTop = item.getBoundingClientRect().top
        
        if (elTop <= window.innerHeight - (window.innerHeight * (scrollOffset/100))) {
            item.classList.add('fade-in')
        }
    })
}

/* Handle Scrolling Nav
**********************/
const nav = document.querySelector('#main-nav')
let prevScrollY = 0

const handleNavScroll = () => {
    let curScrollY = window.scrollY || window.pageYOffset

    // document.activeElement used for accessibility if nav item is currently focused
    if (curScrollY > prevScrollY && !nav.contains(document.activeElement)) {
        nav.classList.add('nav-hidden')
        nav.classList.remove('nav-visible')
    // scrolling up more than 100px
    } else if (curScrollY <= prevScrollY - 100) {
        nav.classList.add('nav-visible')
        nav.classList.remove('nav-hidden')
    }
    prevScrollY = curScrollY
};

/* Create event handlers that call scrolling functions
*****************************************************/
['scroll', 'scrollend', 'load'].forEach(event => {
    let throttleEvent = false

    window.addEventListener(event, () => {
        const timeout = 250

        if (throttleEvent) return
        throttleEvent = true

        handleElementFadeIn()
        if
            (event === 'scroll' ||
            (event === 'scrollend' && (nav.classList.contains('nav-hidden') || window.scrollY < 500))
            ) {
            handleNavScroll()
        }
        
        setTimeout(() => {
            throttleEvent = false
        }, timeout)
    })
});

/* Mobile Nav
*****************************************************/
// Mobile Nav Toggle
const menuToggle = document.querySelector('#menu-toggle')
const sideNav = document.querySelector('#side-nav')

menuToggle.addEventListener('click', (e) => {
    e.preventDefault()

    if (!sideNav.classList.contains('unhidden')) {
        sideNav.classList.add('unhidden')
        document.body.classList.add('side-nav-open')
    } else {
        sideNav.classList.remove('unhidden')
        document.body.classList.remove('side-nav-open')
    }
})

// Handle click on mobile link
const menuLinks = document.querySelectorAll('.side-nav-link')

menuLinks.forEach((item) => {
    item.addEventListener('click', () => {
        sideNav.classList.remove('unhidden')
        document.body.classList.remove('side-nav-open')
    })
})

/* Menu Gallery
*****************************************************/
const galleryNav = document.querySelectorAll('#menu-content ul button')
const menuGroups = document.querySelectorAll('.menu-group')

galleryNav.forEach(button => {
    button.addEventListener('click', () => {
        galleryNav.forEach(button => {
            button.classList.remove('active')
        })
        button.classList.add('active')

        console.log(button.name)
        menuGroups.forEach(group => {
            group.classList.add('hidden')
            group.classList.remove('unhidden')
        })
        document.querySelector(`#${button.name}`).classList.add('unhidden')
    })
})

/* Review Carousel
*****************************************************/
const slidesContainer = document.getElementById("slides-container")
const slide = document.querySelector(".slide")
const prevButton = document.getElementById("slide-arrow-prev")
const nextButton = document.getElementById("slide-arrow-next")

nextButton.addEventListener("click", () => {
    const nextScrollTarget = Math.floor(slidesContainer.scrollLeft / slide.clientWidth) + 1
    slidesContainer.scrollLeft += slide.clientWidth * nextScrollTarget - slidesContainer.scrollLeft
});
prevButton.addEventListener("click", () => {
    const prevScrollTarget = Math.ceil(slidesContainer.scrollLeft / slide.clientWidth) - 1
    slidesContainer.scrollLeft += slide.clientWidth * prevScrollTarget - slidesContainer.scrollLeft
});