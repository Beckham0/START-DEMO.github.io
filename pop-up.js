document.addEventListener("DOMContentLoaded", () => {
    const popUp = document.querySelector(".pop-up");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                popUp.classList.add("show");
            } else {
                popUp.classList.remove("show");
            }
        });
    });

    observer.observe(popUp);
});

document.addEventListener("DOMContentLoaded", () => {
    const popUp = document.querySelector(".pop-up1");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                popUp.classList.add("show");
            } else {
                popUp.classList.remove("show");
            }
        });
    });

    observer.observe(popUp);
});

document.addEventListener("DOMContentLoaded", () => {
    const popUp = document.querySelector(".pop-up2");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                popUp.classList.add("show");
            } else {
                popUp.classList.remove("show");
            }
        });
    });

    observer.observe(popUp);
});

