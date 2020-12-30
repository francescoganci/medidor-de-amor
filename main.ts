let escolher_aleatório = 0
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(escolher_aleatório)
    if (escolher_aleatório <= 50) {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            . # # # .
            # . . . #
            `)
    } else if (escolher_aleatório > 50) {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    basic.pause(5000)
    basic.clearScreen()
})
basic.forever(function () {
    escolher_aleatório = randint(0, 100)
    basic.pause(5000)
    basic.clearScreen()
})
