export default (db, types) => db.define('_RefShopItemStockPeriod', {
    Service: {
      type: types.TINYINT,
      allowNull: false
    },
    Country: {
      type: types.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ID: {
      type: types.INTEGER,
      allowNull: false,
      autoIncrement: true
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
    StockOpeningDate: {
      type: "SMALLDATETIME",
      allowNull: false
    },
    StockExpireDate: {
      type: "SMALLDATETIME",
      allowNull: false
    },
    PeriodDevice: {
      type: types.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize: db,
    tableName: '_RefShopItemStockPeriod',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__RefShopItemStockQuantity",
        unique: true,
        fields: [
          { name: "Country" },
          { name: "RefShopGroupCodeName" },
          { name: "RefPackageItemCodeName" },
        ]
      },
    ]
  });
