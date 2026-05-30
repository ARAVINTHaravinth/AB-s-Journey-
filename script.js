const welcome = document.getElementById("welcome");
const story = document.getElementById("story");

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function startStory() {
    welcome.classList.remove("active");
    story.classList.add("active");
    showSlide(currentSlide);
}

function showSlide(index){

    slides.forEach(slide=>{
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

let startX = 0;

document.addEventListener("touchstart", (e)=>{
    startX = e.touches[0].clientX;
});

document.addEventListener("touchend", (e)=>{

    let endX = e.changedTouches[0].clientX;

    if(startX - endX > 50){

        if(currentSlide < slides.length - 1){
            currentSlide++;
            showSlide(currentSlide);
        }
    }

    if(endX - startX > 50){

        if(currentSlide > 0){
            currentSlide--;
            showSlide(currentSlide);
        }
    }
});

// Desktop Support
document.addEventListener("keydown",(e)=>{

    if(e.key === "ArrowRight"){

        if(currentSlide < slides.length - 1){
            currentSlide++;
            showSlide(currentSlide);
        }
    }

    if(e.key === "ArrowLeft"){

        if(currentSlide > 0){
            currentSlide--;
            showSlide(currentSlide);
        }
    }
});

showSlide(0);
