

var h1 = document.getElementById('center-div');
var footer = document.getElementById('footer-elem');
h1.innerText = "Hi,";

var arr =["Hi,", "I'm Ayush", "Welcome to my website!"];
var dots = ['\uFEFF\uFEFF\uFEFF','.\uFEFF\uFEFF','..\uFEFF\uFEFF','...'];

function loading() {
    var tick = 0;
    console.log('loading: ' + tick);
    var timerFooter = setInterval(function () {
        if(tick>50){
            clearInterval(timerFooter);
        }
        footer.innerText = "loading" + dots[tick++%4];
    }, 600);
}
loading();

//footer.innerText = "loading..";
var init = 0;

function writer(i){
    if(i<arr.length){
        h1.innerText = arr[i];
        unfade(h1, function(result){
            setTimeout(function(){
                writer(++i);
            },1000)

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
                setTimeout(function(){
                    fade(h1, function cb(value){
                        callback('done');
                    });
                },1800)
            }
            element.style.opacity = op;
            element.style.filter.opacity = op * 100 ;
            op += op * 0.1;
        }, 10);
}


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
        op -= op * 0.1;
    }, 10);
}
