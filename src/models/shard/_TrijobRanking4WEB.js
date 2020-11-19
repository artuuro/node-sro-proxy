export default (db, types) => db.define('_TrijobRanking4WEB', {
    TrijobType: {
      type: types.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    RankType: {
      type: types.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    Rank: {
      type: types.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    NickName: {
      type: types.STRING(64),
      allowNull: false
    },
    JobLevel: {
      type: types.TINYINT,
      allowNull: false
    },
    JobData: {
      type: types.INTEGER,
      allowNull: false
    },
    IsNewEntry: {
      type: types.TINYINT,
      allowNull: false
    },
    RankDelta: {
      type: types.SMALLINT,
      allowNull: false
    },
    Country: {
      type: types.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize: db,
    tableName: '_TrijobRanking4WEB',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX__TrijobRanking4WEB",
        fields: [
          { name: "NickName" },
        ]
      },
      {
        name: "PK__TrijobRanking4WEB",
        unique: true,
        fields: [
          { name: "TrijobType" },
          { name: "RankType" },
          { name: "Rank" },
        ]
      },
    ]
  });
