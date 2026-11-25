document.addEventListener("DOMContentLoaded", function () {
  const reviews = document.getElementById("review-cards");
  const next = document.getElementById("nextbtn");
  const prev = document.getElementById("prevbtn");

  const card = reviews.querySelector(".review-card");

  function scrollReview(direction) {
    const distance = card.offsetWidth;

    reviews.scrollBy({
      left: direction * distance,
      behavior: "smooth",
    });
  }

  next.addEventListener("click", function () {
    scrollReview(1);
  });

  prev.addEventListener("click", function () {
    scrollReview(-1);
  });
});
