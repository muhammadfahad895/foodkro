const restaurantInput = document.querySelector("#restaurantInput");
const cityInput = document.querySelector("#cityInput");
const submitBtn = document.querySelector("#submitBtn");
const restaurantDataForm = document.querySelector("#restaurantDataForm");
const table = document.querySelector("#restaurant-table");

const restaurantData = JSON.parse(localStorage.getItem("restaurantData")) || [];
restaurantDataForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (restaurantDataForm.value !== "") {
    let obj = {
      id: Math.trunc(Math.random() * 10000000000),
      restaurant: restaurantInput.value,
      city: cityInput.value,
      createdAt: Date.now(),
    };
    restaurantData.push(obj);

    localStorage.setItem("restaurantData", JSON.stringify(restaurantData));
    restaurantInput.value = "";
    cityInput.value = "";
    renderTable();
  }
});

const tableHeader = () => {
  const tr = document.createElement("tr");
  table.appendChild(tr);

  const th1 = document.createElement("th");
  const th2 = document.createElement("th");
  const th3 = document.createElement("th");
  const th4 = document.createElement("th");
  const th5 = document.createElement("th");

  tr.appendChild(th1);
  tr.appendChild(th2);
  tr.appendChild(th3);
  tr.appendChild(th4);
  tr.appendChild(th5);

  th1.innerHTML = "SN";
  th2.innerHTML = "Restaurant";
  th3.innerHTML = "city";
  th4.innerHTML = "CreatedAt";
  th5.innerHTML = "Actions";

  th1.style.width = "50px";
  th2.style.width = "300px";
  th3.style.width = "120px";
  th4.style.width = "120px";
  th5.style.width = "120px";
};

const renderTable = () => {
  table.innerHTML = "";
  tableHeader();
  restaurantData.map((value, index) => {
    const tr = document.createElement("tr");
    table.appendChild(tr);

    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const button = document.createElement("button");

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(button);

    button.addEventListener("click", () => deleteData(index));

    td1.innerHTML = index + 1;
    td2.innerHTML = value.restaurant;
    td3.innerHTML = value.city;
    td4.innerHTML = new Date(value.createdAt).toLocaleDateString();
    button.innerHTML = "Delete";
  });
};

renderTable();

const deleteData = (index) => {
  restaurantData.splice(index, 1);
  localStorage.setItem("restaurantData", JSON.stringify(restaurantData));
    renderTable();

};
