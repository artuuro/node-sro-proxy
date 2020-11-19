export default (db, types) => db.define('_ServerEventReward', {
    ServerEventID: {
      type: types.INTEGER,
      allowNull: false
    },
    RewardID: {
      type: types.INTEGER,
      allowNull: false
    },
    RemainRewardTime: {
      type: types.INTEGER,
      allowNull: false
    }
  }, {
    sequelize: db,
    tableName: '_ServerEventReward',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_ServerEventReward_RewardID",
        fields: [
          { name: "RewardID" },
        ]
      },
      {
        name: "IX_ServerEventReward_ServerEventID",
        fields: [
          { name: "ServerEventID" },
        ]
      },
    ]
  });
