const username = [
  'SavoryChef',
  'FlavorfulFoodie',
  'CulinaryDelight',
  'GourmetGuru',
  'SpiceMaster',
  'TastyCravings',
  'KitchenWhiz',
  'CooksPassion',
  'FoodFusionist',
  'RecipeExplorer',
  'GastronomyGeek',
  'ChefSupreme',
  'FlavorHunter',
  'YummyEats',
  'CookingEnthusiast',
  'DelishDishes',
  'EpicureanSoul',
  'FoodieAdventurer',
  'FlavorFanatic',
  'MasterOfCuisine',
];

const thoughtText = [
  "Cooking is my creative outlet, where flavors come alive.",
  "Food has a way of bringing people together like nothing else.",
  "Experimenting with spices and herbs is my secret to culinary magic.",
  "Cooking is not just a chore; it's a delightful journey of flavors.",
  "A well-cooked meal is an expression of love and care.",
  "In the kitchen, mistakes are just opportunities to create something new.",
  "The sizzle of ingredients in a hot pan makes my heart skip a beat.",
  "Cooking allows me to travel the world through my taste buds.",
  "Food is an art form, and the kitchen is my canvas.",
  "The best recipes are the ones passed down through generations.",
  "Cooking is my therapy; the process calms my mind and nourishes my soul.",
  "The kitchen is where my creativity takes flight, one dish at a time.",
  "I love how cooking connects me to different cultures and traditions.",
  "A well-seasoned dish is a symphony of flavors dancing on my tongue.",
  "Cooking teaches patience and the art of perfect timing.",
  "Food is the language that transcends barriers and unites people.",
  "The aroma of a dish cooking fills my home with warmth and comfort.",
  "Cooking is an adventure; every recipe is a chance to explore new tastes.",
  "The satisfaction of creating a delicious meal from scratch is unmatched.",
  "Cooking is a lifelong journey; there's always something new to learn and discover.",
];

const reactionBody = [
  'Excited',
  'Delicious',
  'Inspiring',
  'Mouthwatering',
  'Yummy',
  'Satisfying',
  'Creative',
  'Impressive',
  'Nostalgic',
  'Tasty',
  'Comforting',
  'Aromatic',
  'Heavenly',
  'Playful',
  'Impressed',
  'Exquisite',
  'Scrumptious',
  'Joyful',
  'Flavorful',
  'Addictive',
];

// formatDate function takes a timestamp as a parameter and converts it into a formatted string representation of the date and time.
function formatDate(timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}


// Export the functions for use in seed.js
module.exports = formatDate;
