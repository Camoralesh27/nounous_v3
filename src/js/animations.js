// animations.js

document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);

  initHomeAnimations();
  initServicesAnimations();
  initContactAnimations();
});

/**
 * Animaciones de la HOME (index)
 * Detecta la página por la presencia de main.hero y secciones claves.
 */
function initHomeAnimations() {
  const heroMain = document.querySelector("main.hero");
  const testimoniales = document.querySelector(".testimoniales");
  const faq = document.querySelector(".faq");

  if (!heroMain || !testimoniales || !faq) return;

  // Hero: entrada suave
  const heroTl = gsap.timeline({
    defaults: { duration: 0.7, ease: "power3.out" }
  });

  heroTl
    .from(".hero__heading", { y: 40, opacity: 0 })
    .from(".hero__text", { y: 30, opacity: 0 }, "-=0.5")
    .from(".hero__boximg .hero__imgMarco", { scale: 0.8, opacity: 0 }, "-=0.6")
    .from(".hero__boximg .hero__img", { scale: 0.9, opacity: 0 }, "-=0.7");

  // Atributos: tarjetas al hacer scroll
  gsap.from(".atributos .widget", {
    scrollTrigger: {
      trigger: ".atributos",
      start: "top 70%"
    },
    y: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power2.out"
  });

  // Testimoniales
  gsap.from(".testimoniales__widgets .widget2", {
    scrollTrigger: {
      trigger: ".testimoniales",
      start: "top 70%"
    },
    y: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power2.out"
  });

  // FAQ
  gsap.from(".faq__widgets", {
    scrollTrigger: {
      trigger: ".faq",
      start: "top 70%"
    },
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });
}


/**
 * Animaciones de la página de SERVICIOS
 * Esta página tiene: .procedimiento + main.contacto + .servicios
 */
function initServicesAnimations() {
  const procedimiento = document.querySelector(".procedimiento");
  const serviciosSection = document.querySelector(".servicios");
  const contactoHeading = document.querySelector("main.contacto .contacto__heading");

  // Si no hay sección de servicios, no hacemos nada
  if (!serviciosSection) return;

  // ----- PROCEDIMIENTO -----
  if (procedimiento) {
    const procedimientoTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".procedimiento",
        start: "top 80%",
        once: true
      },
      defaults: { duration: 0.7, ease: "power3.out" }
    });

    procedimientoTl
      .from(".procedimiento__heading", { y: 40, opacity: 0 })
      .from(".procedimiento__widget", {
        y: 40,
        opacity: 0,
        stagger: 0.2
      }, "-=0.3");
  }

  // ----- TÍTULO + TEXTO DE SERVICIOS -----
  if (contactoHeading) {
    const serviciosHeaderTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".contacto__heading",
        start: "top 70%",
        once: true
      },
      defaults: { duration: 0.7, ease: "power3.out" }
    });

    serviciosHeaderTl
      .from(".contacto__heading", { y: 40, opacity: 0 })
      .from("main.contacto .atributos__texto", { y: 30, opacity: 0 }, "-=0.5");
  }

  // ----- TARJETAS SERVICIO -----
  gsap.from(".servicio", {
    scrollTrigger: {
      trigger: ".servicios",
      start: "top 70%"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.25,
    ease: "power3.out"
  });

  // ----- IMÁGENES DE SERVICIO -----
  gsap.from(".servicio__img", {
    scrollTrigger: {
      trigger: ".servicios",
      start: "top 70%"
    },
    scale: 0.85,
    opacity: 0,
    duration: 1,
    stagger: 0.25,
    ease: "power2.out"
  });
}


/**
 * Animaciones de la página de CONTACTO
 * Aquí hay main.contacto PERO sin sección .servicios
 */
function initContactAnimations() {
  const contactoMain = document.querySelector("main.contacto");
  const hasServicios = document.querySelector(".servicios");

  // Si no hay main.contacto, o es la de servicios (que también usa contacto), salimos
  if (!contactoMain || hasServicios) return;

  const contactoTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".contacto",
      start: "top 70%",
      once: true
    },
    defaults: { duration: 0.7, ease: "power3.out" }
  });

  contactoTl
    .from(".contacto__heading", {
      y: 40,
      opacity: 0
    })
    .from("main.contacto > .atributos__texto", {
      y: 30,
      opacity: 0
    }, "-=0.4")
    .from(".contacto .hero__boximg .contacto__imgMarco", {
      scale: 0.85,
      opacity: 0
    }, "-=0.5")
    .from(".contacto .hero__boximg .hero__img", {
      scale: 0.95,
      opacity: 0
    }, "-=0.6")
    .from(".contacto .widget-contact", {
      y: 30,
      opacity: 0,
      stagger: 0.3
    }, "-=0.4");
}


