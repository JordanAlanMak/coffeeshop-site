/*******************
Display on scroll
*******************/
const scrollOffset = 100
const scrollElements = Array.from(document.querySelectorAll('.to-fade-in'))

const displayElementsInView = () => {
    // Check if all elements have been scrolled
    if(scrollElements === undefined || scrollElements.length === 0) return

    scrollElements.forEach(item => {
        const elTop = item.getBoundingClientRect().top
        
        if (elTop <= window.innerHeight - scrollOffset) {
            item.classList.add('fade-in')
        }
    })
}

['scroll', 'load'].forEach(event => {
    const timeout = 250
    let preventDisplay = false

    window.addEventListener(event, () => {
        if (preventDisplay) {
            return
        }
        preventDisplay = true
        setTimeout(() => {
            displayElementsInView()
            preventDisplay = false
        }, timeout)
    })
});