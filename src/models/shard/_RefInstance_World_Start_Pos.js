export default (db, types) => db.define('_RefInstance_World_Start_Pos', {
    WorldID: {
      type: types.INTEGER,
      allowNull: false
    },
    RegionID: {
      type: types.SMALLINT,
      allowNull: false
    },
    PosX: {
      type: types.INTEGER,
      allowNull: false
    },
    PosY: {
      type: types.INTEGER,
      allowNull: false
    },
    PosZ: {
      type: types.INTEGER,
      allowNull: false
    },
    Param: {
      type: types.INTEGER,
      allowNull: true
    }
  }, {
    sequelize: db,
    tableName: '_RefInstance_World_Start_Pos',
    schema: 'dbo',
    timestamps: false
  });
