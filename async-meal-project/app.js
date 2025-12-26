const resultBox = document.querySelector(".food-results");
const searchInput = document.querySelector("#ara");
const flagContainer = document.querySelector(".image-container");
let mealList = [];

fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
  .then((response) => response.json())
  .then((data) => {
    /* console.log(data.meals[5].strMeal); */
    //?gelen malı once depoya koydum sonra sergıledm kargodan gelen
    mealList = data.meals;
    showScreen(data.meals);
  });

function showScreen(data) {
  resultBox.innerHTML = "";
  data.forEach((meal) => {
    resultBox.innerHTML += `
      <div class="meal-card">
        <div class="image-wrapper">
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
        </div>
        <div class="meal-info">
          <h3>${meal.strMeal}</h3>
        </div>
      </div>`;
  });
}

searchInput.oninput = (e) => {
  const enteredLetters = e.target.value.toLowerCase();
  let letterArray = mealList.filter((item) =>
    item.strMeal.toLowerCase().includes(enteredLetters)
  );

  showScreen(letterArray);
};

flagContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    const countryName = e.target.alt;
    console.log(countryName);
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${countryName}`)
      .then((response) => response.json())
      .then((data) => {
        mealList = data.meals;
        showScreen(data.meals);
      });
  }
});
