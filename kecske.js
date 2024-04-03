const TOMB = []
const KEPEK = document.querySelectorAll("img")
for (let index = 0; index < KEPEK.length; index++) {
    KEPEK[index].addEventListener("click", function(event){
        TOMB.push(event.target.src)
        console.log(TOMB)
        /*if (KEPEK[index].parentNode.parentNode.id === "bal") {
            document.getElementById("csonak").prepend(KEPEK[index]);
          }*/
    })
}

for (let index = 0; index < KEPEK.length; index++) {
    KEPEK[index].addEventListener("mouseenter", function(){
        KEPEK[index].classList.add("kiemel")
    })
    
}

for (let index = 0; index < KEPEK.length; index++) {
    KEPEK[index].addEventListener("mouseleave", function(){
        KEPEK[index].classList.remove("kiemel")
    })
    
}

for (let index = 0; index < KEPEK.length; index++) {
    KEPEK[index].addEventListener("click", function(){
        //KEPEK[index].style.display = "none";
        document.getElementById("csonak").prepend(KEPEK[index]);
    })
}