export default (db, types) => db.define('_RefFmnTidGroup', {
    TidGroupID: {
      type: types.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    TidGroupName: {
      type: types.STRING(128),
      allowNull: false
    }
  }, {
    sequelize: db,
    tableName: '_RefFmnTidGroup',
    schema: 'dbo',
    timestamps: false
  });
