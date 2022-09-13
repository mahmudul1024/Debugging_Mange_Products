const inputValue = (id) => {
  const input = document.getElementById(id);
  const inputTemp = input.value;
  input.value = "";
  return inputTemp;
};

const addProduct = () => {
  const product_name = inputValue("product-name");
  const product_quantity = inputValue("product-quantity");

  const quantity = Number(product_quantity);

  if (!isNaN(product_name) || !Number.isInteger(quantity)) {
    alert("mama vul korso");
    return;
  }
  setOntoLocalStorage(product_name, quantity);
};

// check localStorage for data
const check_localStorage = () => {
  const getData = localStorage.getItem("products_local");
  if (!getData) {
    const obj = {};
    const stringified = JSON.stringify(obj);
    localStorage.setItem("products_local", stringified);
  }

  return;
};

// add input to the local Storage
const setOntoLocalStorage = (product_name, product_quantity) => {
  //   console.log(product_name, product_quantity);
  //   console.log(typeof product_name, typeof product_quantity);

  check_localStorage(product_name, product_quantity);
  const getData = localStorage.getItem("products_local");
  const obj = JSON.parse(getData);

  //   for (const local in obj) {
  //     if (local === product_name) {
  //       product_quantity = obj[product_name] + product_quantity;
  //     }
  //   }
  if (obj[product_name]) {
    obj[product_name] = parseInt(obj[product_name]) + product_quantity;
  } else {
    obj[product_name] = product_quantity;
  }

  const stringified = JSON.stringify(obj);
  localStorage.setItem("products_local", stringified);
  // display data from local storage
  display();
};

const display = () => {
  const getData = localStorage.getItem("products_local");
  if (getData) {
    const objectified = JSON.parse(getData);
    console.table(objectified);

    console.log(objectified);
    const products_all_id = document.getElementById("all-products");
    products_all_id.innerHTML = ``;
    for (const elemnt in objectified) {
      const div = document.createElement("div");
      div.classList.add("shadow-sm", "p-3", "mb-2", "bg-body", "rounded");
      div.innerHTML = `
        <span class="fs-1">${elemnt}</span>
            Quantity:<small class="fw-bold">
                ${objectified[elemnt]}
            </small>
           
        
        `;
      products_all_id.appendChild(div);
    }
  }
};
display();
