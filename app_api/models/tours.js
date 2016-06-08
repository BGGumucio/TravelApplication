module.exports = function(sequelize, DataTypes) {
    var Tour = sequelize.define("Tour", {
        tour_name : DataTypes.STRING,
        map_image : DataTypes.STRING,
        num_avail : DataTypes.INTEGER,
        tour_image : DataTypes.STRING,
        tour_description : DataTypes.STRING,
        start_location : DataTypes.STRING,
        end_location : DataTypes.STRING,
        cost: DataTypes.STRING,
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
