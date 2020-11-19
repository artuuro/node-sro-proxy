export default (db, types) => db.define('_RefSiegeStructUpgrade', {
    Service: {
      type: types.TINYINT,
      allowNull: false
    },
    Structname: {
      type: types.STRING(129),
      allowNull: false
    },
    BaseStructcodename: {
      type: types.STRING(129),
      allowNull: false
    },
    UpgradeStructname1: {
      type: types.STRING(129),
      allowNull: false
    },
    UpgradeStructname2: {
      type: types.STRING(129),
      allowNull: false
    },
    UpgradeStructname3: {
      type: types.STRING(129),
      allowNull: false
    },
    UpgradeStructname4: {
      type: types.STRING(129),
      allowNull: false
    }
  }, {
    sequelize: db,
    tableName: '_RefSiegeStructUpgrade',
    schema: 'dbo',
    timestamps: false
  });
