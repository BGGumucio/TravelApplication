module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        email : {
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
<<<<<<< HEAD
            associate : function(models) {
                User.hasMany(models.Tours)
            }
=======

>>>>>>> 5903dfb6e78d374fe5cabdc4522700c9d3a89d50
        }
    });

    return User;
}
