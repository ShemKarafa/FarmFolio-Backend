let cows = require('./db');

function getCows() {
 return cows;
}

function getCowById(id) {
 return cows.find(cow=> cow.id === id);
}

function updateCow(id, newData) {
 const index = cows.findIndex(cow => cow.id === id);
 if (index !== -1) {
   cows[index] = { ...cows[index], ...newData };
   return cows[index];
 }
 return null;
}