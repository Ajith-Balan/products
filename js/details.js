async function details() {
  const urlParam = new URLSearchParams(window.location.search);
  const id = urlParam.get('id');
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();
  console.log(data);
  document.getElementById("title").innerHTML = data.title;

  document.getElementById('cls').innerHTML = `<img class="rounded" src="${data.thumbnail}" alt="">`;
document.getElementById('des').innerHTML= data.description
  
 
  data.images.forEach(image => {
    document.getElementById("subimg").innerHTML += `<img class="border mx-3" src="${image}" alt="" width="10%">`;
  });

  
}

details();
