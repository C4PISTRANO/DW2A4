const arr = ['item 1', 'item 2', 'item 3'];

function list() {
    console.time('test'); 
    let list ='<ul>';
    for (let item of arr) list += '<li>' + item + '</li>';
    list += '</ul>';
    console.log(list);
    console.timeEnd('test');
}

list();
