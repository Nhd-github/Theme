let $ = document

const bodyElem = $.getElementById('body')
const colorsBoxBg = $.querySelectorAll('.color-box-background')
const colorsBoxText = $.querySelectorAll('.color-box-text')
const headerElem = $.querySelectorAll('.header')

colorsBoxBg.forEach(function (colorBox) {
    colorBox.addEventListener('click', function (event) {
        let mainColor = event.target.style.backgroundColor
        bodyElem.style.backgroundColor = mainColor
    })
})
colorsBoxText.forEach(function (colorText) {
    colorText.addEventListener('click', function (event) {
        let name = event.target.getAttribute('name')
        let textMainColor = event.target.style.backgroundColor
        bodyElem.className = `themes-${name}`
        bodyElem.style.color = textMainColor
    })

})



