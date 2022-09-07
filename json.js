let req = new XMLHttpRequest()
req.open("GET", "https://fakestoreapi.com/products");
req.send()
req.addEventListener("load", function () {
    let ken = req.responseText
    let data = JSON.parse(ken)
    console.log(ken)
    let html = ""
    for (let i = 0; i < data.length; i++) {
        console.log(data[i])
        html += `
        <div class="country">
            <div>
            <img src="${data[i].image}" alt="">
        </div>
        <h5 class="cat">Category: ${data[i].category}</h5>
        <h5 class="prc">Price : ${data[i].price}</h5>
        <h5 class="rat">Rating : ${data[i].rating.rate}</h5>
        <h5 class="tit">Title : ${data[i].title}</h5>
        <a href="">ADD TO CART</a>
        </div>
        
        
        `;
    }
    document.querySelector(".container").innerHTML = html
})