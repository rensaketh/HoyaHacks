const mongoose = require('mongoose');

const Model = mongoose.Schema;

const airbnbSchema = new Model({
    id: { type: String, required: true,unique: true },
    listing_url: { type: String, required: true },
    name: { type: String, required: true },
    summary: { type: String, required: true },
}, {
    timestamps: true,
});

const Airbnb = mongoose.model('Airbnb', airbnbSchema);

module.exports = Airbnb;