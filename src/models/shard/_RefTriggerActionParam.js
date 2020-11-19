export default (db, types) => db.define('_RefTriggerActionParam', {
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
    GroupCodeName128: {
      type: types.STRING(129),
      allowNull: false
    },
    ValueCodeName128: {
      type: types.STRING(129),
      allowNull: false
    },
    Value: {
      type: types.STRING(129),
      allowNull: false
    },
    Type: {
      type: types.STRING(20),
      allowNull: false
    }
  }, {
    sequelize: db,
    tableName: '_RefTriggerActionParam',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__RefTriggerActionParam",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
