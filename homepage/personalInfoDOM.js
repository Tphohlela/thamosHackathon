var a = document.querySelector(".a");
var b = document.querySelector(".b");
var y = document.querySelector(".y");

var store ={};

if (localStorage['s']) {

    store = JSON.parse(localStorage['s']);

}

function track(){

    var name = a.value;
    var date = y.value;
    //var cert = c.value;

    if(name){
        store[name] = 0;
        localStorage['s'] = JSON.stringify(store);
    }


if (localStorage['s']) {

    store = JSON.parse(localStorage['s']);

}


}

b.addEventListener('click',track);
