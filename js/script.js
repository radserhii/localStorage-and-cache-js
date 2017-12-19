
function saveTextToLocalStorage (el) {
    el.addEventListener('keydown', function(e) {
       setTimeout(function() {
            localStorage.setItem('text', el.value);
       }, 1000)
    });
}

function getTextFromStorage (el) {
    el.value = localStorage.getItem('text');
}

function outputTextFromStorage (el) {
    el.innerText = localStorage.getItem('text');
}