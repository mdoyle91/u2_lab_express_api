const { Schema } = require(`mongoose`);

const Review = new Schema({
  movie_id: { type: Schema.Types.ObjectId, ref: `Movie` }, //child of movie
  score: { type: Number, required: true, min: 1, max: 5 }, //check this
  description: { type: String, required: true },
});

module.exports = Review;
