let myImage = document.getElementById("slideshow");

//src="images/3.jpg"


let images = ['images/1.jpg', 'images/2.png', 'images/3.jpg', 'images/4.jpg'] ;


let i = 0;

function changeImage() {
    myImage.setAttribute('src', images[i]); 

    i++;
    if (i == images.length - 1) {
        i = 0;
    } else{
        i++; // i = 1 
    }




    // images [0] = 'images/1.jpg'
    //  i++ = 1

    setTimeout( function()
    {changeImage();}, 2000);
}

changeImage();




