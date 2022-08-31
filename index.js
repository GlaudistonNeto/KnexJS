var database = require('./database');

// CREATE
/* var data = [
  {
    name: "GTA",
    price: 9.99
  },
  {
    name: "WoW",
    price: 23.97
  }
]

database.insert(data).into("games").then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
}); */

// SELECT
/*
database.select(['id', 'price']).table('games').then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
});
*/

// NESTED QUERY
database.insert({ name: "Mists of noyah", price: 25.00 }).into("games")
  .then(data => {
    database.select(['id', 'price']).table('games').then(data => {
  console.log(data);
    });
}).catch(err => {
  console.log(err);
});
