/* =========================
   COUNTDOWN
========================= */

const targetDate =
  new Date("December 31, 2026 20:00:00").getTime();


function updateCountdown() {

  const now = new Date().getTime();

  const difference =
    targetDate - now;


  if (difference <= 0) {

    document.getElementById("days").innerText = "00";
    document.getElementById("hours").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";

    return;
  }


  const days =
    Math.floor(
      difference /
      (1000 * 60 * 60 * 24)
    );

  const hours =
    Math.floor(
      (difference /
      (1000 * 60 * 60)) % 24
    );

  const minutes =
    Math.floor(
      (difference /
      (1000 * 60)) % 60
    );

  const seconds =
    Math.floor(
      (difference / 1000) % 60
    );


  document.getElementById("days").innerText =
    String(days).padStart(2, "0");

  document.getElementById("hours").innerText =
    String(hours).padStart(2, "0");

  document.getElementById("minutes").innerText =
    String(minutes).padStart(2, "0");

  document.getElementById("seconds").innerText =
    String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);


/* =========================
   NAVBAR
========================= */

const navbar =
  document.getElementById("navbar");

window.addEventListener("scroll", () => {

  navbar.classList.toggle(
    "scrolled",
    window.scrollY > 50
  );

});


/* =========================
   DARK / LIGHT
========================= */

const themeBtn =
  document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("light");

  const icon =
    themeBtn.querySelector("i");

  if (
    document.body.classList.contains("light")
  ) {

    icon.classList.replace(
      "bi-moon-stars-fill",
      "bi-sun-fill"
    );

  } else {

    icon.classList.replace(
      "bi-sun-fill",
      "bi-moon-stars-fill"
    );

  }

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
  document.querySelectorAll(".reveal");


const observer =
  new IntersectionObserver(
    (entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("show");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.15
    }
  );


revealElements.forEach(element => {

  observer.observe(element);

});


/* =========================
   3D HERO CARD
========================= */

const heroCard =
  document.querySelector(".hero-card");


if (heroCard) {

  heroCard.addEventListener(
    "mousemove",
    (event) => {

      const rect =
        heroCard.getBoundingClientRect();

      const x =
        event.clientX - rect.left;

      const y =
        event.clientY - rect.top;


      const rotateY =
        ((x / rect.width) - .5) * 16;

      const rotateX =
        ((y / rect.height) - .5) * -16;


      heroCard.style.transform =
        `
        perspective(900px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.03)
        `;

    }
  );


  heroCard.addEventListener(
    "mouseleave",
    () => {

      heroCard.style.transform =
        "perspective(900px) rotateX(0) rotateY(0) scale(1)";

    }
  );

}


/* =========================
   FORM
========================= */

const form =
  document.querySelector("form");


form.addEventListener(
  "submit",
  (event) => {

    event.preventDefault();

    const button =
      form.querySelector(".send-btn");

    button.innerHTML =
      `
      پیام با موفقیت ارسال شد
      <i class="bi bi-check-circle"></i>
      `;

    button.style.background =
      "linear-gradient(135deg,#10b981,#059669)";

  }
);