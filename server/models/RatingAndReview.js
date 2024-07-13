const mongoose = require("mongoose");

const ratingAndReviewSchema = mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    rating : {
        type: Number,
    },
    review : {
        type: String,
    },
    course:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
    }
})

module.exports= mongoose.model ("RatingAndReview", ratingAndReviewSchema);