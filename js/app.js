let $ = document
const colorsBoxText = $.querySelectorAll('.color-box-text')

const HTMLElem = $.getElementsByTagName('HTML')

colorsBoxText.forEach(function (colorText) {
    colorText.addEventListener('click', function (event) {
 
        let name = event.target.getAttribute('name')
        let textMainColor = event.target.style.backgroundColor
        HTMLElem[0].className = `themes-${name}`
        HTMLElem[0].style.color = textMainColor
    })

})



