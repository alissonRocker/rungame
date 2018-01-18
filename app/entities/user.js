// app/entities/user.js
const bcrypt = require("bcrypt-nodejs");

module.exports = function() {
    const User = {
        save: function(data) {
            const newUser = {
                username: data.username,
                login: data.login,
                password: bcrypt.hashSync(data.password)
            };

            db("user")
                .insert(user)
                .then((ids) => {
                    newUser.id = ids[0];                 
                    return newUser;
                });
        },
        find: function(id) {
            db("user")
                .where({"id": id})
                .first()
                .then((users) => {
                    if(!users) return {};
                    return users;
                });
        },
        findAll: function() {
            db("user")
                .then((users) => {
                    return users;
                });
        },
        delete: function(id) {
            db("user")
                .where({"id": id})
                .delete()
                .then((result) => {
                    if(result === 0) return false;
                    return true;
                });
        }
    };

    return User;
}
