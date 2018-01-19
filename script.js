

var h1 = document.getElementById('center-div');
h1.innerText = "Hi,";

var arr =["Hi,", "I'm Ayush", "Welcome to my website!"];
console.log(arr.length);
var init = 0;

function writer(i){
    console.log("starting write!");
    if(i<arr.length){
        h1.innerText = arr[i];
        unfade(h1, function(result){
            console.log("called back;")
            writer(++i);
        });
    }
}
writer(init);

var op = 0.01;  // initial opacity
function unfade(element,callback) {
        element.style.opacity = 0;
        element.style.display = 'block';
        var timer = setInterval(function () {
            if (op >= 1){
                clearInterval(timer);
                fade(h1, function cb(value){
                    callback('done');
                });
            }
            element.style.opacity = op;
            element.style.filter.opacity = op * 100 ;
            op += op * 0.08;
        }, 50);
}
//unfade(h1, function(result){
//     console.log("called back!")
// });

function fade(element,callback) {
    var timer = setInterval(function () {
        if (op <= 0.04){
            clearInterval(timer);
            element.style.display = 'none';
            op=0.01;
            callback('done');
        }
        element.style.opacity = op;
        element.style.filter.opacity = op * 100;
        op -= op * 0.08;
    }, 50);
}
