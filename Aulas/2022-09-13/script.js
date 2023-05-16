const arr = ['item 1', 'item 2', 'item 3'];

function list2 (){
    console.time('test');
    const list2 = '<ul><li>' + arr.join('</li><li>') + '</li></ul>';
    console.log(list2);
    console.timeEnd('test');
}

list2();
