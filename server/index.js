const { db } = require("./db");
const app = require("./app");
const seed = require("../script/seed");

const init = async () => {
  try {
    if (process.env.SEED === "true") {
      await seed();
    } else {
      await db.sync();
    }
    // start listening (and create a 'server' object representing our server)
    app.listen(process.env.PORT || 5000, () =>
      console.log(`Mixing it up on port ${5000}`)
    );
  } catch (ex) {
    console.log(ex);
  }
};

init();
