

var h1 = document.getElementById('center-div');
h1.innerText = "Hi!";
console.log("hello world!");

function test(item){
    console.log(item);
}
test(h1);

function unfade(element) {
    var op = 0.1;  // initial opacity
    console.log("unfading");
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
            fade(h1);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 50);
}
unfade(h1);

async function fade(element) {
    console.log("waited!")
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}
