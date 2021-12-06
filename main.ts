radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    strip.clear()
    strip.show()
    basic.pause(100)
    if (receivedNumber == 1) {
        doONE()
        strip.show()
        basic.pause(100)
    } else if (receivedNumber == 2) {
        doONE2()
        strip.show()
        basic.pause(100)
    } else if (receivedNumber == 3) {
        doONE3()
        strip.show()
        basic.pause(100)
    } else {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    if (counter >= 0) {
        counter = counter - 1
    }
    radio.sendNumber(counter)
})
function doONE2 () {
    strip.setMatrixColor(2, 2, neopixel.colors(NeoPixelColors.Red))
}
input.onButtonPressed(Button.AB, function () {
    counter = 0
    radio.sendNumber(counter)
})
input.onButtonPressed(Button.B, function () {
    counter = counter + 1
    radio.sendNumber(counter)
})
function doONE3 () {
    strip.setMatrixColor(2, 2, neopixel.colors(NeoPixelColors.Red))
}
function doONE () {
    strip.setMatrixColor(2, 2, neopixel.colors(NeoPixelColors.Red))
}
let counter = 0
let strip: neopixel.Strip = null
radio.setGroup(32)
strip = neopixel.create(DigitalPin.P13, 25, NeoPixelMode.RGB)
strip = neopixel.create(DigitalPin.P14, 25, NeoPixelMode.RGB)
strip = neopixel.create(DigitalPin.P15, 25, NeoPixelMode.RGB)
strip.setMatrixWidth(5)
strip.setBrightness(30)
