
var menuLeft = document.getElementById('cbp-spmenu-s1'),
body = document.body;

//when click on main body content
main.onclick = function () {
    if ($("#menuLink").hasClass("active"))
        slideMenu();
};


//when click on icon
menuLink.onclick = function () {
    slideMenu();
    event.stopPropagation();
};

function disableOther(button) {
    if (button !== 'menuLink') {
        classie.toggle(menuLink, 'disabled');
    }
}

//Toggle side menu
function slideMenu() {
    classie.toggle(menuLink, 'active');
    classie.toggle(body, 'cbp-spmenu-push-toright');
    classie.toggle(menuLeft, 'cbp-spmenu-open');
    disableOther('menuLink');
}



//parallex background start
$.stellar({
    horizontalScrolling: false,
    verticalOffset: 150,
    horizontalOffset: 0
});


$(function () {
    $('.banner').unslider({
        speed: 500,               //  The speed to animate each slide (in milliseconds)
        delay:3500,              //  The delay between slide animations (in milliseconds)
        complete: function () { },  //  A function that gets called after every slide animation
        keys: true,               //  Enable keyboard (left, right) arrow shortcuts
        dots: true,               //  Display dot navigation
        fluid: true              //  Support responsive design. May break non-responsive designs
    });
});

