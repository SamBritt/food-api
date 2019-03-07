fetch("http://localhost:8088/foods")
    .then(foods => foods.json())
    .then(parsedFoods => {
        console.table(parsedFoods)
    })

const classList = document.querySelector('.classList');

const convertToString = () => {
    let structString = '';
    return structString;
}
