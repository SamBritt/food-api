//Displaying Foods
const foodList = document.querySelector('.foodList');
const foodListDivs = foodList.querySelectorAll('div');

//converts any array to a string representing DOM input Elements.
const convertToString = (arr) => {
    let constructMe = '<div>';
    for(let i in arr){
       constructMe += `<p>${i}: ${arr[i]}</p>`;
    }
    constructMe += '</div>'
    return constructMe;
}

//Takes return value from convertToString and appends to DOM
const insertToDOM = (element) => {
    foodList.innerHTML += element;
}

// fetch("http://localhost:8088/foods")
//     .then(foods => foods.json())
//     .then(parsedFoods => {
//         parsedFoods.forEach(element => {
//             const foodAsHTMl = convertToString(element);
//             // console.log(foodAsHTMl);
//             insertToDOM(foodAsHTMl);
//         });
//     })
//Fetching Other People's Data

//Fetch data from our API
fetch("http://localhost:8088/foods")
    .then(foods => foods.json())
    .then(parsedFoods => {
        parsedFoods.forEach(element => {
//Fetch data from OpenFood API
            fetch(`https://world.openfoodfacts.org/api/v0/product/${element.barcode}.json`)
            .then(response => response.json())
            .then(productInfo => {
                //Creates ingredient key/value from fetched ingredient value
                element.ingredients = productInfo.product.ingredients_text_en;
                const foodAsHTMl = convertToString(element);
                insertToDOM(foodAsHTMl);
            })
        });
    })
