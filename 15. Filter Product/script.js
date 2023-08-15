const productList = document.querySelector(".product-list");
const input = document.querySelector("input");

const getData = async (word) => {
  const data = await fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  );
  filteredData = data.filter((item) => item.title.toLowerCase().includes(word)); //filter which item incluedes word
  updateUI(filteredData);
};

const updateUI = (data) => {
  let content = "";
  data.forEach((e) => {
    content += `<li class="item">
    <div>
      <div class="image">
        <img
          src="${e.image}"
          alt=""
        />
      </div>
      <div class="product-info">
        <p class="product-name">
          ${e.title}
        </p>
        <p class="product-price">$${e.price}</p>
      </div>
    </div>
  </li>`;
  });
  productList.innerHTML = content;
};

getData("");

input.addEventListener("input", () => {
  getData(input.value);
});
