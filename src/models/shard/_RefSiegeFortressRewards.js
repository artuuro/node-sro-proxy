export default (db, types) => db.define('_RefSiegeFortressRewards', {
    Service: {
      type: types.TINYINT,
      allowNull: false
    },
    FortressID: {
      type: types.INTEGER,
      allowNull: false,
      references: {
        model: '_RefSiegeFortress',
        key: 'FortressID'
      }
    },
    RewardTypeID: {
      type: types.TINYINT,
      allowNull: false
    },
    RewardValue: {
      type: types.INTEGER,
      allowNull: false
    },
    RewardCount: {
      type: types.TINYINT,
      allowNull: false
    }
  }, {
    sequelize: db,
    tableName: '_RefSiegeFortressRewards',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX__RefSiegeFortressRewards_FortressID",
        fields: [
          { name: "FortressID" },
        ]
      },
    ]
  });
