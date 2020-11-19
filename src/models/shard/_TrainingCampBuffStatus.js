export default (db, types) => db.define('_TrainingCampBuffStatus', {
    CampID: {
      type: types.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RecipientCharID: {
      type: types.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    BuffSlotIdx: {
      type: types.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    DonorCharID: {
      type: types.INTEGER,
      allowNull: false
    },
    StartingTime: {
      type: "SMALLDATETIME",
      allowNull: false,
      defaultValue: "2000-01-01"
    },
    RemainBuffPoint: {
      type: types.INTEGER,
      allowNull: false
    },
    BuffType: {
      type: types.TINYINT,
      allowNull: false
    }
  }, {
    sequelize: db,
    tableName: '_TrainingCampBuffStatus',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__TrainingCampBuffStatus",
        unique: true,
        fields: [
          { name: "CampID" },
          { name: "RecipientCharID" },
          { name: "BuffSlotIdx" },
        ]
      },
    ]
  });
