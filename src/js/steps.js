export default function Steps() {
    const section = document.querySelector('.steps')

    const items = section.querySelectorAll('li')

    items.forEach(item => {
        if (!item.classList.contains('active')) {
            return
        }
        const text = item.querySelector('p')
        text.style.height = `${text.scrollHeight}px`
    })

    items.forEach(item => {
        const text = item.querySelector('p')
        console.dir(text.scrollHeight)
        item.addEventListener('click', () => {
            items.forEach(itm => {
                itm.classList.remove('active')
                const txt = itm.querySelector('p')
                txt.style.height = '0px'
            })
            item.classList.add('active')
            text.style.height = `${text.scrollHeight}px`
        })
    })
}