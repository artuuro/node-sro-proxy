export default (db, types) => db.define('_TrainingCampHonorRankUpdateDate', {
    LastUpdateDate: {
      type: types.DATE,
      allowNull: true
    }
  }, {
    sequelize: db,
    tableName: '_TrainingCampHonorRankUpdateDate',
    schema: 'dbo',
    timestamps: false
  });
