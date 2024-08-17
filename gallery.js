let scrollContainer = document.querySelector(".gallery");

let backBtn = document.getElementById("backBtn");

let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", wheelFunction);

function wheelFunction(e){
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY; 
}


nextBtn.addEventListener("click", nextSection);

function nextSection(e){
    const galleryWidth = scrollContainer.offsetWidth;
    const scrollAmount = galleryWidth / 3;
    scrollContainer.scrollLeft += scrollAmount;
}

backBtn.addEventListener("click", backSection);

function backSection(e){
    const galleryWidth = scrollContainer.offsetWidth;
    const scrollAmount = galleryWidth / 3;
    scrollContainer.scrollLeft -= scrollAmount;
}



/*for Moible Scroller*/

let scrollContainerMobile = document.querySelector(".imageSectionMobile");
let backBtnMobile = document.getElementById("backBtnMobile");
let nextBtnMobile = document.getElementById("nextBtnMobile");

scrollContainerMobile.addEventListener("wheel", wheelFunctionMobile);

function wheelFunctionMobile(e){
  e.preventDefault();
  scrollContainerMobile.scrollLeft += e.deltaY; 
}


nextBtnMobile.addEventListener("click", nextSectionMobile);

function nextSectionMobile(e){
  const galleryWidthMobile = scrollContainerMobile.offsetWidth;
  const scrollAmountMobile = galleryWidthMobile; // Corrected variable name
  scrollContainerMobile.scrollLeft += scrollAmountMobile;
}

backBtnMobile.addEventListener("click", backSectionMobile);

function backSectionMobile(e){
  const galleryWidthMobile = scrollContainerMobile.offsetWidth;
  const scrollAmountMobile = galleryWidthMobile; // Corrected variable name
  scrollContainerMobile.scrollLeft -= scrollAmountMobile;
}







const videoId = 'o5GSaAUZXMk';
const iframe = document.createElement('iframe');
iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&controls=0&showinfo=0&modestbranding=1`;
iframe.frameborder = '0';
iframe.allowfullscreen = true;
document.getElementById('youtube-video').appendChild(iframe);






function show() {
    const popup = document.querySelector('.popup-video1');
    popup.classList.toggle('active'); // Toggles the "active" class on the popup
  }
