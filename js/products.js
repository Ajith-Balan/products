async function getData() {
  const res = await fetch(`https://dummyjson.com/products/`);
  const data = await res.json();
  let str = '';
  data.products.map((product) => {
    str += `<div class="col-3 mx-3 my-5" >
              <div class="card" style="height: 500px;" onclick="detail(${product.id})">
                <div class="card-body">
                  <h5 class="card-title">${product.title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted"></h6>
               
                  <img src="${product.thumbnail}" alt="" width="100%">
                  <p class="card-text">rs.${product.price}</p>
                </div>
              </div>
            </div>`;
  });
  document.getElementById("cl").innerHTML=str
}
getData()
function detail(id) {
  console.log(id);
  window.location.href =`details.html?id=${id}`;
}