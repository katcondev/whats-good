const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const businessSchema = new Schema(
    {
        businessId: {
            type: String,
            required: true,
            unique: true
        },
        businessName: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },
        affiliation: {
            type: String,
            required: true,
            trim: true
        },
        businessType: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        zip: {
            type: String,
            required: true,
        },
        numOfEmployees: {
            type: String,
            required: true,
        },
        employeeDemo: {
            type: String,
            required: true,
        },
        customerDemo: {
            type: String,
            required: true,
        },
        starsRec: {
            type: String,
            required: true,
        },
        avgStarRate: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        }
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

const Business = model('Business', businessSchema);

module.exports = Business;