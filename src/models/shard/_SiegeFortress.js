export default (db, types) => db.define('_SiegeFortress', {
    FortressID: {
      type: types.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    GuildID: {
      type: types.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: '_Guild',
        key: 'ID'
      }
    },
    TaxRatio: {
      type: types.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    Tax: {
      type: types.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    NPCHired: {
      type: types.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    TempGuildID: {
      type: types.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    Introduction: {
      type: types.STRING(120),
      allowNull: true
    },
    CreatedDungeonTime: {
      type: types.DATE,
      allowNull: true
    },
    CreatedDungeonCount: {
      type: types.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    IntroductionModificationPermission: {
      type: types.TINYINT,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize: db,
    tableName: '_SiegeFortress',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX__SiegeFortress",
        fields: [
          { name: "GuildID" },
        ]
      },
      {
        name: "PK__SiegeFortress",
        unique: true,
        fields: [
          { name: "FortressID" },
        ]
      },
    ]
  });
