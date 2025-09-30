const plusButtons = document.querySelectorAll(".fa-plus-circle");
const minusButtons = document.querySelectorAll(".fa-minus-circle");
const deleteButtons = document.querySelectorAll(".fa-trash-alt");
const likeButtons = document.querySelectorAll(".fa-heart");
const totalDisplay = document.querySelector(".total");

function calculateTotal() {
  let total = 0;
  const products = document.querySelectorAll(".card");
  products.forEach((product) => {
    const unitPrice = parseInt(
      product.querySelector(".unit-price").textContent.replace("$", "")
    );
    const quantity = parseInt(product.querySelector(".quantity").textContent);
    total += unitPrice * quantity;
  });
  totalDisplay.textContent = total + " $";
}


plusButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const quantityElem = btn.nextElementSibling;
    let quantity = parseInt(quantityElem.textContent);
    quantity++;
    quantityElem.textContent = quantity;
    calculateTotal();
  });
});

minusButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const quantityElem = btn.previousElementSibling;
    let quantity = parseInt(quantityElem.textContent);
    if (quantity > 0) {
      quantity--;
      quantityElem.textContent = quantity;
      calculateTotal();
    }
  });
});

deleteButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const card = btn.closest(".card");
    const quantitySpan = card.querySelector(".quantity");
    quantitySpan.textContent = "0";
    calculateTotal();
  });
});

likeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("liked");
    btn.style.color = btn.classList.contains("liked") ? "red" : "black";
  });
});
