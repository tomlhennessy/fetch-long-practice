/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

fetch("http://localhost:5001/products", {
    method: "POST",
    body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
})
.then(response => response.text())
.then(data => console.log("Product created:", data))
.catch(error => console.error("Error:", error));


/* ============================== Phase 2 ============================== */

fetch("http://localhost:5001/products", {
    method: "POST",
    body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
})
.then(response => {
    console.log("Status Code:", response.status);
    console.log("Content-Type:", response.headers.get("Content-Type"));
    console.log("Response URL:", response.url);
    console.log("Redirected?", response.redirected);
})
.catch(error => console.error("Error:", error));



/* ============================== Phase 3 ============================== */

const body = new URLSearchParams({
    name: "Caribbean Delight Coffee",
    description: "Made by Manatee Coffee",
    price: "11.99",
    categories: "grocery"
})

fetch("http://localhost:5001/products", {
    method: "POST",
    body: body,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
})
.then(response => response.text())
.then(data => console.log("Product created", data))
.catch(error => console.error("Error:", error));



/* ============================== Phase 4 ============================== */

// fetch a specific product
fetch("http://localhost:5001/products/1")
    .then(response => response.text())
    .then(data => console.log("Product details", data))
    .catch(error => console.error("Error:", error));



// delete a product

fetch("http://localhost:5001/products/1/delete", {
    method: "POST"
})
.then(response => response.text())
.then(data => console.log("Product deleted:", data))
.catch(error => console.error("Error:", error));
