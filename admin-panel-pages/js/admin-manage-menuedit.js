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
const editIndex = localStorage.getItem("editIndex");
const editItem = menuData[editIndex];

selectRes.value = editItem.selectRes;

productName.value = editItem.productName;
productPrice.value = editItem.productPrice;
productDescription.value = editItem.productDescription;
imagePreview.style.display = "block";
imagePreview.src = editItem.productImg;

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
    menuData[editIndex] = menuDataObj;
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
  };

  reader.readAsDataURL(file);
});
