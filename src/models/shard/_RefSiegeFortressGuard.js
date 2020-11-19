export default (db, types) => db.define('_RefSiegeFortressGuard', {
    Service: {
      type: types.TINYINT,
      allowNull: false
    },
    FortressID: {
      type: types.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    GuardRefObjID: {
      type: types.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize: db,
    tableName: '_RefSiegeFortressGuard',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__RefSiegeFortressGuard",
        unique: true,
        fields: [
          { name: "FortressID" },
          { name: "GuardRefObjID" },
        ]
      },
    ]
  });
