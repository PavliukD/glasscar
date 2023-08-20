export default function Menu() {
    const button = document.querySelector('.header--menu-button')
    const txt = button.querySelectorAll('.header--menu-button-text')
    const icons = button.querySelectorAll('.header--menu-button-icon')
    const menu = document.querySelector('.menu')
    const header = document.querySelector('header')

    button.addEventListener("click", () => {
        txt.forEach(text => text.classList.toggle('hidden'))
        icons.forEach(icon => icon.classList.toggle('hidden'))

        menu.classList.toggle('hidden')
        header.classList.toggle('on')

        // if (menu.classList.contains('hidden')) {
        //     menu.style.height = "0px"
        //     return
        // }
        //  menu.style.height =  `${menu.scrollHeight}px`
    })
}