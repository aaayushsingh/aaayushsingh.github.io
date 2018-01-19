

var h1 = document.getElementById('center-div');
h1.innerText = "Hi!";
console.log("hello world!");

async function test(item){
    return new Promise((resolve,reject)=>{
        for(i=0;i<=3000000;i++){
            if(i==3000000) var flag;
        }
        resolve(flag);
    });
}
test(h1).then(result=>{
    console.log('timid');
});
var op = 0.1;  // initial opacity
function unfade(element) {
        console.log("unfading");
        element.style.opacity = op;
        element.style.display = 'block';
        var timer = setInterval(function () {
            if (op >= 1){
                clearInterval(timer);
                fade(h1);
            }
            element.style.opacity = op;
            element.style.filter.opacity = op * 100 ;
            op += op * 0.04;
        }, 50);
}
unfade(h1).then((result)=>{
    console.log("timing!")
});

function fade(element) {
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter.opacity = op * 100;
        op -= op * 0.1;
    }, 50);
}
