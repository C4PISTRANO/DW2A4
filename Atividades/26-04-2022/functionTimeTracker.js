
/*var arr = ['item 1' , 'item 2','item 3','item 4'];

(function timeTracker(){
    console.time("MyTimer1");
    console.log('<ul>')
    for (let index = 0; index < arr.length; index++) {
        console.log(`<li>${arr[index]}</li>`);
    }
    console.log('</ul>')
    for(x=50000; x>0; x --){}
    console.timeEnd("MyTimer1")
})();

var arr2 = ['item 1' , 'item 2','item 3','item 4'];

(function timeTracker2(){
    console.time("MyTimer2");
    var list = '\n\n<ul>\n<li>' + arr2.join('</li>\n<li>') + '</li>\n</ul>'
    console.log(list)
    console.timeEnd("MyTimer2")
})();*/


const arr = [1, 2, 3, 4];

(function timeTracker(){
    console.time("MyTimer1");
    let sum = arr.reduce(function(a,b){
        return a + b;
    });
    console.log(sum);
    console.timeEnd("MyTimer1")
})();


(function timeTracker2(){
    console.time("MyTimer2");
    let sum = arr.reduce((a,b) =>
     a + b
);
    console.log(sum);
    console.timeEnd("MyTimer2")
})();