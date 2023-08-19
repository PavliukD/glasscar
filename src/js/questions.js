export default function Questions() {
    const base = document.querySelector('.questions')

    const list = base.querySelector('ul')
    const items = list.querySelectorAll('li')

    items.forEach(item => {
        const text = item.querySelector('p')
        item.addEventListener('click', () => {
            item.classList.toggle('active')
            if (!item.classList.contains('active')) {
                text.style.height = `0px`
                return
            }
            text.style.height = `${text.scrollHeight}px`
        })
    })
}