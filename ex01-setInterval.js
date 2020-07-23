var i = 0
var t = setInterval(function() {
    console.log('i =', 1)
    i++
    if (i === 3) {
        clearInterval(t)
    }
}, 500)