const cartWrapper = document.querySelector(".cart-wrapper");
const cartEmptyBanner = document.querySelector("[data-cart-empty]");
const orderForm = document.querySelector("#order-form");
const cartTotal = document.querySelector(".cart-total");

window.addEventListener("click", function (event) {
  const deleteBtn = event.target.closest(".delete__item");
  if (event.target.hasAttribute("data-cart")) {
    const card = event.target.closest(".card");

    const productObj = {
      id: card.dataset.id,
      imgSrc: card.querySelector(".product-img").getAttribute("src"),
      title: card.querySelector(".item-title").innerText,
      weight: card.querySelector(".price__weight").innerText,
      price: card.querySelector(".price__currency").innerText,
      counter: card.querySelector("[data-counter]").innerText,
    };

    const itemInCart = cartWrapper.querySelector(
      `[data-id="${productObj.id}"]`
    );

    // If the item is in the cart
    if (itemInCart) {
      const counterElement = itemInCart.querySelector("[data-counter]");
      counterElement.innerText =
        parseInt(counterElement.innerText) + parseInt(productObj.counter);
    } else {
      const cartItemHTML = `<div class="cart-item" data-id="${productObj.id}">
								<div class="cart-item__top">
									<div class="cart-item__img">
										<img src="${productObj.imgSrc}" alt="${productObj.title}">
									</div>
									<div class="cart-item__desc">
										<div class="cart-item__title">${productObj.title}</div>
										<div class="cart-item__weight">${productObj.weight}</div>

										<!-- cart-item__details -->
										<div class="cart-item__details">

											<div class="items items--small counter-wrapper">
												<div class="items__control" data-action="minus">-</div>
												<div class="items__current" data-counter>${productObj.counter}</div>
												<div class="items__control" data-action="plus">+</div>
											</div>

											<div class="price">
												<div class="price__currency">${productObj.price}</div>
											</div>
										</div>
										<!-- // cart-item__details -->


									</div>
                      <div>
                        <p class="delete__item">✘</p>
                      </div>
								</div>
							</div>`;

      // Item in cart
      cartWrapper.insertAdjacentHTML("beforeend", cartItemHTML);
      cartEmptyBanner.classList.add("none");
      orderForm.classList.remove("none");
      cartTotal.classList.remove("none");
    }
    card.querySelector("[data-counter]").innerText = "1";
  }

  if (deleteBtn) {
    event.target.closest(".cart-item").remove();
    if (cartWrapper.children.length < 1) {
      cartEmptyBanner.classList.remove("none");
      orderForm.classList.add("none");
      cartTotal.classList.add("none");
    } else {
      cartEmptyBanner.classList.add("none");
    }
  }

  calcPrice();
});
