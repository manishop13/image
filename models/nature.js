var mongoose = require("mongoose");

var NatureSchema = new mongoose.Schema({
    title: String,
    source: String,
    description: String,
    location: String,
    lat: Number,
    lng: Number,
    created: {type: Date, default: Date.now},
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            usePushEach: true,
        },
        username: String
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment",
          
        }, {
            usePushEach: true
        }
            
          
        
    ]
});

module.exports = mongoose.model("Nature", NatureSchema);