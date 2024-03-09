const menu = {
  meal: '',
  price: 0,

  setMeal(mealToCheck) {
    if (typeof mealToCheck !== 'string') {
      console.error('Error: Meal must be a string value!');
      return;
    }
    this.meal = mealToCheck;
  },

  setPrice(priceToCheck) {
    if (typeof priceToCheck !== 'number') {
      console.error('Error: Price must be a number value!');
      return; 
    }
    this.price = priceToCheck;
  },

  getTodaysSpecial() {
    if (!this.meal || !this.price) {
      return 'Meal or price was not set correctly!';
    }
    return `Today's Special is ${this.meal} for $${this.price}!`;
  },
};

menu.meal = 123; 
menu.price = 'abc'; 

console.log(menu);

menu.setMeal('Spaghetti');
menu.setPrice(5);

console.log(menu); 

console.log(menu.getTodaysSpecial());