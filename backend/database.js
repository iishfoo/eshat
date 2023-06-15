const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect("mongodb+srv://fyp:fyp123@cluster0.4npa2es.mongodb.net/fypproject",
        {
            useNewUrlParser: true

        }).then((data) => {
            console.log(`Mongodb is connected with the server: ${data.connection.host}`);
        }).catch((err) => {
            console.log(err);
        })
}

module.exports = connectDatabase;