let 燈號 = 0
let X = 0
let Y = 0
let 行數 = 0
input.onButtonPressed(Button.A, function () {
    燈號 = 0
    for (let index = 0; index < 25; index++) {
        燈號 += 1
        basic.pause(50)
        亮起()
        if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
            break;
        }
    }
    basic.pause(50)
    校正()
})
function 切換 () {
    led.setBrightness(255)
    led.toggle(X, Y)
}
input.onButtonPressed(Button.AB, function () {
    for (let 行數 = 0; 行數 <= 4; 行數++) {
        X = 行數
        Y = 0
        for (let index = 0; index < 行數 + 1; index++) {
            切換()
            X += -1
            Y += 1
            basic.pause(50)
        }
        basic.pause(50)
    }
    行數 = 4
    for (let index = 0; index < 4; index++) {
        行數 += 1
        X = 4
        Y = 行數 - 4
        for (let index = 0; index < 9 - 行數; index++) {
            切換()
            X += -1
            Y += 1
            basic.pause(50)
        }
        basic.pause(50)
    }
    校正()
})
function 亮起 () {
    if (燈號 < 6) {
        X = 燈號 - 1
        Y = 0
    } else if (燈號 < 9) {
        X = 4
        Y = 燈號 - 5
    } else if (燈號 < 14) {
        X = 13 - 燈號
        Y = 4
    } else if (燈號 < 16) {
        X = 0
        Y = 17 - 燈號
    } else if (燈號 < 20) {
        X = 燈號 - 16
        Y = 1
    } else if (燈號 == 20) {
        X = 3
        Y = 2
    } else if (燈號 < 24) {
        X = 24 - 燈號
        Y = 3
    } else {
        X = 燈號 - 23
        Y = 2
    }
    切換()
}
input.onButtonPressed(Button.B, function () {
    燈號 = 25
    for (let index = 0; index < 25; index++) {
        亮起()
        燈號 += -1
        basic.pause(50)
        if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
            break;
        }
    }
    校正()
})
function 校正 () {
    if (led.point(X, Y) == (led.brightness() == 0)) {
        basic.clearScreen()
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
}
function 燈漸漸滅 (X: number, Y: number) {
    for (let index = 0; index < 100; index++) {
        led.plotBrightness(X, Y, led.brightness() - 2.55)
        basic.pause(10)
    }
}
basic.forever(function () {
	
})
