
const mealForm = document.getElementById('meal-form');
const mealList = document.getElementById('meal-list');
const totalCaloriesEl = document.getElementById('total-calories');

let meals = JSON.parse(localStorage.getItem('meals')) || [];

function updateUI() {
    mealList.innerHTML = '';
    let totalCalories = 0;

    meals.forEach((meal, index) => {
        const li = document.createElement('li');
        li.innerHTML = \`\${meal.name} - \${meal.calories} cal 
            <button onclick="removeMeal(\${index})">❌</button>\`;
        mealList.appendChild(li);
        totalCalories += parseInt(meal.calories);
    });

    totalCaloriesEl.textContent = totalCalories;
    localStorage.setItem('meals', JSON.stringify(meals));
}

mealForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('meal-name').value;
    const calories = document.getElementById('calories').value;

    meals.push({ name, calories });
    updateUI();

    mealForm.reset();
});

function removeMeal(index) {
    meals.splice(index, 1);
    updateUI();
}

updateUI();
