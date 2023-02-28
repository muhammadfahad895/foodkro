const userMainContent = document.querySelector(".user-main-content");
const menuData = JSON.parse(localStorage.getItem("menuData")) || [];

menuData.map((el) => {
  const card = document.createElement("div");
  card.className = "card";

  userMainContent.appendChild(card);

  card.innerHTML = ` 
       <img src=${el.productImg} alt="Food Image" />
            <div class="card-content">
              <h2 class="card-title">${el.productName}</h2>
              <p class="card-description">${el.productDescription}</p
              >
              <div class="card-footer">
                <span class="card-price">$${el.productPrice}</span>
                <button class="card-button">Add to Cart</button>
              </div>
            </div>`;
});
