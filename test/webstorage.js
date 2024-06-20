"use strict";

let product = {
    name: "Nike",
    price: 100
}

localStorage.setItem("savedproduct", JSON.stringify (product));

//Saving the name in the key Myname (saving it even after your browser closes)
localStorage.setItem("myname", "Remsey Mailjard");
//Retrieving the name using the key and getItem
let displayMyname = localStorage.getItem("myname");
console.log(displayMyname);

//Stored untill you close your browsertab!
sessionStorage.setItem("temporaryName", "Demo");
//Retrieving the name using the key and getItem
let displayTempname = sessionStorage.getItem("temporaryName");
console.log(displayTempname);

