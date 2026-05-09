const selectorsForReveal = [
    ".hero-copy",
    ".hero-card",
    ".intro-strip .container",
    ".section-heading",
    ".map-embed-card",
    ".amenities-grid article",
    ".story-copy",
    ".story-panel",
    ".reviews-grid blockquote",
    ".contact-card",
    ".footer-grid > div"
];

const cabinsData = [
    {
        folder: "Cabaña Catalejo",
        cover: "Cabaña_Catalejo_1.jpg",
        tag: "Cabaña",
        gallery: ["Cabaña_Catalejo_1.jpg", "Cabaña_Catalejo_2.jpg", "Cabaña_Catalejo_3.jpg", "Cabaña_Catalejo_4.jpg", "Cabaña_Catalejo_5.jpg", "Cabaña_Catalejo_6.jpg", "Cabaña_Catalejo_7.jpg", "Cabaña_Catalejo_8.jpg", "Cabaña_Catalejo_9.jpg", "Cabaña_Catalejo_10.jpg", "Cabaña_Catalejo_11.jpg", "Cabaña_Catalejo_12.jpg", "Cabaña_Catalejo_13.jpg"],
        infoLink: "https://wa.me/50432849397?text=Hola%20necesito%20informacion%20sobre%20la%20caba%C3%B1a%20catalejo"
    },
    {
        folder: "Cabaña Estribor",
        cover: "Cabaña_Estribor_1.jpg",
        tag: "Cabaña",
        gallery: [
            "Cabaña_Estribor_1.jpg",
            "Cabaña_Estribor_2.jpg",
            "Cabaña_Estribor_3.jpg",
            "Cabaña_Estribor_4.jpg",
            "Cabaña_Estribor_5.jpg",
            "Cabaña_Estribor_6.jpg",
            "Cabaña_Estribor_7.jpg",
            "Cabaña_Estribor_8.jpg",
            "Cabaña_Estribor_9.jpg",
            "Cabaña_Estribor_10.jpg"
        ],
        infoLink: "https://wa.me/50432849397?text=Hola%20necesito%20informacion%20sobre%20la%20caba%C3%B1a%20estribor"
    },
    {
        folder: "Cabaña Familiar La Perla",
        cover: "Cabaña_Familiar_La_Perla_1.jpg",
        tag: "Cabaña familiar",
        gallery: [
            "Cabaña_Familiar_La_Perla_1.jpg",
            "Cabaña_Familiar_La_Perla_2.jpg",
            "Cabaña_Familiar_La_Perla_3.jpg",
            "Cabaña_Familiar_La_Perla_4.jpg",
            "Cabaña_Familiar_La_Perla_5.jpg",
            "Cabaña_Familiar_La_Perla_6.jpg",
            "Cabaña_Familiar_La_Perla_7.jpg",
            "Cabaña_Familiar_La_Perla_8.jpg",
            "Cabaña_Familiar_La_Perla_9.jpg",
            "Cabaña_Familiar_La_Perla_10.jpg",
            "Cabaña_Familiar_La_Perla_11.jpg",
            "Cabaña_Familiar_La_Perla_12.jpg",
            "Cabaña_Familiar_La_Perla_13.jpg",
            "Cabaña_Familiar_La_Perla_14.jpg",
            "Cabaña_Familiar_La_Perla_15.jpg",
            "Cabaña_Familiar_La_Perla_16.jpg",
            "Cabaña_Familiar_La_Perla_17.jpg",
            "Cabaña_Familiar_La_Perla_18.jpg",
            "Cabaña_Familiar_La_Perla_19.jpg",
            "Cabaña_Familiar_La_Perla_20.jpg",
            "Cabaña_Familiar_La_Perla_21.jpg",
            "Cabaña_Familiar_La_Perla_22.jpg",
            "Cabaña_Familiar_La_Perla_23.jpg"
        ],
        infoLink: "https://wa.me/50432849397?text=Hola%20necesito%20informacion%20sobre%20la%20caba%C3%B1a%20familiar%20la%20perla"
    },
    {
        folder: "Cabaña Timonel",
        cover: "Cabaña_Timonel_1.jpg",
        tag: "Cabaña",
        gallery: [
            "Cabaña_Timonel_1.jpg",
            "Cabaña_Timonel_2.jpg",
            "Cabaña_Timonel_3.jpg",
            "Cabaña_Timonel_4.jpg",
            "Cabaña_Timonel_5.jpg",
            "Cabaña_Timonel_6.jpg",
            "Cabaña_Timonel_7.jpg",
            "Cabaña_Timonel_8.jpg",
            "Cabaña_Timonel_9.jpg",
            "Cabaña_Timonel_10.jpg"
        ],
        infoLink: "https://wa.me/50432849397?text=Hola%20necesito%20informacion%20sobre%20la%20caba%C3%B1a%20timonel"
    },
    {
        folder: "Habitación Almeja",
        cover: "Habitación_Almeja_1.jpg",
        tag: "Habitación",
        gallery: [
            "Habitación_Almeja_1.jpg",
            "Habitación_Almeja_2.jpg",
            "Habitación_Almeja_3.jpg",
            "Habitación_Almeja_4.jpg",
            "Habitación_Almeja_5.jpg",
            "Habitación_Almeja_6.jpg",
            "Habitación_Almeja_7.jpg",
            "Habitación_Almeja_8.jpg",
            "Habitación_Almeja_9.jpg",
            "Habitación_Almeja_10.jpg",
            "Habitación_Almeja_11.jpg",
            "Habitación_Almeja_12.jpg",
            "Habitación_Almeja_13.jpg",
            "Habitación_Almeja_14.jpg",
            "Habitación_Almeja_15.jpg",
            "Habitación_Almeja_16.jpg"
        ],
        infoLink: "https://wa.me/50432849397?text=Hola%20necesito%20informacion%20sobre%20la%20habitacion%20almeja"
    },
    {
        folder: "Cabaña Fragata",
        cover: "Cabaña_Fragata_1.jpeg",
        tag: "Cabaña",
        gallery: [
            "Cabaña_Fragata_1.jpeg",
            "Cabaña_Fragata_2.jpeg",
            "Cabaña_Fragata_3.jpeg",
            "Cabaña_Fragata_4.jpeg",
            "Cabaña_Fragata_5.jpeg",
            "Cabaña_Fragata_6.jpeg",
            "Cabaña_Fragata_7.jpeg",
            "Cabaña_Fragata_8.jpeg",
            "Cabaña_Fragata_9.jpeg",
            "Cabaña_Fragata_10.jpeg",
            "Cabaña_Fragata_11.jpeg",
            "Cabaña_Fragata_12.jpeg",
            "Cabaña_Fragata_13.jpeg",
            "Cabaña_Fragata_14.jpeg"
        ],
        infoLink: "https://wa.me/50432849397?text=Hola%20necesito%20informacion%20sobre%20la%20caba%C3%B1a%20fragata"
    },
    {
        folder: "Cabaña Navio",
        cover: "Cabaña_Navio_1.jpeg",
        tag: "Cabaña",
        gallery: [
            "Cabaña_Navio_1.jpeg",
            "Cabaña_Navio_2.jpeg",
            "Cabaña_Navio_3.jpeg",
            "Cabaña_Navio_4.jpeg",
            "Cabaña_Navio_5.jpeg",
            "Cabaña_Navio_6.jpeg",
            "Cabaña_Navio_7.jpeg",
            "Cabaña_Navio_8.jpeg",
            "Cabaña_Navio_9.jpeg"
        ],
        infoLink: "https://wa.me/50432849397?text=Hola%20necesito%20informacion%20sobre%20la%20caba%C3%B1a%20nav%C3%ADo"
    },
    {
        folder: "Area Social",
        cover: "Area_Social_1.jpg",
        tag: "Área común",
        gallery: [
            "Area_Social_1.jpg",
            "Area_Social_2.jpg",
            "Area_Social_3.jpg",
            "Area_Social_4.jpg",
            "Area_Social_5.jpg",
            "Area_Social_6.jpg",
            "Area_Social_7.jpg",
            "Area_Social_8.jpg",
            "Area_Social_9.jpg",
            "Area_Social_10.jpg",
            "Area_Social_11.jpg",
            "Area_Social_12.jpg",
            "Area_Social_13.jpg",
            "Area_Social_14.jpg",
            "Area_Social_15.jpg",
            "Area_Social_16.jpg"
        ],
        infoLink: "https://wa.me/50432849397?text=Hola%20necesito%20informacion%20sobre%20el%20area%20social"
    }
];

