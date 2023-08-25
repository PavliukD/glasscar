export default function Manufacturer() {
    const list = document.querySelector('.calculator--manufacturer-list')
    const items = list.querySelectorAll('li')

    items.forEach(item => {
        const button = item.querySelector('.add')
        const text = item.querySelector('p')

        const txts = button.querySelectorAll('span')

        const icons = button.querySelectorAll('.cross')

        button.addEventListener('click', () => {
            text.classList.toggle('active')
            button.classList.toggle('active')
            icons.forEach(icon => icon.classList.toggle('hidden'))
            txts.forEach(txt => txt.classList.toggle('hidden'))
        })
    })
}