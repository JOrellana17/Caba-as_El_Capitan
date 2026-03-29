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
        cover: "1.jpg",
        tag: "Cabaña",
        gallery: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"],
        infoLink: "https://wa.me/50432849397?text=Hola%20necesito%20informacion%20sobre%20la%20caba%C3%B1a%20catalejo"
    },
    {
        folder: "Cabaña Estribor",
        cover: "0.jpg",
        tag: "Cabaña",
        gallery: [
            "0.jpg",
            "0(1).jpg",
            "0(2).jpg",
            "0(3).jpg",
            "abc33067-2c0f-479b-bc90-43a071959992.jpg"
        ],
        infoLink: "https://wa.me/50432849397?text=Hola%20necesito%20informacion%20sobre%20la%20caba%C3%B1a%20estribor"
    },
    {
        folder: "Cabaña Familiar La Perla",
        cover: "1.jpg",
        tag: "Cabaña familiar",
        gallery: [
            "1.jpg",
            "1(1).jpg",
            "1(2).jpg",
            "Imagen de WhatsApp 2025-08-24 a las 09.05.34_fccb1e98.jpg",
            "Imagen de WhatsApp 2025-08-24 a las 09.05.39_ec8af994.jpg"
        ],
        infoLink: "https://wa.me/50432849397?text=Hola%20necesito%20informacion%20sobre%20la%20caba%C3%B1a%20familiar%20la%20perla"
    },
    {
        folder: "Cabaña Timonel",
        cover: "0.jpg",
        tag: "Cabaña",
        gallery: [
            "0.jpg",
            "0(1).jpg",
            "0(2).jpg",
            "47a4d81a-626b-4e63-aa96-0abffc2f4942.jpg",
            "e628900c-51de-4ee6-954b-5f850a3cf698.jpg"
        ],
        infoLink: "https://wa.me/50432849397?text=Hola%20necesito%20informacion%20sobre%20la%20caba%C3%B1a%20timonel"
    },
    {
        folder: "Habitación Almeja",
        cover: "Imagen de WhatsApp 2025-08-24 a las 09.07.47_55d2b011.jpg",
        tag: "Habitación",
        gallery: [
            "Imagen de WhatsApp 2025-08-24 a las 09.07.47_55d2b011.jpg",
            "Imagen de WhatsApp 2025-08-24 a las 09.07.49_c0d64870.jpg",
            "Imagen de WhatsApp 2025-08-24 a las 09.07.52_6cb7d3eb.jpg",
            "Imagen de WhatsApp 2025-08-24 a las 09.07.54_555eb8b2.jpg",
            "Imagen de WhatsApp 2025-08-24 a las 09.07.58_8918a9fa.jpg"
        ],
        infoLink: "https://wa.me/50432849397?text=Hola%20necesito%20informacion%20sobre%20la%20habitacion%20almeja"
    },
    {
        folder: "Cabaña La Fragata",
        cover: "",
        tag: "Próximamente",
        gallery: [],
        infoLink: "https://wa.me/50432849397?text=Hola%20necesito%20informacion%20sobre%20la%20caba%C3%B1a%20fragata"
    },
    {
        folder: "Cabaña La Navio",
        cover: "",
        tag: "Próximamente",
        gallery: [],
        infoLink: "https://wa.me/50432849397?text=Hola%20necesito%20informacion%20sobre%20la%20caba%C3%B1a%20nav%C3%ADo"
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
    const visibleCards = 3;
    const stepMs = 10000;
    const galleryModal = setupGalleryModal();

    if (!grid || !cabinsData.length) {
        return;
    }

    const groups = [];
    for (let i = 0; i < cabinsData.length; i += visibleCards) {
        groups.push(cabinsData.slice(i, i + visibleCards));
    }

    if (groups.length > 1 && groups.at(-1).length < visibleCards) {
        const missing = visibleCards - groups.at(-1).length;
        groups[groups.length - 1] = groups.at(-1).concat(cabinsData.slice(0, missing));
    }

    let groupCursor = 0;

    const render = () => {
        grid.innerHTML = "";

        const cardsToRender = groups[groupCursor] || cabinsData.slice(0, visibleCards);

        cardsToRender.forEach((cabin, indexInView) => {
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
    };

    const nextFrame = () => {
        grid.classList.add("is-switching");

        window.setTimeout(() => {
            groupCursor = (groupCursor + 1) % groups.length;
            render();
            grid.classList.remove("is-switching");
        }, 420);
    };

    render();

    if (groups.length > 1) {
        window.setInterval(nextFrame, stepMs);
    }
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
