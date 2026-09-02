/* =========================================================
   ROCK MART - FASHION PAGE JAVASCRIPT
   ========================================================= */


/* =========================================================
   CART
   ========================================================= */

const cartButtons =
    document.querySelectorAll(".add-cart");


cartButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const product =
            button.closest(".product-card");


        const productName =
            product.dataset.name;


        const priceText =
            product.querySelector(".price strong").textContent;


        let cart =
            JSON.parse(
                localStorage.getItem("cart")
            ) || [];


        const existingProduct =
            cart.find(function (item) {

                return item.name === productName;

            });


        if (existingProduct) {

            existingProduct.quantity += 1;

        } else {

            cart.push({

                name: productName,

                price: priceText,

                quantity: 1

            });

        }


        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );


        const oldText =
            button.textContent;


        button.textContent =
            "Added ✓";


        button.classList.add("added");


        setTimeout(function () {

            button.textContent =
                oldText;

            button.classList.remove("added");

        }, 1200);


        console.log(
            productName + " added to cart"
        );

    });

});


/* =========================================================
   WISHLIST
   ========================================================= */

const wishlistButtons =
    document.querySelectorAll(".wishlist-btn");


wishlistButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const icon =
            button.querySelector("i");


        const product =
            button.closest(".product-card");


        const productName =
            product.dataset.name;


        let wishlist =
            JSON.parse(
                localStorage.getItem("wishlist")
            ) || [];


        const existing =
            wishlist.indexOf(productName);


        if (existing === -1) {

            wishlist.push(productName);

            icon.classList.remove(
                "fa-regular"
            );

            icon.classList.add(
                "fa-solid"
            );

            button.style.color =
                "#e53935";

        } else {

            wishlist.splice(
                existing,
                1
            );

            icon.classList.remove(
                "fa-solid"
            );

            icon.classList.add(
                "fa-regular"
            );

            button.style.color =
                "";

        }


        localStorage.setItem(
            "wishlist",
            JSON.stringify(wishlist)
        );

    });

});


/* =========================================================
   RESTORE WISHLIST
   ========================================================= */

function restoreWishlist() {

    const wishlist =
        JSON.parse(
            localStorage.getItem("wishlist")
        ) || [];


    wishlistButtons.forEach(function (button) {

        const product =
            button.closest(".product-card");


        const productName =
            product.dataset.name;


        if (
            wishlist.includes(productName)
        ) {

            const icon =
                button.querySelector("i");


            icon.classList.remove(
                "fa-regular"
            );

            icon.classList.add(
                "fa-solid"
            );

            button.style.color =
                "#e53935";

        }

    });

}


restoreWishlist();


/* =========================================================
   SEARCH
   ========================================================= */

const searchInput =
    document.getElementById(
        "fashionSearch"
    );


const searchButton =
    document.getElementById(
        "searchButton"
    );


function searchProducts() {

    const searchValue =
        searchInput.value
            .trim()
            .toLowerCase();


    const products =
        document.querySelectorAll(
            ".product-card"
        );


    products.forEach(function (product) {

        const productName =
            product.dataset.name
                .toLowerCase();


        const category =
            product.dataset.category
                .toLowerCase();


        if (
            productName.includes(searchValue) ||
            category.includes(searchValue) ||
            searchValue === ""
        ) {

            product.style.display =
                "";

        } else {

            product.style.display =
                "none";

        }

    });


    if (searchValue !== "") {

        document
            .getElementById("trending")
            .scrollIntoView({
                behavior: "smooth"
            });

    }

}


searchButton.addEventListener(
    "click",
    searchProducts
);


searchInput.addEventListener(
    "keyup",
    function (event) {

        if (
            event.key === "Enter"
        ) {

            searchProducts();

        }

    }
);


/* =========================================================
   CATEGORY CLICK
   ========================================================= */

const categoryCards =
    document.querySelectorAll(
        ".category-card"
    );


categoryCards.forEach(function (card) {

    card.addEventListener(
        "click",
        function () {

            const target =
                card.getAttribute(
                    "href"
                );


            if (
                target &&
                target.startsWith("#")
            ) {

                const section =
                    document.querySelector(
                        target
                    );


                if (section) {

                    setTimeout(function () {

                        section.scrollIntoView({
                            behavior: "smooth"
                        });

                    }, 50);

                }

            }

        }
    );

});


/* =========================================================
   SHOP NOW BUTTON
   ========================================================= */

const shopButton =
    document.querySelector(
        ".fashion-btn"
    );


if (shopButton) {

    shopButton.addEventListener(
        "click",
        function (event) {

            const target =
                document.querySelector(
                    "#trending"
                );


            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

}


/* =========================================================
   PAGE LOADED
   ========================================================= */

console.log(
    "Rock Mart Fashion page loaded successfully."
);