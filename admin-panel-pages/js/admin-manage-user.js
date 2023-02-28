const restaurantTable = document.querySelector("#restaurant-table");

const userData = JSON.parse(localStorage.getItem("userData")) || [];

const tableHeader = () => {
  const tr = document.createElement("tr");
  restaurantTable.appendChild(tr);
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
  th2.innerHTML = "Username";
  th3.innerHTML = "Email";
  th4.innerHTML = "Password";
  th5.innerHTML = "Actions";

  th1.style.width = "50px";
  th2.style.width = "300px";
  th3.style.width = "120px";
  th4.style.width = "120px";
  th5.style.width = "120px";
};
tableHeader;
const renderTable = () => {
  restaurantTable.innerHTML = "";
  tableHeader();
  userData.map((value, index) => {
    const tr = document.createElement("tr");
    restaurantTable.appendChild(tr);

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
    td2.innerHTML = value.userName;
    td3.innerHTML = value.email;
    td4.innerHTML = value.password;
    button.innerHTML = "Delete";
  });
};

renderTable();

const deleteData = (index) => {
  userData.splice(index, 1);
  localStorage.setItem("userData", JSON.stringify(userData));
  renderTable();
};
