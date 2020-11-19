export default (db, types) => db.define('_RefSiegeFortressBattleRank', {
    Service: {
      type: types.TINYINT,
      allowNull: false
    },
    RankLvl: {
      type: types.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    RankName: {
      type: types.STRING(129),
      allowNull: false
    },
    ReqPKCount: {
      type: types.INTEGER,
      allowNull: false
    },
    BindedSkillID: {
      type: types.INTEGER,
      allowNull: false
    },
    CrestPath128: {
      type: types.STRING(129),
      allowNull: false
    }
  }, {
    sequelize: db,
    tableName: '_RefSiegeFortressBattleRank',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__RefSiegeFortressBattleRank",
        unique: true,
        fields: [
          { name: "RankLvl" },
        ]
      },
    ]
  });
