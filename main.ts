input.onButtonPressed(Button.A, function () {
    Variable_crono += 1
})
input.onGesture(Gesture.Shake, function () {
    Variable_passos += 1
    basic.showString("" + (Variable_passos))
})
input.onButtonPressed(Button.AB, function () {
    Variable_passos = 0
    Variable_Temps = 0
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Variable_passos = 0
    Variable_passos = 0
    basic.showString("" + Variable_Temps)
    basic.pause(1000)
    basic.clearScreen()
})
let Variable_crono = 0
let Variable_Temps = 0
let Variable_passos = 0
Variable_passos = 0
Variable_Temps = 0
if (Variable_crono == 1) {
    Variable_Temps += 1
    basic.pause(1000)
}
basic.forever(function () {
	
})
