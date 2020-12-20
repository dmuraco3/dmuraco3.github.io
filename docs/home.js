function fadeIn(element) { // this function takes in the element as an argument and changes the style of the element to fade in
    element.style.opacity = "1";
    element.style.transition = "all ease-in 1s";
}

function load() { //this function runs when the whole page loads and is meant to fade in the page elements
    var element = document.getElementById("container1");
    fadeIn(element);
    setTimeout(function(){
        var element = document.getElementById("container2");
        fadeIn(element);

    }, 1000);
};

function load_latest_project() {

    if((window.location.href).includes("127.0.0.1")) {
        var element = document.getElementById("screen");
        element.innerHTML = '<iframe src="http://127.0.0.1:5500/docs/contact/index.html" frameborder="0" width="100%" height="100%"></iframe>'
    };

    if((window.location.href).includes("dmuraco3.github.io")) {
        var element = document.getElementById("screen");
        element.innerHTML = '<iframe src="https://dmuraco3.github.io/projects/index.html" frameborder="0" width="100%" height="100%"></iframe>'
    }
    
};

window.addEventListener("load", function(){
    load();
    load_latest_project();
});