const body = document.body
const shapeContainer = $('#shape-container')
const forms = $('#forms')
const MAX = 600

class Shapes {
    constructor(x, y) {
        this.shape = $("<div class='shape'></div>")
        this.shape.css({
            'left': `${x}px`,
            'top': `${y}px`
        })
    }
}

class Square extends Shapes {
    constructor(x, y, sqrSide) {
        super(x, y);
        this.shape.addClass('square');
        this.shape.css({
            'height': `${sqrSide}px`,
            'width': `${sqrSide}px`,
            'display': 'inherit'
        })
        shapeContainer.append(this.shape);
    }
}

class Rectangle extends Shapes {
    constructor(x, y, rctHeight, rctWidth) {
        super(x, y)
        this.shape.addClass('rectangle')
        this.shape.css({
            'height': `${rctHeight}px`,
            'width': `${rctWidth}px`,
            'display': 'inherit'
        })
        shapeContainer.append(this.shape)
    }
}

class Circle extends Shapes {
    constructor(x, y, cirRadius) {
        super(x, y)
        this.shape.addClass('circle')
        this.shape.css({
            'height': `${cirRadius * 2}px`, // this should be multiplied by 2 because this is actually the diameter.
            'width': `${cirRadius * 2}px`, // this should be multiplied by 2 because this is actually the diameter.
            'display': 'inherit'
        })
        shapeContainer.append(this.shape)
    }
}

class Triangle extends Shapes {
    constructor(x, y, triHeight) {
        super(x, y)
        this.shape.addClass('triangle')
        this.shape.css({
            'border-right': `${triHeight}px solid transparent`,
            'border-bottom': `${triHeight}px solid yellow`,
            'display': 'inherit'
        })
        shapeContainer.append(this.shape)
    }
}

const sqrBtn = $('#sqr-btn')
sqrBtn.click(() => {
    let sqrSide = Number($('#sqr-side').val())
    let xVal = randomVal(0, MAX - sqrSide)
    let yVal = randomVal(0, MAX - sqrSide)
    if (sqrSide <= 0) {
        alert('Please put a positive number.')
    } else {
        let sqr = new Square(xVal, yVal, sqrSide)
        console.log('sqr button clicked')
        console.log(sqr)
    }

})

const rctBtn = $('#rct-btn')
rctBtn.click(() => {
    let rctHeight = Number($('#rct-height').val())
    let rctWidth = Number($('#rct-width').val())
    let xVal = randomVal(0, MAX - rctWidth)
    let yVal = randomVal(0, MAX - rctHeight)
    if (rctHeight === rctWidth) {
        alert('This is a sqaure!')
    } else if (rctHeight <= 0 || rctWidth <= 0) {
        alert('Please put a positive number.')
    } else {
        let rct = new Rectangle(xVal, yVal, rctHeight, rctWidth)
        console.log('rct button clicked')
        console.log(rct)
    }
})

const cirBtn = $('#cir-btn')
cirBtn.click(() => {
    let cirRadius = Number($('#cir-rad').val())
    let xVal = randomVal(0, MAX - cirRadius * 2)
    let yVal = randomVal(0, MAX - cirRadius * 2)
    if (cirRadius <= 0) {
        alert('Please put a positive number.')
    } else {
        let cir = new Circle(xVal, yVal, cirRadius)
        console.log('cir button clicked')
        console.log(cir)
    }
})

const triBtn = $('#tri-btn')
triBtn.click(() => {
    let triHeight = Number($('#tri-height').val())
    let xVal = randomVal(0, MAX - triHeight)
    let yVal = randomVal(0, MAX - triHeight)
    if (triHeight <= 0) {
        alert('Please put a positive number.')
    } else {
        let tri = new Triangle(xVal, yVal, triHeight)
        console.log('tri button clicked')
        console.log(tri)
    }
})

function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min));
}

