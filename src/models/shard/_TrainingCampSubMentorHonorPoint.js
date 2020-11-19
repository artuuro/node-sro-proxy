export default (db, types) => db.define('_TrainingCampSubMentorHonorPoint', {
    CharID: {
      type: types.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: '_Char',
        key: 'CharID'
      }
    },
    HonorPoint: {
      type: types.INTEGER,
      allowNull: false
    }
  }, {
    sequelize: db,
    tableName: '_TrainingCampSubMentorHonorPoint',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__TrainingCampSubMentorHonorPoint",
        unique: true,
        fields: [
          { name: "CharID" },
        ]
      },
    ]
  });
