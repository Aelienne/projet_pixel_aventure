const description = [
   "<strong>Nos compétences/langages</strong><br> Au cours de leur parcours, les membres de l'équipage apprendront à utiliser des technologies puissantes qui les mèneront à maîtriser le développement Web, du back-end au front-end. Afin de pouvoir piloter le vaisseau.",
   "<strong>Formation Human Booster</strong><br>Une épreuve d'endurance pour notre équipage. Une année solaire d’étude et de préparation intensive. Leur tâche inclut la maquettage d’une application, la création d’une interface utilisateur dynamique, la gestion de bases de données, et le développement d’éléments liés à une application de gestion de contenu.",
   "<strong>Présentation du vaisseau DWWM PE9</strong><br>Avant tout nous somme une équipe, qui vient de décoller pour un projet commun qui est le bon déroulement du voyage pour que tout le monde arrive à destination en un seul morceau. Cohésion et esprit d’équipe sont les maîtres mots de notre Promotion, l’autonomie et la curiosité sont ce qui nous qualifient le plus."
]

const containerDesc = document.querySelector('.description');


$(".planet").click(function() {
    $('.container').attr("planet-center", this.id);
    if (this.id == "planet1") centerPlanet1();
    if (this.id == "planet2") centerPlanet2();
    if (this.id == "planet3") centerPlanet3();
 
 });

 function handleDesc(desc) {

   containerDesc.innerHTML = "";
   containerDesc.innerHTML = desc;

 }
 
 
 function centerPlanet1() { 
    var tl = new TimelineMax()
    .to('#planet1', 1, {xPercent: 0, z: 1}, 0)
    .to('#planet2', 1, {xPercent: 140, z: -800}, 0)
    .to('#planet3', 1, {xPercent: -140, z: -800}, 0)

    handleDesc(description[0])
    
 }
 
 function centerPlanet2() {
    var tl = new TimelineMax()
    .to('#planet1', 1, {xPercent: -140, z: -800}, 0)
    .to('#planet2', 1, {xPercent: 0, z: 1}, 0)
    .to('#planet3', 1, {xPercent: 140, z: -800}, 0);

    handleDesc(description[1])
 }
 
 function centerPlanet3() {
    var tl = new TimelineMax()
    .to('#planet1', 1, {xPercent: 140, z: -800}, 0)
    .to('#planet2', 1, {xPercent: -140, z: -800}, 0)
    .to('#planet3', 1, {xPercent: 0, z: 1}, 0);

    handleDesc(description[2])
 }
 
 
 $(function() {
   centerPlanet2();
 })
 