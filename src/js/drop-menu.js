export default function DropMenu() {
    const wraps = document.querySelectorAll('.calculator--drop-menu-wrap')

    wraps.forEach(wrap => {
        const input = wrap.querySelector('input')
        const menu = wrap.querySelector('.calculator-drop-menu')
        const items = menu.querySelectorAll('li')
        input.addEventListener('input', (e) => {
            items.forEach(item => {
                const txt = item.querySelector('span')
                const text = txt.innerText
                const checkText = text.substring(0, input.value.length)
                const outerText = text.substring(input.value.length, text.length)
                console.log(outerText)
                if (input.value.toLowerCase() === checkText.toLowerCase()) {
                    item.classList.remove('hidden')
                    
                    return
                }
                item.classList.add('hidden')
            })
        })

        items.forEach(item => {
            item.addEventListener('click', () => {
                const txt = item.querySelector('span')
                const text = txt.innerText

                input.value = text

                items.forEach(itm => itm.classList.add('hidden'))
            })
        })
    })
}