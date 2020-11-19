export default (db, types) => db.define('_RefSiegeFortressItemForge', {
    Service: {
      type: types.TINYINT,
      allowNull: false
    },
    FortressID: {
      type: types.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RefItemID: {
      type: types.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ReqGold: {
      type: types.INTEGER,
      allowNull: false
    },
    ReqGP: {
      type: types.INTEGER,
      allowNull: false
    },
    ForgeTimeMin: {
      type: types.INTEGER,
      allowNull: false
    }
  }, {
    sequelize: db,
    tableName: '_RefSiegeFortressItemForge',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__RefSiegeFortressItemForge",
        unique: true,
        fields: [
          { name: "FortressID" },
          { name: "RefItemID" },
        ]
      },
    ]
  });
