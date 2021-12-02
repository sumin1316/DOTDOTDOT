function doONE2 () {
    strip.setMatrixColor(2, 2, neopixel.colors(NeoPixelColors.Red))
}
function doSomething (num: number) {
    if (num == 1) {
        doONE()
    } else if (num == 2) {
        doONE()
    } else if (num == 3) {
        doONE()
    } else {
    	
    }
}
function doONE3 () {
    strip.setMatrixColor(2, 2, neopixel.colors(NeoPixelColors.Red))
}
function doONE () {
    strip.setMatrixColor(2, 2, neopixel.colors(NeoPixelColors.Red))
}
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P16, 25, NeoPixelMode.RGB)
strip.setMatrixWidth(5)
strip.setBrightness(30)
basic.forever(function () {
    strip.clear()
    doSomething(3)
    strip.show()
    basic.pause(100)
})
