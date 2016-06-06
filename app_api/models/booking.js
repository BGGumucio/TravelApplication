module.exports = function(sequelize, DataTypes) {
    var Booking = sequelize.define("Booking", {

        user_id : {
            type: DataTypes.STRING,
            allowNull: false
        },
        tour_id : {
            type: DataTypes.STRING,
            allowNull: false
        },
        paid_status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date_of_booking: {
            type: DataTypes.STRING,
            allowNull: false
        },

    }, {
    	timestamps: false,
        classMethods: {
          //write the logic for the join table
        }
    });

    return Booking;
}
