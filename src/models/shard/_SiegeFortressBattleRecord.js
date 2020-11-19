export default (db, types) => db.define('_SiegeFortressBattleRecord', {
    FortressID: {
      type: types.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: '_SiegeFortress',
        key: 'FortressID'
      }
    },
    CharID: {
      type: types.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    KillCount: {
      type: types.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    KilledCount: {
      type: types.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    RankUpDate: {
      type: types.DATE,
      allowNull: false
    },
    CurRank: {
      type: types.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize: db,
    tableName: '_SiegeFortressBattleRecord',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__SiegeFortressBattleRecord",
        unique: true,
        fields: [
          { name: "FortressID" },
          { name: "CharID" },
        ]
      },
    ]
  });
