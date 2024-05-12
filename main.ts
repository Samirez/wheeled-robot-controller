gamerbit.onEvent(GamerBitPin.P12, GamerBitEvent.Down, function () {
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
})
radio.setGroup(2)
basic.forever(function () {
    if (gamerbit.isPressed(GamerBitPin.P16)) {
        music.play(music.stringPlayable("C5 A B - A C5 F D ", 185), music.PlaybackMode.UntilDone)
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
    }
    basic.clearScreen()
})
