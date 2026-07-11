document.addEventListener("keydown", (e) => {
    e.preventDefault();
});

// ---------- STAR GENERATOR ----------

const stars = document.getElementById("stars");

const sizes = ["small","small","small","medium","medium","big"];

for(let i=0;i<220;i++){

    const star = document.createElement("div");

    star.className =
        "star " +
        sizes[Math.floor(Math.random()*sizes.length)];

    star.style.left =
        Math.random()*100 + "%";

    star.style.top =
        Math.random()*75 + "%";

    star.style.animationDelay =
        Math.random()*5 + "s";

    stars.appendChild(star);

}




// ---------- FIREFLIES ----------

const fireflies=
document.getElementById("fireflies");

for(let i=0;i<8;i++){

const fly=document.createElement("div");

fly.className="firefly";

fly.style.left=
20+Math.random()*60+"%";

fly.style.bottom=
40+Math.random()*100+"px";

fly.style.animationDuration=
5+Math.random()*3+"s";

fly.style.animationDelay=
Math.random()*10+"s";

fireflies.appendChild(fly);

}




// ---------- CURSOR MAGIC ----------

document.addEventListener(
"mousemove",
(e)=>{


    let sparkle =
    document.createElement("div");


    sparkle.className =
    "cursor-sparkle";


    sparkle.style.left =
    e.clientX + "px";


    sparkle.style.top =
    e.clientY + "px";


    // Random sparkle size
    let size =
    Math.random()*15 + 10;


    sparkle.style.fontSize =
    size + "px";


    // Random rotation
    sparkle.style.transform =
    `rotate(${Math.random()*360}deg)`;


    document.body.appendChild(sparkle);



    setTimeout(()=>{

        sparkle.remove();

    },900);


});

// ---------- SHOOTING STARS ----------

function createShootingStar(direction){

    const star = document.createElement("div");

    star.className = "shooting-star";


    // Apply the same direction to all stars
    star.classList.add(direction);



    // Slightly different positions
    star.style.left =
    Math.random() * window.innerWidth * 0.8 + "px";


    star.style.top =
    Math.random() * window.innerHeight * 0.35 + "px";



    // Slight speed variation
    star.style.animationDuration =
    (0.8 + Math.random()*0.5) + "s";



    document
    .querySelector(".background")
    .appendChild(star);



    setTimeout(()=>{

        star.remove();

    },2000);

}




function launchShootingStars(){


    // Pick ONE direction for the whole meteor shower

    const directions = [
        "diagonal",
        "diagonal",
        "diagonal",
        "left",
        "right"
    ];


    const chosenDirection =
    directions[
        Math.floor(Math.random()*directions.length)
    ];



    // 2-3 stars together

    const amount =
    Math.floor(Math.random()*2)+2;



    for(let i=0;i<amount;i++){


        setTimeout(()=>{

            createShootingStar(chosenDirection);


        }, i*250);


    }


}


// Every few seconds

setInterval(()=>{

    launchShootingStars();

},4000);

const constellationContainer =
document.querySelector(".constellations");


function createConstellation(points){

    // create stars

    points.forEach(point=>{

        let star=document.createElement("div");

        star.className="constellation-star";

        star.style.left=
        point.x+"%";

        star.style.top=
        point.y+"%";


        constellationContainer.appendChild(star);

    });



    // create connecting lines

    for(let i=0;i<points.length-1;i++){

        let current=points[i];

        let next=points[i+1];


        let line=document.createElement("div");

        line.className="constellation-line";


        let dx=next.x-current.x;

        let dy=next.y-current.y;


        let length=
        Math.sqrt(
            dx*dx+
            dy*dy
        );


        let angle=
        Math.atan2(dy,dx)
        *
        180/Math.PI;



        line.style.width=
        length+"%";


        line.style.left=
        current.x+"%";


        line.style.top=
        current.y+"%";


        line.style.transform=
        `rotate(${angle}deg)`;


        constellationContainer.appendChild(line);

    }

}

// constellation 1

createConstellation([

{ x:18, y:20 },

{ x:23, y:17 },

{ x:28, y:23 },

{ x:34, y:18 }
]);



// constellation 2

createConstellation([

{ x:68, y:67 },

{ x:77, y:64 },

{ x:82, y:69 },

{ x:86, y:64 }
]);

// ---------- STORY INTRO ----------


const beginBtn =
document.getElementById("beginBtn");


const card =
document.querySelector(".card");


const storyBox =
document.querySelector(".story-text");


const story =
document.getElementById("story");


const music =
document.getElementById("bgMusic");
music.volume = 0.2;




const messages = [

    "Elloo elianaaa, it's your special dayy!",

    "Which is whyy I made a web dedicated for youuu!",

    "Nawa'y magustuhan mo, pag hindi edi wag hmphk.",

    "Me and rexie made this amayshingness.",

];


function typeStory(text, callback){

    // Fade out previous text (except the very first one)
    if(story.innerHTML !== ""){

        storyBox.classList.add("fade-out");

    }

    setTimeout(() => {

        story.innerHTML = "";

        storyBox.classList.remove("fade-out");

        let i = 0;

        let typing = setInterval(() => {

            story.innerHTML += text.charAt(i);

            i++;

            if(i >= text.length){

                clearInterval(typing);

                // If there's another message, continue after a pause
                if(callback){

                    setTimeout(() => {

                        callback();

                    },2200);

                }

            }

        },80);

    }, story.innerHTML === "" ? 0 : 800);

}

