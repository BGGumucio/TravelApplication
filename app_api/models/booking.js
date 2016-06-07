module.exports = function(sequelize, DataTypes) {
    var Booking = sequelize.define("Booking", {
		
		booking_id:{
			type: DataTypes.INTEGER,
			primaryKey: true,
        	autoIncrement: true,
        	allowNull: false
		},
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
        }

    }, {
    	timestamps: false,
        classMethods: {
          //write the logic for the join table
          associate : function(models) {
                Booking.belongsTo(models.Tour, {
                    onDelete : "CASCADE",
					foreignKey : {
                    
                    	field : "tour_id",
                        allowNull : false // must be associated
        			}
    			});		
                Booking.belongsTo(models.User, {
                    onDelete : "CASCADE",
                    foreignKey : {                    
                    	field : "user_id",
                        allowNull : false // must be associated
        			}    			
        		});
    		}
		}
	});
    return Booking;
};
