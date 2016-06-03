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
}
