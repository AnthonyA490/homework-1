input.onButtonPressed(Button.A, function () {
    num_ += 1
    basic.showNumber(num_)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(num_)
})
input.onButtonPressed(Button.B, function () {
    num_ += -2
    basic.showNumber(0)
})
let num_ = 0
basic.showIcon(IconNames.Angry)
basic.showNumber(0)
basic.forever(function () {
	
})
