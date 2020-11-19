export default (db, types) => db.define('_StaticAvatar', {
    CharID: {
      type: types.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: '_Char',
        key: 'CharID'
      }
    },
    Param1: {
      type: types.INTEGER,
      allowNull: true
    },
    Param2: {
      type: types.INTEGER,
      allowNull: true
    },
    Param3: {
      type: types.INTEGER,
      allowNull: true
    },
    Param4: {
      type: types.INTEGER,
      allowNull: true
    },
    Param5: {
      type: types.INTEGER,
      allowNull: true
    },
    Param6: {
      type: types.INTEGER,
      allowNull: true
    },
    Param7: {
      type: types.INTEGER,
      allowNull: true
    },
    Param8: {
      type: types.INTEGER,
      allowNull: true
    },
    Param9: {
      type: types.INTEGER,
      allowNull: true
    },
    Param10: {
      type: types.INTEGER,
      allowNull: true
    },
    Param11: {
      type: types.INTEGER,
      allowNull: true
    },
    Param12: {
      type: types.INTEGER,
      allowNull: true
    },
    Param13: {
      type: types.INTEGER,
      allowNull: true
    },
    Param14: {
      type: types.INTEGER,
      allowNull: true
    },
    Param15: {
      type: types.INTEGER,
      allowNull: true
    },
    Param16: {
      type: types.INTEGER,
      allowNull: true
    }
  }, {
    sequelize: db,
    tableName: '_StaticAvatar',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__StaticAvatar",
        unique: true,
        fields: [
          { name: "CharID" },
        ]
      },
    ]
  });
