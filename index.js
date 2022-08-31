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
// database.insert({ name: "Mists of noyah", price: 25.00 }).into("games")
//   .then(data => {
//     database.select(['id', 'price']).table('games').then(data => {
//   console.log(data);
//     });
// }).catch(err => {
//   console.log(err);
// });

/* WHERE
database.select(["id","price"])
            .whereRaw( "name = 'Mists of noyah' OR price > 50" )
            .table("games").then(data => {
              console.log(data);
            }).catch(err => {
              console.log(err);
            });
*/

/* RAW
database.raw("SELECT * FROM games").then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
});
*/

/* DELETE
database.where({ id: 3 }).delete().table("games").then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
});
*/

/* UPDATE
database.where({ id: 1 }).update({ price: 49.90, name: 'Sea of Thieves' })
        .table("games").then(data => {
          console.log(data);
        }).catch(err => {
          console.log(err);
        });
*/
