export default (db, types) => db.define('_RefShopObject', {
    ID: {
      autoIncrement: true,
      type: types.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CodeName128: {
      type: types.STRING(129),
      allowNull: false
    }
  }, {
    sequelize: db,
    tableName: '_RefShopObject',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__RefShopObject",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
