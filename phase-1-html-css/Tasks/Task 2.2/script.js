const tabs = document.querySelectorAll(".tab");
const tabPanels = document.querySelectorAll(".tab-panel");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        tabs.forEach((item) => {
            item.classList.remove("active");
            item.setAttribute("aria-selected", "false");
        });
        tabPanels.forEach((panel) => panel.classList.add("hidden"));
        tab.classList.add("active");
        tab.setAttribute("aria-selected", "true");
        document.getElementById(tab.getAttribute("aria-controls")).classList.remove("hidden");
    });
});

const foodTrack = document.querySelector(".food-track");
const foodCards = document.querySelectorAll(".food-card");
let foodIndex = 0;
const moveFood = (direction) => {
    foodIndex = (foodIndex + direction + 4) % 4;
    foodTrack.style.transform = `translateX(-${foodIndex * 183}px)`;
};
document.querySelector(".menu-next").addEventListener("click", () => moveFood(1));
document.querySelector(".menu-prev").addEventListener("click", () => moveFood(-1));
setInterval(() => moveFood(1), 3500);

const testimonialTrack = document.querySelector(".testimonial-track");
let testimonialIndex = 0;
const moveTestimonial = (direction) => {
    testimonialIndex = (testimonialIndex + direction + 3) % 3;
    const cardWidth = document.querySelector(".testimonial").getBoundingClientRect().width + 18;
    testimonialTrack.style.transform = `translateX(-${testimonialIndex * cardWidth}px)`;
};
document.querySelector(".testimonial-next").addEventListener("click", () => moveTestimonial(1));
document.querySelector(".testimonial-prev").addEventListener("click", () => moveTestimonial(-1));
setInterval(() => moveTestimonial(1), 5000);

const bookingForm = document.getElementById("booking-form");
bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = bookingForm.querySelector(".form-message");
    message.textContent = "Thank you! Your table request has been received.";
    bookingForm.reset();
});

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
});
