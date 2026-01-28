const slides=document.querySelectorAll(".image");
var counter=0;

slides.forEach(
    (slide,index)=>{
        slide.style.left=`${index*100}%`
    }
)

const goNext= ()=>{
    counter++;
    slideImage();
}
const goPrev= ()=>{
    counter--;
    slideImage();
}


const slideImage= ()=>{
    slides.forEach(
        (image)=>{
            image.style.transform=`translateX(-${counter *100}%)`
        }
    )
}