beginBtn.addEventListener("click", () => {

    // Play music
    music.play();

    // Hide the card
    card.classList.add("hide");

    // Wait for the card animation
    setTimeout(() => {

    storyBox.classList.add("show");

    typeStory(messages[0], () => {

        typeStory(messages[1], () => {

            typeStory(messages[2], () => {

                typeStory(messages[3], () => {

    // Fade the last message away
    storyBox.classList.add("fade-out");


    setTimeout(() => {

        meteorShower();

        starsGlow();

        excitedFireflies();

        birthdayTitle.classList.add("show");


        // Wait before entering memory section
        setTimeout(()=>{

            transitionToMemory();

        },5000);


    },1000);


});

            });

        });

    });

}, 2000);

});

function meteorShower(){

    const amount = 25;

    for(let i = 0; i < amount; i++){

        setTimeout(() => {

            createShootingStar("diagonal");

        }, i * 180);

    }

}

function starsGlow(){

    document
        .querySelectorAll(".star")
        .forEach(star=>{

            star.classList.add("super-glow");

        });

}

function excitedFireflies(){

    document
        .querySelectorAll(".firefly")
        .forEach(fly=>{

            fly.style.animationDuration = "2.5s";

        });

}

const birthdayTitle =
document.querySelector(".birthday-title");

function transitionToMemory(){

    const flash =
    document.querySelector(".flash");


    flash.classList.add("active");


    setTimeout(()=>{

        document
        .querySelector(".night-section")
        .classList.add("hide");


        document
        .querySelector(".memory-section")
        .classList.add("show");


    },1200);

}

function transitionToMemory(){

    const flash = document.querySelector(".flash");

    // Start flash
    flash.classList.add("active");

    // Immediately switch scenes while the flash covers the screen
    document.querySelector(".background").classList.add("hide");
    document.querySelector("#welcomeScene").classList.add("hide");
    document.querySelector(".story-text").classList.add("hide");
    document.querySelector(".birthday-title").classList.add("hide");

    document.querySelector(".memory-section").classList.add("show");

}

const book = document.querySelector(".book");

const pages = document.querySelectorAll(".page");

const nextBtn = document.getElementById("nextPage");

const prevBtn = document.getElementById("prevPage");

const cover = document.querySelector(".book-cover");

const pageSound = document.getElementById("pageSound");


function playPageSound(){

    if(!pageSound) return;

    pageSound.currentTime = 0;

    pageSound.play();

}



function createPageSparkles(){


    const bookRect =
    book.getBoundingClientRect();



    for(let i = 0; i < 15; i++){


        const sparkle =
        document.createElement("div");


        sparkle.className =
        "page-sparkle";


        sparkle.style.left =
        (
            bookRect.left +
            Math.random()*bookRect.width
        ) + "px";



        sparkle.style.top =
        (
            bookRect.top +
            Math.random()*bookRect.height
        ) + "px";



        document.body.appendChild(sparkle);



        setTimeout(()=>{

            sparkle.remove();

        },1000);


    }

}

let currentPage = -1;
// -1 = cover
// 0 = page1
// 1 = page2
// 2 = page3
// 3 = page4
const pagesContainer = document.querySelector(".pages");

let thicknessValues = [
    24, // cover
    18, // page 1
    12, // page 2
    7,  // page 3
    3   // last page
];


function updateBookThickness(){

    pagesContainer.style.setProperty(
        "--thickness",
        thicknessValues[currentPage + 1]
    );

}


// OPEN BOOK

book.addEventListener("click",(e)=>{


    // Ignore arrow clicks
    if(e.target.closest(".book-controls"))
        return;


    // Only allow opening from cover
    if(currentPage !== -1)
        return;


    book.classList.add("unlocking");


    setTimeout(()=>{

        book.classList.add("open");

    },700);


});

// NEXT BUTTON

nextBtn.addEventListener("click",()=>{


    // Cover → first page

    if(currentPage === -1){

        currentPage = 0;


        setTimeout(()=>{

            startPageTyping(
                pages[currentPage]
            );

        },1400);


        return;

    }



    if(currentPage >= pages.length-1)
        return;



    pages[currentPage]
    .classList.add("flipped");


    currentPage++;


    updateBookThickness();
    
    createPageSparkles();

    setTimeout(()=>{

        startPageTyping(
            pages[currentPage]
        );

    },1400);


});

// PREVIOUS BUTTON

prevBtn.addEventListener("click",()=>{


    // Going back from first page → cover

    if(currentPage === 0){


        pages[0]
.classList.remove("flipped");


currentPage = -1;


playPageSound();

createPageSparkles();


        setTimeout(()=>{


            book.classList.remove("open");


        },1000);


        return;

    }



    if(currentPage < 0)
        return;



   currentPage--;

pages[currentPage]
.classList.remove("flipped");


updateBookThickness();


playPageSound();

createPageSparkles();


});

updateBookThickness();


function typeMemoryText(element){

    const text = element.dataset.text.trim();

    element.innerHTML="";

    let i=0;


    let typing=setInterval(()=>{


        element.innerHTML += text.charAt(i);


        i++;


        if(i >= text.length){

            clearInterval(typing);

        }


    },60);

}

function startPageTyping(page){

    const text =
    page.querySelector(".memory-text");


    if(!text) return;


    // Prevent typing again
    if(text.dataset.typed === "true")
        return;


    text.dataset.typed = "true";


    typeMemoryText(text);

}