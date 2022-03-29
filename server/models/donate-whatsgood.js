const {
    Schema,
    model
} = require('mongoose');
const moment = require('moment');

const UserSchema = new Schema({
    customerid: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: [true, 'User email address required'],
        unique: true,
        validate: {
            validator: function (v) {
                return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        },
    },
      affiliation: {
        type: String,
        required: true,
        trim: true
    },
       affiliation: {
        type: String,
        required: true,
        trim: true
    },
      phone: {
        type: String,
        required: true,
        trim: true
    },
       street: {
        type: String,
        required: true,
        trim: true
    },
        city: {
        type: String,
        required: true,
        trim: true
    },
       zip: {
        type: String,
        required: true,
        trim: true
    },
       starsgiven: {
        type: String,
        required: true,
        trim: true
    },
       starsassoc: {
        type: String,
        required: true,
        trim: true
    },
    
    
    
    
}, {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;