export default function Main() {
    const button = document.querySelector('.footer--to-main')

    button.addEventListener('click', () => {
        window.scrollTo(0, 0)
    })
}