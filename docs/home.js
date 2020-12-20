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
