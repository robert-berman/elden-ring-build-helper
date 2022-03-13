const axios = require('axios');
const cheerio = require('cheerio');

const getWeapons = async (filteredWeapons) => {
  const url = 'https://rankedboost.com/elden-ring/weapons/';
  await axios(url)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const weapons = [];

      $('.tier-list-object-name-table-css', html).each(function () {
        const name = $(this).text();
        weapons.push({
          name,
        });
      });

      weapons.forEach((weapon, idx) => {
        if (idx % 2 === 0) {
          filteredWeapons.push(weapon.name);
        }
      });

      console.log('...');
    })
    .catch((err) => console.log(err));
};

const getWeaponStats = async (weapon, statsArray) => {
  let weaponName = weapon.toLowerCase();
  weaponName = weaponName.replace(/\s+/g, '-');
  weaponName = weaponName.replace("'", '');
  weaponName = weaponName.replace('é', 'e');
  let url = `https://rankedboost.com/elden-ring/${weaponName}/`;
  await axios(url)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);

      let list = [];
      $('.table-td-data-rb').each(function (index, element) {
        let el = $(element).text();
        list.push(el);
      });

      const stats = list.slice(1, 6);
      if (stats[0].length <= 3) {
        $('.class-image-header-css-title').each(function () {
          let aUrl = $(this).attr('src');
          aUrl = aUrl.replace(/\s+/g, '%20');
          statsArray.push({
            name: weapon,
            imageUrl: aUrl,
            str: stats[0],
            dex: stats[1],
            int: stats[2],
            fth: stats[3],
          });
        });
        console.log('...');
      }
    })
    .catch((err) => console.log(err));
};

module.exports = {
  getWeapons,
  getWeaponStats,
};
