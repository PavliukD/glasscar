export default function HorisontalScroll() {
    const items = document.querySelectorAll('.horizontal-scroller')

    if (!items) {
        return
    }

    items.forEach(item => {

        item.addEventListener('wheel', function(event) {
            if (event.deltaMode == event.DOM_DELTA_PIXEL) {
            var modifier = 1;
            // иные режимы возможны в Firefox
            } else if (event.deltaMode == event.DOM_DELTA_LINE) {
            var modifier = parseInt(getComputedStyle(this).lineHeight);
            } else if (event.deltaMode == event.DOM_DELTA_PAGE) {
            var modifier = this.clientHeight;
            }
            if (event.deltaY != 0) {
            // замена вертикальной прокрутки горизонтальной
            this.scrollLeft += modifier * event.deltaY;
            event.preventDefault();
            }
        })
    })
}