const galleryState = {
    folder: "",
    images: [],
    index: 0
};

function encodePathPart(part) {
    return encodeURIComponent(part).replace(/%2F/g, "/");
}

function getImagePath(folder, fileName) {
    return `img/${encodePathPart(folder)}/${encodePathPart(fileName)}`;
}

function createCabinCard(cabin, indexInView) {
    const article = document.createElement("article");
    article.className = "lodging-card";
    article.classList.add("reveal-item", "in-view");
    article.tabIndex = 0;
    article.role = "button";
    article.setAttribute("aria-label", `Abrir galeria de ${cabin.folder}`);
    article.dataset.cabin = cabin.folder;

    if (indexInView === 1) {
        article.classList.add("is-featured");
    }

    if (cabin.cover) {
        const image = document.createElement("img");
        image.src = getImagePath(cabin.folder, cabin.cover);
        image.alt = `${cabin.folder} - portada`;
        image.loading = "lazy";
        article.append(image);
    } else {
        article.classList.add("no-image");
        const placeholder = document.createElement("div");
        placeholder.className = "image-placeholder";
        placeholder.textContent = "Imagen disponible próximamente";
        article.append(placeholder);
    }

    const content = document.createElement("div");
    content.className = "card-content";

    const tag = document.createElement("p");
    tag.className = "card-tag";
    tag.textContent = cabin.tag;

    const title = document.createElement("h3");
    title.textContent = cabin.folder;

    const text = document.createElement("p");
    text.textContent = cabin.gallery.length
        ? "Toca la imagen para abrir la galeria de esta cabaña."
        : "Espacio reservado. Esta cabaña aun no tiene fotografias cargadas.";

    const link = document.createElement("a");
    link.href = cabin.infoLink || "https://wa.me/50432849397?text=Hola%20necesito%20informacion%20sobre%20las%20caba%C3%B1as";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Solicitar informacion";
    link.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    content.append(tag, title, text, link);
    article.append(content);
    return article;
}

