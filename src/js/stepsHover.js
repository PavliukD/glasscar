export default function StepsHover() {
    const block = document.querySelector('.steps')
    const items = block.querySelectorAll('li')

    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            items.forEach(itm => itm.classList.remove('shown'))
            item.classList.add('shown')
        })
    })
}