export default (db, types) => db.define('_RefSiegeQuestReward', {
    Service: {
      type: types.TINYINT,
      allowNull: false
    },
    QuestID: {
      type: types.INTEGER,
      allowNull: false
    },
    RewardType: {
      type: types.TINYINT,
      allowNull: false
    },
    RewardRefID: {
      type: types.INTEGER,
      allowNull: false
    },
    RewardValue: {
      type: types.INTEGER,
      allowNull: false
    }
  }, {
    sequelize: db,
    tableName: '_RefSiegeQuestReward',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_RefSiegeQuestReward_QuestID",
        fields: [
          { name: "QuestID" },
        ]
      },
    ]
  });
