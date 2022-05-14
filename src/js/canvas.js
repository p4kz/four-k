
let screen = document.querySelector('canvas')
let pen = screen.getContext('2d')


// head square
pen.fillStyle = 'darkgreen'
pen.fillRect(0, 0, 350, 300)

// eyes left square
pen.fillStyle = '#000'
pen.fillRect(60, 60, 90, 90)

// eyes right square
pen.fillStyle = '#000'
pen.fillRect(220, 60, 90, 90)

// nose rect
pen.fillStyle = '#000'
pen.fillRect(150, 150, 70, 100)

// mouth left rect
pen.fillStyle = '#000'
pen.fillRect(110, 190, 40, 100)

// mouth right rect
pen.fillStyle = '#000'
pen.fillRect(220, 190, 40, 100)