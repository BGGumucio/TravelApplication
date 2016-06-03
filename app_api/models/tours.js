module.exports = function(sequelize, DataTypes) {
    var Tour = sequelize.define("Tours", {
        title : DataTypes.STRING
    }, {
        classMethods: {
            associate : function(models) {
                Tour.belongsTo(models.User, {
                    onDelete : "CASCADE",
                    foreignKey : {
                        allowNull : false // must be associated
                    }
                });
            }
        }
    });

    return Tour;
<<<<<<< HEAD
}
=======
};
>>>>>>> c80c6803dd118b30e948830f239c5854b5331a73
