let numBtn = Array.from(document.querySelectorAll('.numsbtn'))
let operator = Array.from(document.querySelectorAll('.operator'))
let clrBtn = document.querySelector('.clrBtn')
let delBtn = document.querySelector('.delBtn')
let scrDigit = document.querySelector('.scrDigit')
let dot = document.querySelector('.dot')
let upDigit = document.querySelector('.upDigit')
let equal = document.querySelector('.equal')
let signP = document.querySelector('.signP')

let oper = '';
let numValues = [];
upDigit.textContent = '';

numBtn.forEach(numBtn => {
    numBtn.addEventListener('click', function () {
        scrDigit.textContent += numBtn.textContent
    })
})

delBtn.addEventListener('click', function () {
    let digitLength = scrDigit.textContent
    scrDigit.textContent.substring(0, digitLength.length - 1)
    scrDigit.textContent = scrDigit.textContent.substring(0, digitLength.length - 1)
})

clrBtn.addEventListener('click', function () {
    scrDigit.textContent = ''
    upDigit.textContent = ''
    signP.textContent = ''
    numValues = []

})

dot.addEventListener('click', function () {
    if (scrDigit.textContent.includes('.') === false) {
        scrDigit.textContent += '.'
    } else {

    }
})

operator.forEach(operator => {
    operator.addEventListener('click', function () {
        oper = operator.getAttribute('x')
        let sign = operator.textContent

        if (numValues[0] == null) {

            upDigit.textContent = scrDigit.textContent
            signP.textContent = sign
            numValues[0] = Number(upDigit.textContent)
            scrDigit.textContent = ''
        } else {

            signP.textContent = sign
            numValues[numValues.length] = Number(scrDigit.textContent)
            scrDigit.textContent = ''
            upDigit.textContent = numValues[numValues.length - 1]
        }
        console.log(numValues[0], numValues[1])
    })
})


equal.addEventListener('click', function () {
    numValues
    numValues[numValues.length] = Number(scrDigit.textContent)
    if (oper == '+') {
        let result = numValues[0] + numValues[1]
        scrDigit.textContent = result
    } else if (oper == '-') {
        let result = numValues[0] - numValues[1]
        scrDigit.textContent = result
    } else if (oper == '*') {
        let result = numValues[0] * numValues[1]
        scrDigit.textContent = result
    } else if (oper == '/') {
        let result = numValues[0] / numValues[1]
        scrDigit.textContent = result
    }

    upDigit.textContent = ""
    signP.textContent = ''
})
