module.exports = function(sequelize, DataTypes) {
    var Tour = sequelize.define("Tour", {
        tour_name : DataTypes.STRING,
        map_image : DataTypes.STRING,
        tour_image : DataTypes.STRING,
        tour_description : DataTypes.STRING, 
        start_location : DataTypes.STRING,
        end_location : DataTypes.STRING,
        start_date : DataTypes.STRING,
        end_date : DataTypes.STRING
    }, {
     	timestamps: false,
        classMethods: {
            associate : function(models) {
                Tour.hasMany(models.Itinerary);
            }
        }
    });

    return Tour;


};
