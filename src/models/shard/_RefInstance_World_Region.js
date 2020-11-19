export default (db, types) => db.define('_RefInstance_World_Region', {
    WorldID: {
      type: types.INTEGER,
      allowNull: false
    },
    RegionID: {
      type: types.SMALLINT,
      allowNull: false
    }
  }, {
    sequelize: db,
    tableName: '_RefInstance_World_Region',
    schema: 'dbo',
    timestamps: false
  });
