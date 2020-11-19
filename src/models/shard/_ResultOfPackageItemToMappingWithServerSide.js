export default (db, types) => db.define('_ResultOfPackageItemToMappingWithServerSide', {
    Operation: {
      type: types.TINYINT,
      allowNull: false
    },
    CharID: {
      type: types.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Slot: {
      type: types.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RefItemSerial64: {
      type: types.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    RefItemDBID: {
      type: types.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    RefItemID: {
      type: types.INTEGER,
      allowNull: false
    },
    Type: {
      type: types.TINYINT,
      allowNull: false
    },
    SubType: {
      type: types.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize: db,
    tableName: '_ResultOfPackageItemToMappingWithServerSide',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__ResultOfPackageItemToMappingWithServerSide",
        unique: true,
        fields: [
          { name: "CharID" },
          { name: "Slot" },
          { name: "RefItemSerial64" },
          { name: "RefItemDBID" },
        ]
      },
    ]
  });
