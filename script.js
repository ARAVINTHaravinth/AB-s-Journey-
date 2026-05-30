const slides = document.querySelectorAll(".slide");

let current = 0;

function startStory(){

    document.getElementById("welcome").classList.remove("active");

    document.getElementById("story").classList.add("active");
}

function showSlide(index){

    slides.forEach(slide=>{
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

let startX = 0;

document.addEventListener("touchstart",(e)=>{
    startX = e.touches[0].clientX;
});

document.addEventListener("touchend",(e)=>{

    let endX = e.changedTouches[0].clientX;

    if(startX - endX > 50){

        if(current < slides.length-1){
            current++;
            showSlide(current);
        }
    }

    if(endX - startX > 50){

        if(current > 0){
            current--;
            showSlide(current);
        }
    }
});

showSlide(0);