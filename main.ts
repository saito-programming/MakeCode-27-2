function モーター2 (p16: number, p0: number) {
    pins.analogWritePin(AnalogPin.P16, p16)
    pins.analogWritePin(AnalogPin.P0, p0)
}
function 後進 () {
    モーター1(0, 255)
    モーター2(255, 0)
}
input.onButtonPressed(Button.A, function () {
    前進()
})
function 前進 () {
    モーター1(255, 0)
    モーター2(0, 255)
}
input.onButtonPressed(Button.AB, function () {
    停止()
})
function モーター1 (p12: number, p8: number) {
    pins.analogWritePin(AnalogPin.P12, p12)
    pins.analogWritePin(AnalogPin.P8, p8)
}
input.onButtonPressed(Button.B, function () {
    後進()
})
function 停止 () {
    モーター1(0, 0)
    モーター2(0, 0)
}
停止()
basic.showIcon(IconNames.Happy)
