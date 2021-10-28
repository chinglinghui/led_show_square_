function 燈漸滅 () {
	
}
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 25; index++) {
        燈號 += 1
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
    }
    led.setBrightness(255)
    led.toggle(X, Y)
    basic.pause(100)
    for (let index = 0; index < 25; index++) {
        燈號 += -1
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
    }
})
function 燈漸漸滅 (X: number, Y: number) {
    for (let index = 0; index < 100; index++) {
        led.plotBrightness(X, Y, led.brightness() - 2.55)
        basic.pause(10)
    }
}
let Y = 0
let X = 0
let 燈號 = 0
燈號 = 0
basic.forever(function () {
	
})
