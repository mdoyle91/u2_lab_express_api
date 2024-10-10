const db = require(`../db`);
const { Movie, Review } = require(`../models`);

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const inception = await Movie.find({ title: "Inception" });
  const theMatrix = await Movie.find({ title: "The Matrix" });
  const interstellar = await Movie.find({ title: "Interstellar" });
  const theDarkKnight = await Movie.find({ title: "The Dark Knight" });
  const vForVendetta = await Movie.find({ title: "V for Vendetta" });

  const reviews = [
    {
      movie_id: inception[0]._id,
      score: 5,
      description:
        "Inception is a mind-bending thriller that keeps you on the edge of your seat. The layered storytelling is genius.",
    },
    {
      movie_id: inception[0]._id,
      score: 4,
      description:
        "A complex and visually stunning movie. The plot can be difficult to grasp, but it’s an unforgettable experience.",
    },
    {
      movie_id: theMatrix[0]._id,
      score: 5,
      description:
        "An absolute classic that redefined science fiction. The action scenes and philosophical themes are still relevant today.",
    },
    {
      movie_id: theMatrix[0]._id,
      score: 4,
      description:
        "Groundbreaking visual effects and a thought-provoking plot. A must-watch for anyone interested in dystopian worlds.",
    },
    {
      movie_id: interstellar[0]._id,
      score: 5,
      description:
        "A visually stunning journey through space and time. The emotional core of the story makes it more than just a sci-fi film.",
    },
    {
      movie_id: interstellar[0]._id,
      score: 4,
      description:
        "Beautiful cinematography and a complex plot. The film's ambition is admirable, though it can be hard to follow at times.",
    },
    {
      movie_id: theDarkKnight[0]._id,
      score: 5,
      description:
        "Heath Ledger's Joker steals the show in this dark, gripping superhero film. One of the best comic book adaptations ever made.",
    },
    {
      movie_id: theDarkKnight[0]._id,
      score: 5,
      description:
        "A masterpiece of storytelling, with intense performances and a riveting plot. The action sequences are top-notch.",
    },
    {
      movie_id: vForVendetta[0]._id,
      score: 4,
      description:
        "A bold, politically charged film that delivers a powerful message. The dystopian setting is eerily relevant today.",
    },
    {
      movie_id: vForVendetta[0]._id,
      score: 5,
      description:
        "An inspiring tale of revolution and freedom. Hugo Weaving's performance as V is captivating and unforgettable.",
    },
  ];

  await Review.insertMany(reviews);
  console.log("Created reviews with movies!");
};
const run = async () => {
  await main();
  db.close();
};

run();
