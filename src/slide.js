export default function slideTo(id) {
    var element = document.getElementById(id)
    window.scrollTo({
        top: element.offsetTop,
        left: 0,
        behavior: 'smooth',
    })
}
