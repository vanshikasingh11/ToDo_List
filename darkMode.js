function toggleDarkMode() {
    let curr = document.querySelector(".wrapper");
    let cat = document.querySelectorAll(".category");
    let db = document.querySelector(".darkBtn");
    if(curr.classList.contains("darkModeClass")) {
        db.innerText = "Dark Mode";
        db.classList.remove("darkModeClass");
        curr.classList.remove("darkModeClass");
        for(let i = 0; i < cat.length; i++) {
            cat[i].classList.remove("darkModeClass");
            cat[i].classList.remove("darkModeClassShadow");
        }
        
    }
    else {
        db.innerText = "Light Mode";
        db.classList.add("darkModeClass");
        db.classList.add("darkModeClassShadow");
        curr.classList.add("darkModeClass");
        for(let i = 0; i < cat.length; i++) {
            cat[i].classList.add("darkModeClass");
            cat[i].classList.add("darkModeClassShadow");
        }
    }
}