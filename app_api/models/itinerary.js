module.exports = function(sequelize, DataTypes) {
    var Itinerary = sequelize.define("Itinerary", {
    		id: {
    		type: DataTypes.INTEGER,
    		primaryKey: true,
    		autoIncrement: true // Automatically gets converted to SERIAL for postgres
  		},
    		day: DataTypes.INTEGER,
    		description: DataTypes.STRING,
         	tour_id: DataTypes.INTEGER
        
    }, {
     	timestamps: false,
     	tableName : "Itinerary",
        classMethods: {
            associate : function(models) {
                Itinerary.belongsTo(models.Tour, {
                    onDelete : "CASCADE",
                    foreignKey : {
                    
                    	field : "tour_id",
                        allowNull : false // must be associated
                    }
                });
            }
        }
    });

    return Itinerary;


};
