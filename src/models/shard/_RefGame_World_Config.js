export default (db, types) => db.define('_RefGame_World_Config', {
    Service: {
      type: types.INTEGER,
      allowNull: false
    },
    ID: {
      type: types.INTEGER,
      allowNull: false,
      autoIncrement: true
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
    tableName: '_RefGame_World_Config',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX__RefGame_World_Config",
        fields: [
          { name: "GroupCodeName128" },
        ]
      },
    ]
  });
