radio.onReceivedNumber(function (receivedNumber) {
    num = receivedNumber
})
let num = 0
radio.setGroup(33)
num = 0
RingbitCar.init_wheel(AnalogPin.P0, AnalogPin.P1)
basic.showIcon(IconNames.SmallSquare)
basic.forever(function () {
    if (num == 1) {
        RingbitCar.forward()
    } else if (num == 2) {
        RingbitCar.turnleft()
    } else if (num == 3) {
        RingbitCar.turnright()
    } else {
        RingbitCar.brake()
        num = 0
    }
})
