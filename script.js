let menuVisible = false;
//Función que oculta o muestra el menú//
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    //Ocultar el menu una vez que se seleccione una opción//
        document.getElementById("nav").classList ="";
        menuVisible = false;
}

//Funcion que aplica la animaciones de las habilidades//
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("testing");
        habilidades[4].classList.add("comunicacion");
        habilidades[5].classList.add("creatividad");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("enfoque");

    }
}

//detecta el scrolling para aplicar la animacion de la barra de habilidades//
window.onscroll = function(){
    efectoHabilidades();
}