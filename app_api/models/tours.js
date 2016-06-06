module.exports = function(sequelize, DataTypes) {
    var Tour = sequelize.define("Tour", {
        tour_name : DataTypes.STRING
    }, {
     	timestamps: false,
        classMethods: {
            // associate : function(models) {
//                 Tour.belongsTo(models.Booking, {
//                     onDelete : "CASCADE",
//                     foreignKey : {
//                         allowNull : false // must be associated
//                     }
//                 });
//             }
        }
    });

    return Tour;


};
