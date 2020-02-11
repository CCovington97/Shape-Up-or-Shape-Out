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

class Shapes {
    constructor(shapeName, x, y, height, area, perimeter) {
        this.shapeName = shapeName
        this.shape = $('<div class="shapes"></div>')
        this.shape.style.left = `${x}px`
        this.shape.style.top = `${y}px`
        this.height = height
        this.area = area
        this.perimeter = perimeter
        let height
    }
}

class Square extends Shapes {
    constructor() {
        super()
    }

}

sqrBtn.click(() => {
    let sqrSide = $('#sqr-side').val()
    console.log('sqr side', sqrSide)
    // $(square).css({
    //     'height': `${sqrSide}em`,
    //     'width': `${sqrSide}em`,
    //     'display': 'inherit'
    // })
})

class Rectangle extends Shapes {
    constructor() {
        super()
    }
}

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
    let xPos = randomVal()
    let yPos = randomVal()
    let cirRadius = $('#cir-rad').val()
    // const newCircle = $('#cir-rad').val()
    // console.log('cir radius', cirRadius)
    // $(circle).css({
    //     'height': `${cirRadius * 2}em`,
    //     'width': `${cirRadius * 2}em`,
    //     'display': 'inherit'
    // })
})
class Circle extends Shapes {
    constructor(shapeName, x, y, height, width, radius, area, perimeter) {
        super(shapeName, x, y, height, area, perimeter);
        this.shapeName = 'Circle';
        this.width = 2 * this.height;
        this.radius = this.height;
        area = Math.PI * this.radius * this.radius;
        this.perimeter = Math.PI * 2 * this.radius;
    }
}

class Triangle extends Shapes {
    constructor() {
        super()
    }
}

triBtn.click(() => {
    let triHeight = $('#tri-height').val()
    console.log('tri height', triHeight)
    // $(triangle).css({
    //     'border-right': `${triHeight}em solid transparent`,
    //     'border-bottom': `${triHeight}em solid yellow`,
    //     'display': 'inherit'
    // })
})

function randomVal() {
    return Math.floor(Math.random() * Math.floor(600))
}