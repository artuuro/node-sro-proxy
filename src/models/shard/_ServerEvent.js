export default (db, types) => db.define('_ServerEvent', {
    ID: {
      type: types.INTEGER,
      allowNull: false
    },
    CompletionValue: {
      type: types.INTEGER,
      allowNull: false
    },
    AchievementCondition: {
      type: types.INTEGER,
      allowNull: false
    },
    ProgressCount: {
      type: types.INTEGER,
      allowNull: false
    }
  }, {
    sequelize: db,
    tableName: '_ServerEvent',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_ServerEvent",
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
