export default (db, types) => db.define('_RefTriggerCategory', {
    Service: {
      type: types.INTEGER,
      allowNull: false
    },
    ID: {
      autoIncrement: true,
      type: types.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CodeName128: {
      type: types.STRING(129),
      allowNull: false
    },
    ObjName128: {
      type: types.STRING(129),
      allowNull: true
    },
    IndexNumber: {
      type: types.INTEGER,
      allowNull: false
    }
  }, {
    sequelize: db,
    tableName: '_RefTriggerCategory',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__RefTriggerCategory",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
