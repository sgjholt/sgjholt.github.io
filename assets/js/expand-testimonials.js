document.addEventListener("DOMContentLoaded", function () {
    const readMoreLinks = document.querySelectorAll(".readMore");

    readMoreLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const moreText = this.previousElementSibling.querySelector(".more");

            if (moreText.style.display === "none" || !moreText.style.display) {
                moreText.style.display = "inline";
                this.textContent = "Read Less";
            } else {
                moreText.style.display = "none";
                this.textContent = "Read More";
            }
        });
    });
});
