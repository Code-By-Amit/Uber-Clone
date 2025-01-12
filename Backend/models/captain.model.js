const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            require: true,
            minlength: [3, "First name Should be at least 3 character long"]
        },
        lastname: {
            type: String,
            minlength: [3, "Last name Should be at least 3 character long"]
        }
    },
    email: {
        type: String,
        require: true,
        unique: true,
        minlength: [3, "Email Should be at least 3 character long"]
    },
    password: {
        type: String,
        require: true
    },
    scoketId: {
        type: String,
    },

    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },

    vehicle: {
        color: {
            type: String,
            requied: true,
            minlength: [2, "color must be at least 3 character long"]
        },
        plate: {
            type: String,
            require: true,
            unique: true
        },
        capacity: {
            type: Number,
            require: true,
            min: [1, "Capicity must be at least 1"]
        },
        vehicleType: {
            type: String,
            require: true,
            enum: ['bike', 'car', 'auto']
        }
    },

    location: {
        lat: {
            type: Number
        },
        lng: {
            type: Number
        }
    }
});

captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

captainSchema.methods.comparePassword =async function(password){
    return await bcrypt.compare(password,this.password);
}

captainSchema.statics.hashPassword = async function(password) {
    return bcrypt.hash(password,10);
}

module.exports = mongoose.model("captain",captainSchema)