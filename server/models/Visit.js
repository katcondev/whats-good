const { Schema, model } = require('mongoose');
const moment = require('moment');

//import schema from 
const VisitSchema = new Schema({
    visit_id: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    visit_date: {
        type: String,
        required: true,
        trim: true
    },
    visit_time: {
        type: String,
        required: true,
        trim: true
    },

    num_of_visits: {
        type: String,
        required: true,
        trim: true
    },
    num_of_stars: {
        type: String,
        required: true,
        trim: true
    },
    num_of_patrons: {
        type: String,
        required: true,
        trim: true
    }
}, {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

// UserSchema.virtual('friendCount').get(function () {
//     return this.friends.length;
// });

const Ratings = model('Visit', VisitSchema);

module.exports = Visit;