function setupGalleryModal() {
    const modal = document.getElementById("gallery-modal");
    const frame = document.getElementById("gallery-frame");
    const image = document.getElementById("gallery-image");
    const title = document.getElementById("gallery-title");
    const counter = document.getElementById("gallery-counter");
    const empty = document.getElementById("gallery-empty");
    const prev = document.getElementById("gallery-prev");
    const next = document.getElementById("gallery-next");
    let touchStartX = 0;

    if (!modal || !frame || !image || !title || !counter || !empty || !prev || !next) {
        return {
            open: () => {}
        };
    }

    const renderGallery = () => {
        title.textContent = galleryState.folder;

        if (!galleryState.images.length) {
            frame.hidden = true;
            empty.hidden = false;
            counter.textContent = "";
            return;
        }

        frame.hidden = false;
        empty.hidden = true;

        const current = galleryState.images[galleryState.index];
        image.src = getImagePath(galleryState.folder, current);
        image.alt = `${galleryState.folder} - foto ${galleryState.index + 1}`;
        counter.textContent = `${galleryState.index + 1} / ${galleryState.images.length}`;
    };

    const close = () => {
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
    };

    const open = (cabin) => {
        galleryState.folder = cabin.folder;
        galleryState.images = cabin.gallery;
        galleryState.index = 0;
        renderGallery();
        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
    };

    prev.addEventListener("click", () => {
        if (!galleryState.images.length) {
            return;
        }
        galleryState.index = (galleryState.index - 1 + galleryState.images.length) % galleryState.images.length;
        renderGallery();
    });

    next.addEventListener("click", () => {
        if (!galleryState.images.length) {
            return;
        }
        galleryState.index = (galleryState.index + 1) % galleryState.images.length;
        renderGallery();
    });

    frame.addEventListener("touchstart", (event) => {
        if (!galleryState.images.length) {
            return;
        }
        touchStartX = event.changedTouches[0].clientX;
    }, { passive: true });

    frame.addEventListener("touchend", (event) => {
        if (!galleryState.images.length) {
            return;
        }

        const delta = event.changedTouches[0].clientX - touchStartX;
        if (Math.abs(delta) < 45) {
            return;
        }

        if (delta < 0) {
            next.click();
        } else {
            prev.click();
        }
    }, { passive: true });

    modal.querySelectorAll("[data-close-modal]").forEach((closer) => {
        closer.addEventListener("click", close);
    });

    document.addEventListener("keydown", (event) => {
        if (!modal.classList.contains("is-open")) {
            return;
        }

        if (event.key === "Escape") {
            close();
        }
        if (event.key === "ArrowLeft") {
            prev.click();
        }
        if (event.key === "ArrowRight") {
            next.click();
        }
    });

    return { open };
}

