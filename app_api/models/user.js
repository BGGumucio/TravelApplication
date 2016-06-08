module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username : {
        	primaryKey: true,
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
    	underscored: true,
       	timestamps: false,
        classMethods: {
            associate : function(models) {
                User.hasMany(models.Booking);
            }
        }
    });

    return User;
};
