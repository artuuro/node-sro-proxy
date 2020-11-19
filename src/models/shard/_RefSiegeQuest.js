export default (db, types) => db.define('_RefSiegeQuest', {
    Service: {
      type: types.TINYINT,
      allowNull: false
    },
    QuestID: {
      autoIncrement: true,
      type: types.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    QuestName: {
      type: types.STRING(129),
      allowNull: false
    },
    QuestType: {
      type: types.TINYINT,
      allowNull: false
    },
    RewardConditionTargetCount: {
      type: types.TINYINT,
      allowNull: false
    },
    IsAccumulation: {
      type: types.TINYINT,
      allowNull: false
    }
  }, {
    sequelize: db,
    tableName: '_RefSiegeQuest',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_RefSiegeQuest_QuestName",
        fields: [
          { name: "QuestName" },
        ]
      },
      {
        name: "PK___RefSiegeQuest__78529833",
        unique: true,
        fields: [
          { name: "QuestID" },
        ]
      },
    ]
  });
