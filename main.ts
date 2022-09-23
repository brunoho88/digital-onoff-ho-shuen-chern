basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) > 0) {
        pins.analogWritePin(AnalogPin.P12, 627)
    } else {
        pins.analogWritePin(AnalogPin.P12, 0)
    }
})
