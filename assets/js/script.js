function startTextRotation(container) {
    const items = container.querySelectorAll("span");
    let current = 0;

    function showNext() {
        items.forEach(span => span.style.animation = "none");

        let currentSpan = items[current];
        let nextIndex = (current + 1) % items.length;

        currentSpan.style.animation = "slideIn 0.3s forwards";

        setTimeout(() => {
            currentSpan.style.animation = "slideOut 0.3s forwards";
        }, 1000);

        current = nextIndex;
    }

    showNext();
    setInterval(showNext, 1500);
}

document.querySelectorAll(".hero_swiper_span_txt2").forEach(startTextRotation);
