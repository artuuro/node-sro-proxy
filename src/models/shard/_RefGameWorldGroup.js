export default (db, types) => db.define('_RefGameWorldGroup', {
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
      allowNull: false
    },
    ConfigGroupCodeName128: {
      type: types.STRING(129),
      allowNull: false
    }
  }, {
    sequelize: db,
    tableName: '_RefGameWorldGroup',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__RefGroupGameWorld",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
