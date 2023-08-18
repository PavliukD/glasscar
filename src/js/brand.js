export default function Brands() {
    const base = document.querySelector('.segment--content-list')
    const cathegoriesList = document.querySelector('.segment--cathegories-list')
    const cathegories = cathegoriesList.querySelectorAll('li')
    const massive = [...cathegories]
    console.log(massive)

    const bannersLists = base.querySelectorAll('.segment--brands-list')
    

    const banner = document.querySelector('.segment--brand')
    console.dir(banner.style.backgroundImage)

    let counter = 0
    let cathNumber = 0
    let imagesList = []

    const active = cathegoriesList.querySelector('.active')

    bannersLists.forEach(bannerList => {
                if (bannerList.dataset.class !== active.dataset.class) {
                    return
                }
                const data = [...bannerList.children]
                const imgs = data.map(item => item.firstElementChild.src)
                imagesList = [...imgs]
                banner.style.backgroundImage = `url('${imagesList[0]}')`
            })
    
    cathegories.forEach(cathegory => {
        cathegory.addEventListener('click', () => {
            cathegories.forEach(cath => {
                cath.classList.remove('active')
            })
            cathegory.classList.add('active')
            cathNumber = massive.indexOf(cathegory)
            bannersLists.forEach(bannerList => {
                if (bannerList.dataset.class !== cathegory.dataset.class) {
                    return
                }
                const data = [...bannerList.children]
                const imgs = data.map(item => item.firstElementChild.src)
                imagesList = [...imgs]
                banner.style.backgroundImage = `url('${imagesList[0]}')`
                counter = 0
            })
        })
    })

    

    setInterval(() => {
        if (counter === imagesList.length - 1) {
            counter = 0
            banner.style.backgroundImage = `url('${imagesList[counter]}')`
            return
        }
        counter++
        banner.style.backgroundImage = `url('${imagesList[counter]}')`
    }, 3000)
}