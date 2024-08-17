var imagesss = [
    "desktop-banner1.jpg",
    "desktop-banner2.jpg",
    "desktop-banner3.jpg"
];

var i = 0; /*Starting Image Selection*/

function sliders(){
    

    if(i < (images.length - 1)) /*0<4*/
        i++;
    else
        i=0;
       
        document.getElementById("slideimage").src = imagesss[i];

        
}

setInterval(sliders, 2000);


/*Case 1: Initial State
imagesss array: ["desktop-banner1.jpg", "desktop-banner2.jpg", "desktop-banner3.jpg"]
i: 0
Case 2: First Iteration
sliders() function is called for the first time.
if (i < (images.length - 1)) evaluates to true as 0 is less than 2 (3 - 1).
i is incremented to 1.
document.getElementById("slideimage").src = imagesss[1]; sets the image source to "desktop-banner2.jpg".
Case 3: Second Iteration
sliders() function is called again after 2 seconds.
if (i < (images.length - 1)) evaluates to true as 1 is less than 2.
i is incremented to 2.
document.getElementById("slideimage").src = imagesss[2]; sets the image source to "desktop-banner3.jpg".
Case 4: Third Iteration
sliders() function is called again after 2 seconds.
if (i < (images.length - 1)) evaluates to false as 2 is not less than 2.
The else block is executed.
i is reset to 0.
document.getElementById("slideimage").src = imagesss[0]; sets the image source back to "desktop-banner1.jpg", starting the cycle again.
Subsequent Iterations
The process repeats, cycling through the images in the imagesss array. The if condition ensures that the index i increments until it reaches the end of the array, and then it's reset to 0 to start over.

 */