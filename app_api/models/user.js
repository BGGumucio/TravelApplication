module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username : {
            type: DataTypes.STRING,
            allowNull : false,
            unique : true
        },
        password : {
            type: DataTypes.STRING,
            allowNull: false
        },
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        address: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        zipcode: DataTypes.INTEGER,
        type_of_user: DataTypes.INTEGER
    }, {
        classMethods: {
            associate : function(models) {
<<<<<<< HEAD
                User.hasMany(models.Tours, {
                onDelete : "CASCADE"
                })
=======
                User.hasMany(models.Tours);
>>>>>>> c80c6803dd118b30e948830f239c5854b5331a73
            }
        }
    });

    return User;
};
