const { Schema } = require(`mongoose`);

const Actor = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    isAlive: { type: Boolean, required: true },
    movie_id: { type: Schema.Types.ObjectId, ref: `Movie` },
    // image: Complete if time permits
  },
  { timestamps: true }
);

module.exports = Actor;
