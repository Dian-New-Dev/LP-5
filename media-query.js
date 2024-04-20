const main = document.querySelector('main')
console.log(main)

window.addEventListener('resize', function () {
    let windowWidth = window.innerWidth;
    applyPadding(windowWidth)
})

function applyPadding(larguraTela) {
    if (larguraTela > 1399) {
        let paddingValue = '0px ' + (larguraTela - 1400) + 'px'; // Adding parentheses for clarity
        main.style.padding = paddingValue;
    }
}