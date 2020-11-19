export default (db, types) => db.define('_TrainingCampHonorRank', {
    Ranking: {
      type: types.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CampID: {
      type: types.INTEGER,
      allowNull: true
    },
    Rank: {
      type: types.TINYINT,
      allowNull: true
    }
  }, {
    sequelize: db,
    tableName: '_TrainingCampHonorRank',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__TrainingCampHonorRank",
        unique: true,
        fields: [
          { name: "Ranking" },
        ]
      },
    ]
  });
