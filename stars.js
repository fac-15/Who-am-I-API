//Function to create a star. n is the number of stars. The more you shake the more stars.
function starMaker(n) {
    var star = document.createElement("div");
    star.className = "star";
    star.textContent = "★";
    for(var i = 0; i < n; i++) {
        starSet(star);
    }
}

// Function to set stars.
function starSet(clone) {
    var starClone = clone.cloneNode(true);
    var starStyle = starClone.style;

    //Randomly specify the star position (left), the animation delay time (animation-delay), and the size (font-size)
    starStyle.left = 100 * Math.random() + "%";
    starStyle.animationDelay = 20 * Math.random() + "s";
    starStyle.fontSize = ~~(20 * Math.random() + 10) + "px";
    document.body.appendChild(starClone);

    // Create a new star once the star's animation ends

    starClone.addEventListener("animationend", function() {
        this.parentNode.removeChild(this);
        var star = document.createElement("div");
        star.className = "star";
        star.textContent = "★";
        starSet(star);
    }, false)
}

//Example of use. I will give 50 stars.。
starMaker(50);