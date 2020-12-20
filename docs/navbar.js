pages = ['home', 'projects', 'about', 'contact', 'blog']


function addNavBar() { // this function adds the navbar to the page
     
    document.getElementById("nav").innerHTML += '<a class="blog" id="button blog" href="blog/index.html">BLOG</a>';;
    document.getElementById("nav").innerHTML += '<a class="contact" id="button contact" href="contact/index.html">CONTACT</a>';
    document.getElementById("nav").innerHTML += '<a class="about" id="button about" href="about/index.html">ABOUT</a>';
    document.getElementById("nav").innerHTML += '<a class="projects" id="button projects" href="projects/index.html">PROJECTS</a>';
    document.getElementById("nav").innerHTML += '<a class="home" id="button home" href="index.html">HOME</a>';
    document.getElementById("nav").innerHTML += '<div class="logo"><a href="#">Dylan Muraco</a></div>';
    
    if(window.location.href == "http://127.0.0.1:5500/docs/index.html") { // for local development
        document.getElementById("button home").id = "active";
    }
    if(window.location.href == "https://dmuraco3.github.io/") { // for public view
        document.getElementById("button home").id = "active";
    }
    getUrl()
}

function getUrl() {
    if((window.location.href).includes("blog")) {
        document.getElementById("button blog").id = "active";
    }
}


function test() {
   if(window.location.href == "http://127.0.0.1:5500/docs/index.html" || window.location.href == "https://dmuraco3.github.io/") {
    document.getElementById("nav").innerHTML += '<a class="blog" id="button" href="blog/index.html">BLOG</a>';;
    document.getElementById("nav").innerHTML += '<a class="contact" id="button" href="contact/index.html">CONTACT</a>';
    document.getElementById("nav").innerHTML += '<a class="about" id="button" href="about/index.html">ABOUT</a>';
    document.getElementById("nav").innerHTML += '<a class="projects" id="button" href="projects/index.html">PROJECTS</a>';
    document.getElementById("nav").innerHTML += '<a class="home" id="button" href="index.html">HOME</a>';
    document.getElementById("nav").innerHTML += '<div class="logo"><a href="#">Dylan Muraco</a></div>';
    document.getElementsByClassName("home")[0].id = "active"
   }
   else {
    document.getElementById("nav").innerHTML += '<a class="blog" id="button blog" href="../blog/index.html">BLOG</a>';;
    document.getElementById("nav").innerHTML += '<a class="contact" id="button contact" href="../contact/index.html">CONTACT</a>';
    document.getElementById("nav").innerHTML += '<a class="about" id="button about" href="../about/index.html">ABOUT</a>';
    document.getElementById("nav").innerHTML += '<a class="projects" id="button projects" href="../projects/index.html">PROJECTS</a>';
    document.getElementById("nav").innerHTML += '<a class="home" id="button home" href="../index.html">HOME</a>';
    document.getElementById("nav").innerHTML += '<div class="logo"><a href="#">Dylan Muraco</a></div>';
   }

   for(page in pages) {
       if((window.location.href).includes(pages[page])) {
           //document.getElementById("button " + pages[page]).id = "active";
           document.getElementsByClassName(pages[page])[0].id = "active";
       }
   }
}

window.addEventListener("DOMContentLoaded", function(){
    //addNavBar()
    test();
});