input.onButtonPressed(Button.A, function () {
    if (count < 11) {
        count += 1
        mode = count
        if (count == 0) {
            basic.showString("20")
        } else if (count == 1) {
            basic.showString("22")
        } else if (count == 2) {
            basic.showString("24")
        } else if (count == 3) {
            basic.showString("26")
        } else if (count == 4) {
            basic.showString("28")
        } else if (count == 5) {
            basic.showString("28")
        } else if (count == 6) {
            basic.showString("30")
        } else if (count == 7) {
            basic.showString("32")
        } else if (count == 8) {
            basic.showString("34")
        } else if (count == 1) {
            basic.showString("36")
        } else if (count == 9) {
            basic.showString("38")
        } else if (count == 10) {
            basic.showString("40")
        }
    }
})
input.onButtonPressed(Button.B, function () {
    count = 20
    if (mode == 0) {
        basic.showString("20")
    } else if (mode == 1) {
        basic.showString("22")
    } else if (mode == 2) {
        basic.showString("24")
    } else if (mode == 3) {
        basic.showString("26")
    } else if (mode == 4) {
        basic.showString("28")
    } else if (mode == 5) {
        basic.showString("28")
    } else if (mode == 6) {
        basic.showString("30")
    } else if (mode == 7) {
        basic.showString("32")
    } else if (mode == 8) {
        basic.showString("34")
    } else if (mode == 1) {
        basic.showString("36")
    } else if (mode == 9) {
        basic.showString("38")
    } else if (mode >= 10) {
        basic.showString("40")
    }
})
let mode = 0
let count = 0
count = 0
basic.showString("20")