function setupCabinsRotation() {
    const grid = document.getElementById("lodging-grid");
    const galleryModal = setupGalleryModal();

    if (!grid || !cabinsData.length) {
        return;
    }

    grid.innerHTML = "";

    cabinsData.forEach((cabin, indexInView) => {
        const card = createCabinCard(cabin, indexInView);
        const openGallery = () => galleryModal.open(cabin);

        card.addEventListener("click", openGallery);
        card.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openGallery();
            }
        });

        grid.appendChild(card);
    });

    setupInteractiveShadows(grid.querySelectorAll(".lodging-card"));
}

function setupMobileMenu() {
    const button = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".site-nav");
    const compactMenuBreakpoint = 1024;

    if (!button || !nav) {
        return;
    }

    button.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("is-open");
        button.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("is-open");
            button.setAttribute("aria-expanded", "false");
        });
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > compactMenuBreakpoint) {
            nav.classList.remove("is-open");
            button.setAttribute("aria-expanded", "false");
        }
    });
}

function setupHeaderShadowOnScroll() {
    const header = document.querySelector(".site-header");

    if (!header) {
        return;
    }

    const updateShadow = () => {
        if (window.scrollY > 12) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    };

    updateShadow();
    window.addEventListener("scroll", updateShadow, { passive: true });
}

function setupInstagramComingSoon() {
    const instagramIcon = document.querySelector(".social-icon-instagram");

    if (!instagramIcon) {
        return;
    }

    let timeoutId;

    instagramIcon.addEventListener("click", (event) => {
        event.preventDefault();
        instagramIcon.classList.add("is-coming-soon");

        if (timeoutId) {
            window.clearTimeout(timeoutId);
        }

        timeoutId = window.setTimeout(() => {
            instagramIcon.classList.remove("is-coming-soon");
        }, 1800);
    });
}

function setupRevealAnimations() {
    const elements = selectorsForReveal
        .flatMap((selector) => Array.from(document.querySelectorAll(selector)));

    elements.forEach((element, index) => {
        element.classList.add("reveal-item");
        element.style.transitionDelay = `${Math.min(index * 35, 280)}ms`;
    });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        elements.forEach((element) => element.classList.add("in-view"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }
                entry.target.classList.add("in-view");
                observer.unobserve(entry.target);
            });
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));
}

function setupInteractiveShadows(scope) {
    const cards = scope || document.querySelectorAll(
        ".hero-card, .lodging-card, .amenities-grid article, .story-panel, .reviews-grid blockquote, .contact-card"
    );

    cards.forEach((card) => {
        if (card.dataset.shadowBound === "true") {
            return;
        }

        card.dataset.shadowBound = "true";

        card.addEventListener("pointerenter", () => {
            card.classList.add("is-hovered");
        });

        card.addEventListener("pointerleave", () => {
            card.classList.remove("is-hovered");
            card.style.transform = "";
        });

        card.addEventListener("pointermove", (event) => {
            if (window.innerWidth <= 760) {
                return;
            }

            const rect = card.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const rotateY = ((x / rect.width) - 0.5) * 3;
            const rotateX = ((0.5 - (y / rect.height))) * 3;
            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setupMobileMenu();
    setupCabinsRotation();
    setupHeaderShadowOnScroll();
    setupInstagramComingSoon();
    setupRevealAnimations();
    setupInteractiveShadows();
});
