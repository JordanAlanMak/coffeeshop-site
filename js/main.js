const scrollOffset = 100
const scrollEls = document.querySelectorAll('.to-fade-in')

const elementInView = (el, offset = 0) => {
    // get space between element and top of viewport
    const elTop = el.getBoundingClientRect().top
    // return true if element top - scrollOffset is in view
    return elTop <= (window.innerHeight - offset)
}

const handleScroll = () => {
    scrollEls.forEach(item => {
        if (elementInView(item, scrollOffset)) {
            item.classList.add('fade-in')
        }
    })
}

window.addEventListener('scroll', () => {
    handleScroll()
})