const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookGenre = new Schema({
    name: {
        type: String,
        required: true,
        maxLength: 100
    }
})

// Virtual for bookgenre's URL
BookGenre.virtual("url").get(function () {
    // We don't use an arrow function as we'll need the this object
    return `/catalog/genre/${this._id}`;
  });

  module.exports = mongoose.model("Genre", BookGenre);