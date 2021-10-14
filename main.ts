let 燈號 = 0
let 暫存 = 10
for (let index = 0; index < 25; index++) {
    燈號 += 1
    if (燈號 < 6) {
        led.plotBrightness(燈號 - 1, 0, 255)
    } else if (燈號 < 9) {
        led.plotBrightness(4, 燈號 - 5, 255)
    } else if (燈號 < 14) {
        暫存 += -1
        led.plotBrightness(燈號 - 暫存, 4, 255)
    } else if (燈號 < 17) {
    	
    } else {
    	
    }
    basic.pause(500)
}
basic.forever(function () {
	
})
