const inputValue = (id) => {
  const input = document.getElementById(id);
  return input.value;
};

const addProduct = () => {
  const product_name = inputValue("product-nam");
  const product_quantity = inputValue("product-quantity");
};
