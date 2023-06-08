const mongoose = require("mongoose")

const channelSchema = new mongoose.Schema({
    event_name:{
        type: String,
        // required: true,
        trim: true

    },
    event_description:{
        type: String,
        // required: true,
        trim: true

    },
    event_date: {
        type: Date,
        // required: true,
        trim: true

    },
    invitees : {
        type: String,
        // required: true,
        trim: true

    },
    location : {
        type: String,
        // required: true,
        trim: true

    },
    message : {
        type: String,
        // required: true,
        trim: true

    },
    link : {
        type: String,
        // required: true,
        trim: true

    },
    poster: {
        type: String
    }
});

const ChannelModel = mongoose.model("channel", channelSchema)

module.exports = ChannelModel