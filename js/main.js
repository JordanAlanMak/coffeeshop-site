/*Handle Element Fade In
***********************/
const scrollElements = Array.from(document.querySelectorAll('.to-fade-in'))
const scrollOffset = 5

const handleElementFadeIn = () => {
    // Check if elements exist
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

const handleNavScroll = (e) => {
    let curScrollY = window.scrollY || window.pageYOffset
    
    // document.activeElement used for accessibility if nav item is currently focused
    if (curScrollY > prevScrollY && !nav.contains(document.activeElement)) {
        nav.classList.add('nav-hidden')
        nav.classList.remove('nav-visible')
    } else {
        nav.classList.add('nav-visible')
        nav.classList.remove('nav-hidden')
    }
    prevScrollY = curScrollY
};

/* IIFE: Create event handlers that call scrolling functions
***********************************************************/
['scroll', 'scrollend', 'load'].forEach(event => {
    const timeout = 300
    let throttleEvent = false

    window.addEventListener(event, () => {
        if (throttleEvent) return
        throttleEvent = true
        
        handleElementFadeIn()
        if (event === 'scroll' || (event === 'scrollend' && nav.classList.contains('nav-hidden'))) {
            handleNavScroll(event)
        }
        setTimeout(() => {
            throttleEvent = false
        }, timeout)
        console.log('finished running')
    })
});