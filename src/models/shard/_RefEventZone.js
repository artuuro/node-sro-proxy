export default (db, types) => db.define('_RefEventZone', {
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
    ZoneName: {
      type: types.STRING(128),
      allowNull: false
    },
    EventName: {
      type: types.STRING(128),
      allowNull: false
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
    strParam1: {
      type: types.STRING(128),
      allowNull: true
    },
    strParam2: {
      type: types.STRING(128),
      allowNull: true
    },
    strParam3: {
      type: types.STRING(128),
      allowNull: true
    },
    strParam4: {
      type: types.STRING(128),
      allowNull: true
    },
    strParam5: {
      type: types.STRING(128),
      allowNull: true
    }
  }, {
    sequelize: db,
    tableName: '_RefEventZone',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__RefEventZone",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
