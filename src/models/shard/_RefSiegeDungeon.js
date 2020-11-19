export default (db, types) => db.define('_RefSiegeDungeon', {
    Service: {
      type: types.TINYINT,
      allowNull: false
    },
    FortressID: {
      type: types.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    WorldID: {
      type: types.INTEGER,
      allowNull: false
    },
    MaxCreateCount: {
      type: types.TINYINT,
      allowNull: false
    },
    EntryGold: {
      type: types.BIGINT,
      allowNull: false
    },
    EntryGP: {
      type: types.INTEGER,
      allowNull: false
    }
  }, {
    sequelize: db,
    tableName: '_RefSiegeDungeon',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK___RefSiegeDungeon__7299BEDD",
        unique: true,
        fields: [
          { name: "FortressID" },
        ]
      },
    ]
  });
