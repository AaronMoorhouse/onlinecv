var toggle = $('.c-hamburger');
var freeze = $('#freeze');

$(document).ready(function() {

    toggle.click(function() {
        if(!toggle.hasClass('is-active')) {
            toggle.addClass('is-active');
            freeze.css('visibility', 'visible');
        }
        else {
            hideMenu();
        }
    });
});

function hideMenu() {
    toggle.removeClass('is-active');
    freeze.css('visibility', 'hidden');
}
