var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');
const user = require(__dirname + '/userModel.js');

module.exports = function (username, password, authenticationResponse) {
    var res =  user.findOne({name: username}, (error, userDoc) => {
        if (error) throw error;

        if (userDoc.name != username || userDoc.password != password) {
            console.log('false');
            return authenticationResponse(false);

            
        }
        return authenticationResponse(true);
    });
};