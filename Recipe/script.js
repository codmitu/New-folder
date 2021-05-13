const mealsEl = document.querySelector("#meals");
const favoriteContainer = document.querySelector("#fav-meals")
const searchTerm = document.querySelector("#search-term");
const searchBtn = document.querySelector("#search");
const mealPopup = document.querySelector('.meal-info-container');
const popupBtn = document.querySelector('.close-popup');
const recipeInfo = document.querySelector(".recipe-info");
getRandomMeal();
fetchFavMeals();



async function getRandomMeal() {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const resData = await res.json();
    const randomMeal = resData.meals[0];
    addMeal(randomMeal, true);
}
async function getMealById(id) {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);
    const resData = await res.json();
    const meal = resData.meals[0];
    return meal;
}
async function getMealsBySearch(term) {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + term);
    const resData = await res.json();
    const meals = resData.meals;
    return meals;
}

function addMeal(mealData, random = false) {
    mealsEl.innerHTML = '';
    const meal = document.createElement("div");
    meal.classList.add('meal');
    meal.innerHTML = `
    <div class="meal">
        <div class="meal-header">
        ${random ?
            `<span class="random">
                Random Recipe
            </span>` : ""}
            <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
        </div>
        <div class="meal-body">
            <h4>${mealData.strMeal}</h4>
            <button class="fav-btn"><i class="fas fa-heart"></i></button>
        </div>
    </div>`;
    const btn = meal.querySelector(".fav-btn");
    btn.addEventListener("click", () => {
        if (btn.classList.contains('active')) {
            removeMealLS(mealData.idMeal);
            btn.classList.remove('active');
        } else {
            addMealLS(mealData.idMeal)
            btn.classList.add('active');
            getRandomMeal();
        }
    });
    const mealImg = meal.querySelector(".meal-header img");
    mealImg.addEventListener('click', () => {
        showRecipe(mealData);
    })
    mealsEl.appendChild(meal);
}

function showRecipe(mealData) {
    recipeInfo.innerHTML = '';
    const mealEl = document.createElement('div');
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        if (mealData['strIngredient' + i]) {
            ingredients.push(`${mealData['strIngredient' + i]} - ${mealData['strMeasure' + i]}`)
        } else {
            break;
        }
    }
    mealEl.innerHTML =
        `
        <h1>${mealData.strMeal}</h1>
    <img class="recipe-img" src="${mealData.strMealThumb}" alt="">
    <div class="details-container">
    <p class="recipe-details">${mealData.strInstructions}</p>
    <h3>Ingredients</h3>
    <ul>
        ${ingredients.map(ing =>
            `<li>${ing}</li>`
        ).join('')}
    </ul>
    </div>
    `;
    recipeInfo.appendChild(mealEl);
    mealPopup.classList.remove('hidden');
}

function addMealLS(mealId) {
    const mealIds = getMealsLS();
    localStorage.setItem('mealIds', JSON.stringify([...mealIds, mealId]));
    fetchFavMeals();
}
function getMealsLS() {
    const mealIds = JSON.parse(localStorage.getItem('mealIds'));
    return mealIds === null ? [] : mealIds;
}
function removeMealLS(mealId) {
    const mealIds = getMealsLS();

    localStorage.setItem('mealIds', JSON.stringify(mealIds.filter(id => id !== mealId)))
}

async function fetchFavMeals() {
    favoriteContainer.innerHTML = "";
    const mealIds = getMealsLS();
    for (let i = 0; i < mealIds.length; i++) {
        const mealId = mealIds[i];

        meal = await getMealById(mealId);
        addMealFav(meal);
    }
}

function addMealFav(mealData) {
    const favMeal = document.createElement("li");
    favMeal.innerHTML = `
   <img class="fav-img" src="${mealData.strMealThumb}" alt="">
   <span>${mealData.strMeal}</span>
   <button class="delete-fav"><i class="fas fa-times"></i></button>`;
    const closeBtn = favMeal.querySelector('.delete-fav');
    closeBtn.addEventListener('click', () => {
        removeMealLS(mealData.idMeal);
        fetchFavMeals();
    });
    const favImg = favMeal.querySelector(".fav-img");
    favImg.addEventListener('click', () => {
        showRecipe(mealData);
    })
    favoriteContainer.appendChild(favMeal);
}

searchBtn.addEventListener('click', async () => {

    mealsEl.innerHTML = "";
    const search = searchTerm.value;

    const meals = await getMealsBySearch(search);
    meals.forEach((meal) => {
        addMeal(meal);
    })
});

popupBtn.addEventListener('click', () => {
    mealPopup.classList.add('hidden');
})
