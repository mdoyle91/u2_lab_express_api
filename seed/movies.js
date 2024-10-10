const db = require(`../db`);
const { Movie } = require(`../models`);

db.on(`error`, console.error.bind(console, `MongoDB connection error:`));

const main = async () => {
  const movies = [
    {
      title: "V for Vendetta",
      run_time: 132,
      rating: "R",
      year_released: 2006,
      description:
        "In a future British dystopian society, a shadowy freedom fighter, known only by the alias of 'V', plots to overthrow the tyrannical government - with the help of a young woman.",
      // image: Complete if time permits
    },
    {
      title: "The Dark Knight",
      run_time: 152,
      rating: "PG-13",
      year_released: 2008,
      description:
        "When a menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman, James Gordon and Harvey Dent must work together to put an end to the madness.",
      // image: Complete if time permits
    },
    {
      title: "Inception",
      run_time: 148,
      rating: "PG-13",
      year_released: 2010,
      description:
        "A skilled thief is given a chance at redemption if he can successfully plant an idea in someone's subconscious.",
      // image: Complete if time permits
    },
    {
      title: "The Matrix",
      run_time: 136,
      rating: "R",
      year_released: 1999,
      description:
        "A hacker discovers that reality is a simulated construct controlled by machines and joins a rebellion to free humanity.",
      // image: Complete if time permits
    },
    {
      title: "Interstellar",
      run_time: 169,
      rating: "PG-13",
      year_released: 2014,
      description:
        "A team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival.",
      // image: Complete if time permits
    },
  ];

  await Movie.insertMany(movies);

  console.log(`Created movies!`);
};

const run = async () => {
  await main();

  db.close();
};

run();
