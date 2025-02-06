function adjustIngredients(recipe) {
    let quantity;
    let ingredientList;
    let defaultIngredients;

    if (recipe === 'cookies') {
        quantity = document.getElementById('quantity-cookies').value;
        ingredientList = document.getElementById('ingredient-list-cookies');
        defaultIngredients = [
            { name: 'gram of unsalted butter', amount: 7 },
            { name: 'gram of brown sugar', amount: 5 },
            { name: 'gram of self-raising flour', amount: 13 },
            { name: 'gram of eggs', amount: 3 },
            { name: 'gram of chocolate chips', amount: 9 }
        ];
    } else if (recipe === 'spaghetti') {
        quantity = document.getElementById('quantity-spaghetti').value;
        ingredientList = document.getElementById('ingredient-list-spaghetti');
        defaultIngredients = [
            { name: 'gram of thick round spaghetti', amount: 100 },
            { name: 'gram of meat', amount: 6 },
            { name: 'gram of eggs', amount: 73 },
            { name: 'gram of pecorino romano cheese', amount: 30 },
            { name: 'gram of black pepper', amount: 1 },
            { name: 'gram of salt', amount:  1}
        ];
    } else if (recipe === 'cake') {
        quantity = document.getElementById('quantity-cake').value;
        ingredientList = document.getElementById('ingredient-list-cake');
        defaultIngredients = [
            { name: 'gram of cake flour', amount: 100 },
            { name: 'gram of caster sugar', amount: 20 },
            { name: 'gram of eggs', amount: 275 },
            { name: 'gram of baking powder', amount: 2 },
            { name: 'gram of coconut milk', amount: 100 },
            { name: 'gram of olive oil', amount:  8},
            { name: 'gram of pandan juice', amount:  5}
        ];
    }

    // Clear the ingredient list
    ingredientList.innerHTML = '';

    // Validate input
    if (isNaN(quantity) || quantity <= 0) {
        alert('Please enter a valid positive number for quantity.');
        return;
    }

    // Adjust and display the ingredients
    defaultIngredients.forEach(ingredient => {
        const adjustedAmount = (ingredient.amount * quantity).toFixed(1); // Keeps one decimal if needed
        const listItem = document.createElement('li');
        listItem.textContent = `${adjustedAmount} ${ingredient.name}`;
        ingredientList.appendChild(listItem);
    });
}

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(index) {
    const carouselInner = document.querySelector('.carousel-inner');
    const offset = -index * 100; // Calculate the offset for the slide
    carouselInner.style.transform = `translateX(${offset}%)`; // Move the carousel
}

function nextSlide() {
    // Stop sliding after the third picture (index 2)
    if (currentSlide < 3) { // Only allow sliding up to the third picture
        currentSlide = (currentSlide + 1) % totalSlides; // Move to the next slide
        showSlide(currentSlide);
    }
}

function prevSlide() {
    // Stop sliding before the first picture
    if (currentSlide > 0) { // Only allow sliding back to the first picture
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Move to the previous slide
        showSlide(currentSlide);
    }
}

// Auto-slide every 5 seconds (only between the first three pictures)
setInterval(() => {
    if (currentSlide < 2) { // Only auto-slide if not on the third picture
        nextSlide();
    }
}, 5000);