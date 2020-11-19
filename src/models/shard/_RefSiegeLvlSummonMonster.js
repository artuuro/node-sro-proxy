export default (db, types) => db.define('_RefSiegeLvlSummonMonster', {
    Service: {
      type: types.TINYINT,
      allowNull: false
    },
    RefObjID: {
      type: types.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RefOrgObjID: {
      type: types.INTEGER,
      allowNull: false
    }
  }, {
    sequelize: db,
    tableName: '_RefSiegeLvlSummonMonster',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__RefSiegeLvlSummonMonster",
        unique: true,
        fields: [
          { name: "RefObjID" },
        ]
      },
    ]
  });
