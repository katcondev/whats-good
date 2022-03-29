const {
    Schema,
    model
} = require('mongoose');
const moment = require('moment');

const BusinessSchema = new Schema({
    businesss_id: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    business_name: {
        type: String,
        required: true,
        trim: true
    },
    about: {
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
       num_of_employees: {
        type: String,
        required: true,
        trim: true
    },
       employee_demo: {
        type: String,
        required: true,
        trim: true
    },
      customer_demo: {
        type: String,
        required: true,
        trim: true
    },
      stars_received: {
        type: String,
        required: true,
        trim: true
    },
     avg_received: {
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

const Business = model('Business', BusinessSchema);

module.exports = User;