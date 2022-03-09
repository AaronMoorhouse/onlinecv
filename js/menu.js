var toggle = document.getElementsByClassName("c-hamburger")[0];
var freeze = document.getElementById("freeze");

function showMenu() {
    freeze.style.visibility = "visible";
}

function hideMenu() {
    freeze.style.visibility = "hidden";
    toggle.classList.remove("is-active");
}

(function() {
    console.log("hi");
    "use strict";
    var visible = false;

    toggleHandler(toggle);

    function toggleHandler(toggle) {
        toggle.addEventListener("click", function(e) {
            e.preventDefault();
            
            if(this.classList.contains("is-active")) {
                this.classList.remove("is-active");
            }
            else {
                this.classList.add("is-active");
            }
            
            if(!visible) {
                visible = true;
                showMenu();
            }
            else {
                visible = false;
                hideMenu();
            }
        });
    }
})();