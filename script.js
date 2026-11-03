
const sections = document.querySelectorAll(".product");

const progressBar = document.getElementById("progressBar");

// Barra di avanzamento dello scroll
window.addEventListener("scroll", () => {

    const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

    const percentage =
        maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;

    progressBar.style.width = percentage + "%";

});

// Animazione quando entra un prodotto
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }

    });

}, {
    threshold: 0.5
});

sections.forEach(section => {
    observer.observe(section);
});

// Selezione colori
sections.forEach(section => {

    const buttons = section.querySelectorAll(".color");
    const product = section.querySelector(".product-image");
    const label = section.querySelector(".color-name");

    buttons.forEach((button, index) => {

        button.addEventListener("click", () => {

            // Rimuove la selezione precedente
            buttons.forEach(btn => {
                btn.classList.remove("active");
            });

            // Attiva il nuovo colore
            button.classList.add("active");

            // Cambia il colore del prodotto
            product.style.setProperty(
                "--device",
                button.dataset.color
            );

            // Aggiorna il nome
            label.textContent =
                button.dataset.name + " / " +
                String(index + 1).padStart(2, "0");

        });

    });

});
