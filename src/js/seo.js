export default function Seo() {
    const base = document.querySelector('.seo')
    const list = base.querySelector('.seo-list')
    const button = base.querySelector('.seo-button')
    const height = list.clientHeight

    console.dir(list)

    button.addEventListener('click', () => {
        const inserts = button.querySelectorAll('div')
        

        inserts.forEach(ins => {
            ins.classList.toggle('active')
        })

        list.classList.toggle('active')

        if (!list.classList.contains('active')) {
            list.style.height = `${height}px`
            return
        }
        list.style.height = `${list.scrollHeight}px`
    })
}