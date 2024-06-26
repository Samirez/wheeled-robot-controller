gamerbit.onEvent(GamerBitPin.P16, GamerBitEvent.Down, function () {
    while (gamerbit.isPressed(GamerBitPin.P16)) {
        music.play(music.stringPlayable("C5 A - F - E D C ", 180), music.PlaybackMode.UntilDone)
    }
})
radio.setGroup(2)
basic.forever(function () {
    if (gamerbit.isPressed(GamerBitPin.P16)) {
        if (gamerbit.isPressed(GamerBitPin.P0)) {
            radio.sendNumber(0)
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
        } else if (gamerbit.isPressed(GamerBitPin.P2)) {
            radio.sendNumber(1)
            basic.showLeds(`
                . # # # #
                . . . # #
                . . # . #
                . # . . #
                . # . . .
                `)
        } else if (gamerbit.isPressed(GamerBitPin.P8)) {
            radio.sendNumber(2)
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
        } else if (gamerbit.isPressed(GamerBitPin.P1)) {
            radio.sendNumber(3)
            basic.showLeds(`
                # # # # .
                # # . . .
                # . # . .
                # . . # .
                . . . # .
                `)
        }
    } else if (gamerbit.isPressed(GamerBitPin.P12)) {
        radio.sendNumber(4)
        music.play(music.createSoundExpression(
        WaveShape.Sine,
        5000,
        0,
        255,
        0,
        2000,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
    }
    basic.clearScreen()
})
