var lastScrollTop; // This Varibale will store the top position 
var show;

if (typeof window !== "undefined") {
    window.addEventListener('scroll', function () {
        //on every scroll this funtion will be called 
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        //This line will get the location on scroll
        if (scrollTop > lastScrollTop) { //if it will be greater than the previous
            show = false;
        } else {
            show = true;
        }
        lastScrollTop = scrollTop; //New Position Stored 
    });
} 