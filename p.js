const image = document.querySelector(".container"),
    heartIcon = document.querySelector(".heart");



image.addEventListener("dblclick", (e) => {
    let xValue = e.clientX - e.target.offsetLeft,
        yValue = e.clientY - e.target.offsetTop;
    // Set the position of the heart element using the x and y values
    heartIcon.style.left = `${xValue}px`;
    heartIcon.style.top = `${yValue}px`;
    // Add the active class to the heart element to animate it

    heartIcon.classList.add("active");
    setTimeout(
        () => {
            heartIcon.classList.remove("active");
        }, 1000)
});