function toggleMobileMenu(menu) {
    menu.classList.toggle('open')
}

if (sessionStorage.getItem("code") === "1") {
    const loader = document.querySelector("#wrapper")
    let loaderelement = document.createElement("div")
    loaderelement.classList.add("loader")
    loader.append(loaderelement)
    console.log(loader);
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then((data) => {
            if(data.length!=0){
            loaderelement.style.display = "none"
            let productData = ""
            data.map((values) => {
                productData += ` 


            <div class="outer">
                <div class="content ">
                    <span class="bg">${values.category.toUpperCase()}  </span>
                    <h1> ${values.title}</h1>
                    <p>${values.description.slice(0, 180)}...</p>
                    
                    <div class="button">
                        <a href="">$${values.price}</a><a class="cart-btn" href="#"><i class="cart-icon ion-bag"></i>ADD TO CART</a>
                    </div>
                    
                </div>
                <img src="${values.image}" width="300px" height="300px" class="animated fadeInRight">
            </div>
            
            `
            })
            document.getElementById("wrapper").innerHTML = productData}
            else{
                // console.log(data.length);
                loaderelement.style.display = "none"
                const card = document.querySelector(".signup")
                let errorelement = document.createElement("p")
                errorelement.innerHTML = "No products found"
                console.log(errorelement.innerHTML);
                card.append(errorelement)
            }
        })

        .catch((err) => {
            loaderelement.style.display = "none"
            const card = document.querySelector(".signup")
            let errorelement = document.createElement("p")
            errorelement.innerHTML = err.message
            card.append(errorelement)

        })

}
else {
    const card = document.querySelector(".signup")
    let errorelement = document.createElement("p")
    errorelement.innerHTML = `Please sign up <a href="./signup.html">here</a> to view this page `
    card.append(errorelement)
}