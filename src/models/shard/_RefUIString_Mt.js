export default (db, types) => db.define('_RefUIString_Mt', {
    ID: {
      autoIncrement: true,
      type: types.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    GroupCodeName128: {
      type: types.STRING(129),
      allowNull: false
    },
    ValueCodeName128: {
      type: types.STRING(129),
      allowNull: false
    },
    Value: {
      type: types.STRING(513),
      allowNull: false
    },
    Type: {
      type: types.STRING(20),
      allowNull: false
    }
  }, {
    sequelize: db,
    tableName: '_RefUIString_Mt',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__RefDesignString_Mt",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
