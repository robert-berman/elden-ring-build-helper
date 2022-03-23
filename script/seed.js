"use strict";

const {
  db,
  models: { User },
} = require("../server/db");
const { getWeapons } = require("../server/Webscrape");
const filteredWeapons = [];
const axios = require("axios");
const cheerio = require("cheerio");
const Weapons = require("../server/db/models/Weapons");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all([
    User.create({ username: "cody", password: "123" }),
    User.create({ username: "murphy", password: "123" }),
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  await seed();
  try {
    await getWeapons(filteredWeapons);
    filteredWeapons.forEach((weapon, indx) => {
      try {
        setTimeout(async function () {
          let weaponName = weapon.toLowerCase();
          weaponName = weaponName.replace(/\s+/g, "-");
          weaponName = weaponName.replace("'", "");
          weaponName = weaponName.replace("é", "e");
          let url = `https://rankedboost.com/elden-ring/${weaponName}/`;
          await axios(url)
            .then((response) => {
              const html = response.data;
              const $ = cheerio.load(html);

              let list = [];
              $(".table-td-data-rb").each(function (index, element) {
                let el = $(element).text();
                list.push(el);
              });

              const stats = list.slice(1, 6);
              if (stats[0].length <= 3) {
                $(".class-image-header-css-title").each(function () {
                  let aUrl = $(this).attr("src");
                  aUrl = aUrl.replace(/\s+/g, "%20");
                  Weapons.create({
                    name: weapon,
                    imageUrl: aUrl,
                    str: stats[0],
                    dex: stats[1],
                    int: stats[2],
                    fth: stats[3],
                  });
                });
                console.log("...");
              }
            })
            .catch((err) => console.log(err));
        }, indx * 100);
      } catch (e) {
        console.log(e);
      }
    });
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    setTimeout(async function () {
      console.log("closing db connection");
      await db.close();
      console.log("db connection closed");
    }, 1000 * 60);
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
