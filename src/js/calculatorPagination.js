export default function CalculatorPagination() {
    const wrap = document.querySelector('.calculator')
    const cont = wrap.querySelector('.container')
    const list = cont.children[0]
    const items = list.children

    const pagination = wrap.querySelector('.calculator-pagination')

    const left = pagination.querySelector('.left')
    const right = pagination.querySelector('.right')

    const current = pagination.querySelector('.current')

    let counter = 0

    right.addEventListener('click', () => {
        if (counter === 4) {
            return
        }
        counter++
        for (let i = 0; i < items.length; i++){
            items[i].style.transform = `translateX(-${list.clientWidth * counter}px)`
        }
        current.innerText = `0${counter + 1}`
    })

    left.addEventListener('click', () => {
        if (counter === 0) {
            return
        }
        counter--
        for (let i = 0; i < items.length; i++){
            items[i].style.transform = `translateX(-${list.clientWidth * counter}px)`
        }
        current.innerText = `0${counter + 1}`
    })
}