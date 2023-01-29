const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var _db;

module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err, db) {
            // Verify we got a good "db" object
            if (db)
            {
                _db = db.db("ReactApp");
                console.log(db.collection.find( { field: { $size: 1 } } ));
                //console.log(_db.admin());
                console.log(_db.collection("sample_airbnb").items.length);
                console.log(_db.collections());
                console.log("Successfully connected to MongoDB.");

            }
            return callback(err);
        });
    },

    getDb: function () {
        return _db;
    },
};