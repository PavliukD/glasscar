export default function Request() {
    const drop = document.querySelector('.request')
    const buttons = document.querySelectorAll('[data-request=""]')
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