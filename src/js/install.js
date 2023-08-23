export default function Install() {
    const drop = document.querySelector('.install')
    const buttons = document.querySelectorAll('[data-install=""]')
    const closeWrap = drop.querySelector('.popup--title')
    const close = closeWrap.querySelector('button')

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            drop.classList.remove('hidden')
        })
    })

    close.addEventListener('click', () => {
        drop.classList.add('hidden')
    })
}