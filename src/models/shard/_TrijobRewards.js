export default (db, types) => db.define('_TrijobRewards', {
    JobType: {
      type: types.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    Reward: {
      type: types.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize: db,
    tableName: '_TrijobRewards',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__TrijobRewards",
        unique: true,
        fields: [
          { name: "JobType" },
        ]
      },
    ]
  });
