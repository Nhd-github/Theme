let $ = document
const colorsBoxText = $.querySelectorAll('.color-box-text')

const HTMLElem = $.getElementsByTagName('html')

colorsBoxText.forEach(function (colorText) {
    colorText.addEventListener('click', function (event) {
        
console.log(HTMLElem)
        let name = event.target.getAttribute('name')
        console.log(HTMLElem)
        HTMLElem[0].dataTheme = `themes-${name}`
        HTMLElem[0].setAttribute('data-theme', `themes-${name}`) 
    })

})



