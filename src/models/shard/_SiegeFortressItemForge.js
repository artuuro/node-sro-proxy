export default (db, types) => db.define('_SiegeFortressItemForge', {
    FortressID: {
      type: types.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: '_SiegeFortress',
        key: 'FortressID'
      }
    },
    ItemRefID: {
      type: types.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Amount: {
      type: types.SMALLINT,
      allowNull: false,
      defaultValue: 1
    },
    Finished: {
      type: types.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    StartDate: {
      type: types.DATE,
      allowNull: false
    },
    FinishDate: {
      type: types.DATE,
      allowNull: false
    }
  }, {
    sequelize: db,
    tableName: '_SiegeFortressItemForge',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__SiegeFortressItemForge",
        unique: true,
        fields: [
          { name: "FortressID" },
          { name: "ItemRefID" },
        ]
      },
    ]
  });
