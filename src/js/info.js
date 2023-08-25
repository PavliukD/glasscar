export default function Info() {
    const drop = document.querySelector('[data-popup="info"]')
    const buttons = document.querySelectorAll('[data-info=""]')
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