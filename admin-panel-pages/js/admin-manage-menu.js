const productName = document.querySelector("#productName");
const selectRes = document.querySelector("#selectRes");
const productPrice = document.querySelector("#productPrice");
const productDescription = document.querySelector("#productDescription");
const saveBtn = document.querySelector("#saveBtn");
const fileInput = document.querySelector("#fileInput");
const imagePreview = document.querySelector("#imagePreview");

const restaurantData = JSON.parse(localStorage.getItem("restaurantData"));

restaurantData.map(({ restaurant }) => {
  selectRes.innerHTML += `<option value="${restaurant}">${restaurant}</option>`;
});

const menuData = JSON.parse(localStorage.getItem("menuData")) || [];

saveBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (productName && selectRes && productPrice && productDescription) {
    let menuDataObj = {
      id: Math.trunc(Math.random() * 10000000000),
      productName: productName.value,
      selectRes: selectRes.value,
      productPrice: productPrice.value,
      productDescription: productDescription.value,
      productImg: imagePreview.src,
    };
    console.log(fileInput.value);
    menuData.push(menuDataObj);
  }

  localStorage.setItem("menuData", JSON.stringify(menuData));
  productName.value = "";
  selectRes.value = "";
  productPrice.value = "";
  productDescription.value = "";
});

fileInput.addEventListener("change", function (event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    imagePreview.src = event.target.result;
    imagePreview.style.display = "block";
  };

  reader.readAsDataURL(file);
});
