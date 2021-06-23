var a = document.querySelector(".a");
var b = document.querySelector(".b");
var c = document.querySelector(".c")

var store ={};

if (localStorage['s']) {

    store = JSON.parse(localStorage['s']);

}

function track(){

    var name = a.value;
    var cert = c.value;

    if(name){
        store[name] = cert;
        localStorage['s'] = JSON.stringify(store);
    }


if (localStorage['s']) {

    store = JSON.parse(localStorage['s']);

}


}

b.addEventListener('click',track);
