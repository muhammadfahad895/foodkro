const menuData = JSON.parse(localStorage.getItem("menuData")) || [];
const restaurantTable = document.querySelector("#restaurant-table");

const tableHeader = () => {
  const tr = document.createElement("tr");
  restaurantTable.appendChild(tr);

  const th1 = document.createElement("th");
  const th2 = document.createElement("th");
  const th3 = document.createElement("th");
  const th4 = document.createElement("th");
  const th5 = document.createElement("th");
  const th6 = document.createElement("th");
  const th7 = document.createElement("th");

  tr.appendChild(th1);
  tr.appendChild(th2);
  tr.appendChild(th3);
  tr.appendChild(th4);
  tr.appendChild(th5);
  tr.appendChild(th6);
  tr.appendChild(th7);

  th1.innerHTML = "SN";
  th2.innerHTML = "Product Name";
  th3.innerHTML = "Product Price";
  th4.innerHTML = "Restaurant";
  th5.innerHTML = "Description";
  th6.innerHTML = "Product Image";
  th7.innerHTML = "Actions";

  th1.style.width = "50px";
  th2.style.width = "200px";
  th3.style.width = "200px";
  th4.style.width = "200px";
  th5.style.width = "200px";
  th6.style.width = "120px";
};

const renderTable = () => {
  restaurantTable.innerHTML = "";
  tableHeader();

  menuData.map((value, index) => {
    const tr = document.createElement("tr");
    restaurantTable.appendChild(tr);

    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");
    const td6 = document.createElement("td");
    const td7 = document.createElement("td");
    const button = document.createElement("button");
    const editButton = document.createElement("button");

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    td7.appendChild(editButton);
    td7.appendChild(button);
    editButton.style.marginBlock = "0.7rem";

    button.addEventListener("click", () => deleteData(index));
    editButton.addEventListener("click", () => editData(index));

    td1.innerHTML = index + 1;
    td2.innerHTML = value.productName;
    td3.innerHTML = value.productPrice;
    td4.innerHTML = value.selectRes;
    td5.innerHTML = value.productDescription;

    const restaurantImg = document.createElement("img");
    restaurantImg.width = 50;
    restaurantImg.src = value.productImg;

    td6.appendChild(restaurantImg);

    button.innerHTML = "Delete";
    editButton.innerHTML = "Edit";
  });
};

const deleteData = (index) => {
  menuData.splice(index, 1);
  localStorage.setItem("menuData", JSON.stringify(menuData));
  renderTable();
};

const editData = (index) => {
  localStorage.setItem("editIndex", index);
  location.href = "/admin-panel-pages/admin-manage-menuedit.html";
};

renderTable();
