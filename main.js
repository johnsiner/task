/*eslint-env browser*/

for (let i=0; i<9; i++) {
    window["menuDropdown" +i]= function() {
        let menuToggle = document.getElementById("menu-toggle-"+i);
        if (menuToggle.className === "menu-dropdown-"+i) {
            menuToggle.className += " responsive";
        } else {
            menuToggle.className = "menu-dropdown-"+i;
        }

        let arrowRotate = document.getElementById("arrow-rotate-"+i);
        if (arrowRotate.className === "arrow-"+i) {
            arrowRotate.className += " responsive";
        } else {
            arrowRotate.className = "arrow-"+i;
        }
    }
}
