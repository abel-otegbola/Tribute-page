let menu = document.querySelectorAll("header nav ul li a");

for(let i=0; i<menu.length; i++) {
    menu[i].onclick = function() {
        for(let x=0; x<menu.length; x++) {
            menu[x].classList.remove("active")
        }
        menu[i].classList.add("active")
    }
}