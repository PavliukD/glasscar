export default function Repair() {
    const drop = document.querySelector('.repair')
    const buttons = document.querySelectorAll('[data-repair=""]')
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