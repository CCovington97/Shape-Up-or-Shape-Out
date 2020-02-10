const body = document.body
const shapes = $('#shapes')
const forms = $('#forms')
const sqrBtn = $('#sqr-btn') 
const rctBtn = $('#rct-btn')
const cirBtn = $('#cir-btn')
const triBtn = $('#tri-btn')
const MAX = 600
// const square = $('#square')
// const rectangle = $('#rectangle')
// const circle = $('#circle')
// const triangle = $('#triangle-bottomleft')

sqrBtn.click(() => {
    let sqrSide = $('#sqr-side').val()
    console.log('sqr side', sqrSide)
    // $(square).css({
    //     'height': `${sqrSide}em`,
    //     'width': `${sqrSide}em`,
    //     'display': 'inherit'
    // })
})

rctBtn.click(() => {
    let rctHeight = $('#rct-height').val()
    console.log('rct height', rctHeight)
    let rctWidth = $('#rct-width').val()
    console.log('rct width', rctWidth)
    // $(rectangle).css({
    //     'height': `${rctHeight}em`,
    //     'width': `${rctWidth}em`,
    //     'display': 'inherit'
    // })
})

cirBtn.click(() => {
    let cirRadius = $('#cir-rad').val()
    console.log('cir radius', cirRadius)
    // $(circle).css({
    //     'height': `${cirRadius * 2}em`,
    //     'width': `${cirRadius * 2}em`,
    //     'display': 'inherit'
    // })
})

triBtn.click(() => {
    let triHeight = $('#tri-height').val()
    console.log('tri height', triHeight)
    // $(triangle).css({
    //     'border-right': `${triHeight}em solid transparent`,
    //     'border-bottom': `${triHeight}em solid yellow`,
    //     'display': 'inherit'
    // })
})

class Shapes {
    constructor(x, y, param) {
        this.param = param
        this.div.style.left = `${x}px`
        this.div.style.top = `${y}px`
    }
}