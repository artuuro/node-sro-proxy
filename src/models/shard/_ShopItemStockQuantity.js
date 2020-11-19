export default (db, types) => db.define('_ShopItemStockQuantity', {
    Service: {
      type: types.TINYINT,
      allowNull: false
    },
    Country: {
      type: types.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    RefShopGroupCodeName: {
      type: types.STRING(129),
      allowNull: false,
      primaryKey: true
    },
    RefPackageItemCodeName: {
      type: types.STRING(129),
      allowNull: false,
      primaryKey: true
    },
    ConstStockQuantity: {
      type: types.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    StockQuantity: {
      type: types.SMALLINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize: db,
    tableName: '_ShopItemStockQuantity',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__ShopItemStockQuantity",
        unique: true,
        fields: [
          { name: "Country" },
          { name: "RefShopGroupCodeName" },
          { name: "RefPackageItemCodeName" },
        ]
      },
    ]
  });
