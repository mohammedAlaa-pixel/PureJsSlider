var imgs= Array.from(document.querySelectorAll(".item img"));
var lightBox = document.getElementById("lightbox");
var lightboxitem = document.getElementById("lightboxitem");5
var currentIndex = 0;
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var closeBtn = document.getElementById("close");
for(var i = 0; i<imgs.length ;i++)
{
    imgs[i].addEventListener("click", function(eventinfo){
        currentIndex=imgs.indexOf(eventinfo.target);
        console.log(currentIndex);
        var imgsrc = eventinfo.target.getAttribute("src");
        lightboxitem.style.backgroundImage= "URL(" + imgsrc + ")";
        lightboxitem.style.display="flex";
    click()
    })
}
function click(){

    lightBox.style.display="flex";

}
function nextSlide(){ //nextSlide 
    currentIndex++;
    if(currentIndex == imgs.length)
    {
        currentIndex=0;
    }
    var imgsrc=imgs[currentIndex].getAttribute("src");
    lightboxitem.style.backgroundImage="url(" + imgsrc + ")";
}
nextBtn.addEventListener("click",nextSlide);

function prevSlide(){ //prevSlide 
    currentIndex--;
    if(currentIndex <0)
    {
        currentIndex= imgs.length -1;
    }
    var imgsrc=imgs[currentIndex].getAttribute("src");
    lightboxitem.style.backgroundImage="url(" + imgsrc + ")";
}
prevBtn.addEventListener("click",prevSlide);

function closeSlide()
{// close the slide
    lightBox.style.display= "none";
}
closeBtn.addEventListener("click", closeSlide);

document.addEventListener("keydown",function(eventinfo){
    if(eventinfo.keyCode ==39)// Rightkey
    {
        nextSlide();

    }
    else if (eventinfo.keyCode == 37 ) //Leftkey
     {
        prevSlide();
    }

    else if (eventinfo.keyCode ==27) //Escapekey
    {
       closeSlide();
    } 
}
)
