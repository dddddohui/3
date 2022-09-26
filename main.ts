let 앞뒤 = 0
let 좌우 = 0
let 민감도 = 0
basic.forever(function () {
    basic.clearScreen()
    앞뒤 = input.rotation(Rotation.Pitch)
    좌우 = input.rotation(Rotation.Roll)
    민감도 = 50
    led.plot(2 - 좌우 / 민감도, 2 - 앞뒤 / 민감도)
})
