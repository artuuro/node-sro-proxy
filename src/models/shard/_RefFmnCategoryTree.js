export default (db, types) => db.define('_RefFmnCategoryTree', {
    Service: {
      type: types.TINYINT,
      allowNull: false
    },
    CategoryName: {
      type: types.STRING(128),
      allowNull: false
    },
    StringID: {
      type: types.STRING(128),
      allowNull: false
    },
    ParentCategoryName: {
      type: types.STRING(128),
      allowNull: false
    },
    TidGroupID: {
      type: types.INTEGER,
      allowNull: false
    },
    Degree: {
      type: types.TINYINT,
      allowNull: false
    }
  }, {
    sequelize: db,
    tableName: '_RefFmnCategoryTree',
    schema: 'dbo',
    timestamps: false
  });
