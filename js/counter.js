window.addEventListener("click", function (event) {
  let counter;

  if (
    event.target.dataset.action === "plus" ||
    event.target.dataset.action === "minus"
  ) {
    const counterWrapper = event.target.closest(".counter-wrapper");
    counter = counterWrapper.querySelector("[data-counter]");
  }

  if (event.target.dataset.action === "plus") {
    counter.textContent = ++counter.textContent;
  } else if (
    event.target.dataset.action === "minus" &&
    counter.textContent > 1
  ) {
    counter.textContent = --counter.textContent;
  }
});
