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

/* ORDERBY
database.select().table("games").orderBy("name", "asc").then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
});
*/

/* 1 - 1 relation (join)
database.select(["games.*", "studios.name as studio_name"])
        .table("games")
        .where("game_id", 5)
        .innerJoin("studios", "studios.game_id", "games.id").then(data => {
          console.log(data);
        }).catch(err => {
          console.log(err);
        });
*/

/* 1 - M relation (join)
database.select(["games.*", "studios.name as studio_name"])
        .table("games")
        .where("game_id", 5)
        .innerJoin("studios", "studios.game_id", "games.id").then(data => {
          var studioGamesArray = data;
          var game = {
            id: 0,
            name: "",
            studios: [],
          }
          game.id = data[0].id;
          game.name = data[0].name;

          data.forEach(studio => {
            game.studios.push({ name: studio.studio_name });
          });
          console.log(game);
        }).catch(err => {
          console.log(err);
        });
*/

/* 1 - M relation (multiple join)
database.select([
  "studios.name as studio_name",
  "games.name as game_name"
])
        .table("games_studios")
        .innerJoin("games", "games.id", "games_studios.game_id",)
        .innerJoin("studios", "studios.id", "games_studios.studio_id",)
        .where("game_id", 4)
        .then(data => {
          console.log(data);
        }).catch(err => {
          console.log(err);
        });
*/

async function testTransaction() {
  try {
    await database.transaction(async trans => {
      await database.insert({ name: "Unknown Studios" }).table("studios");
      await database.insert({ name: "Mojang" }).table("studios");
      await database.insert({ name: "Gearbox" }).table("studios");
    });
  } catch(err) {
    console.log(err);
  }
}

testTransaction();
