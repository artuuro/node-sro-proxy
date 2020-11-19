export default (db, types) => db.define('_RefGameWorldNPC', {
    ID: {
      type: types.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    WorldCodeName128: {
      type: types.STRING(129),
      allowNull: false
    },
    NPCCodeName128: {
      type: types.STRING(129),
      allowNull: false
    },
    RegionID: {
      type: types.SMALLINT,
      allowNull: false
    },
    PosX: {
      type: types.SMALLINT,
      allowNull: false
    },
    PosY: {
      type: types.SMALLINT,
      allowNull: false
    },
    PosZ: {
      type: types.SMALLINT,
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
    }
  }, {
    sequelize: db,
    tableName: '_RefGameWorldNPC',
    schema: 'dbo',
    timestamps: false
  });
