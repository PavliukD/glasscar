export default function Hero() {
    const hero = document.querySelector('.hero')

    const left = hero.querySelector('.left')
    const right = hero.querySelector('.right')

    const bannerList = hero.querySelector('.hero--banner-images-list')
    const itemsList = hero.querySelector('.hero--banner-text-list')

    const banners = bannerList.querySelectorAll('li')
    const items = itemsList.querySelectorAll('.hero--banner-list-item')

    const current = hero.querySelector('.hero--slider-pointer-current')

    let counter = 0

    right.addEventListener('click', () => {
        if (counter === 2) {
            counter = 0
            for (let i = 0; i < banners.length; i++){
                banners[i].style.transform = `translateX(-${bannerList.clientWidth * counter}px)`
                items.forEach(item => item.classList.add('hidden'))
                items[counter].classList.remove('hidden')
            }
            return
        }
        counter++
        for (let i = 0; i < banners.length; i++){
            banners[i].style.transform = `translateX(-${bannerList.clientWidth * counter}px)`
            items.forEach(item => item.classList.add('hidden'))
            items[counter].classList.remove('hidden')
        }
        
    })

    left.addEventListener('click', () => {
        if (counter === 0) {
            counter = 2
            for (let i = 0; i < banners.length; i++){
                banners[i].style.transform = `translateX(-${bannerList.clientWidth * counter}px)`
                items.forEach(item => item.classList.add('hidden'))
                items[counter].classList.remove('hidden')
            }
            return
        }
        counter--
        for (let i = 0; i < banners.length; i++){
            banners[i].style.transform = `translateX(-${bannerList.clientWidth * counter}px)`
            items.forEach(item => item.classList.add('hidden'))
            items[counter].classList.remove('hidden')
        }
    })
}