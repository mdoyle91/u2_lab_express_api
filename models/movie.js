const { Schema } = require(`mongoose`);

const Movie = new Schema(
  {
    title: { type: String, required: true },
    run_time: { type: Number, required: true },
    rating: { type: String, required: true },
    year_released: { type: Number, required: true },
    description: { type: String, required: true },
    //Add Image if time permits
  },
  { timestamps: true }
);

module.exports = Movie;
