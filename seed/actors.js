const db = require(`../db`);
const { Movie, Actor } = require(`../models`);

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const inception = await Movie.find({ title: "Inception" });
  const theMatrix = await Movie.find({ title: "The Matrix" });
  const interstellar = await Movie.find({ title: "Interstellar" });
  const theDarkKnight = await Movie.find({ title: "The Dark Knight" });
  const vForVendetta = await Movie.find({ title: "V for Vendetta" });

  const actors = [
    {
      name: "Leonardo DiCaprio",
      age: 36,
      isAlive: true,
      movie_id: inception[0]._id,
    },
    {
      name: "Joseph Gordon-Levitt",
      age: 29,
      isAlive: true,
      movie_id: inception[0]._id,
    },
    {
      name: "Keanu Reeves",
      age: 30,
      isAlive: true,
      movie_id: theMatrix[0]._id,
    },
    {
      name: "Laurence Fishburne",
      age: 45,
      isAlive: true,
      movie_id: theMatrix[0]._id,
    },
    {
      name: "Matthew McConaughey",
      age: 40,
      isAlive: true,
      movie_id: interstellar[0]._id,
    },
    {
      name: "Mackenzie Foy",
      age: 10,
      isAlive: true,
      movie_id: interstellar[0]._id,
    },
    {
      name: "Christian Bale",
      age: 35,
      isAlive: true,
      movie_id: theDarkKnight[0]._id,
    },
    {
      name: "Heath Ledger",
      age: 40,
      isAlive: false,
      movie_id: theDarkKnight[0]._id,
    },
    {
      name: "Hugo Weaving",
      age: 35,
      isAlive: true,
      movie_id: vForVendetta[0]._id,
    },
    {
      name: "Natalie Portman",
      age: 25,
      isAlive: true,
      movie_id: vForVendetta[0]._id,
    },
  ];

  await Actor.insertMany(actors);
  console.log("Created actors with movies!");
};
const run = async () => {
  await main();
  db.close();
};

run();
