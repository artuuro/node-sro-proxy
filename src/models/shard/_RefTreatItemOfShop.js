export default (db, types) => db.define('_RefTreatItemOfShop', {
    Service: {
      type: types.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    Country: {
      type: types.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: '_RefShopObject',
        key: 'ID'
      },
      unique: "IX__RefTreatItemOfShop"
    },
    RefShopCodeName: {
      type: types.STRING(129),
      allowNull: false,
      defaultValue: "(0)",
      unique: "IX__RefTreatItemOfShop"
    },
    Cash: {
      type: types.TINYINT,
      allowNull: false,
      defaultValue: 0,
      unique: "IX__RefTreatItemOfShop"
    },
    TypeID1: {
      type: types.TINYINT,
      allowNull: false,
      defaultValue: 0,
      unique: "IX__RefTreatItemOfShop"
    },
    TypeID2: {
      type: types.TINYINT,
      allowNull: false,
      defaultValue: 0,
      unique: "IX__RefTreatItemOfShop"
    },
    TypeID3: {
      type: types.TINYINT,
      allowNull: false,
      defaultValue: 0,
      unique: "IX__RefTreatItemOfShop"
    },
    TypeID4: {
      type: types.TINYINT,
      allowNull: false,
      defaultValue: 0,
      unique: "IX__RefTreatItemOfShop"
    },
    RefItemCodeName: {
      type: types.STRING(129),
      allowNull: false,
      unique: "IX__RefTreatItemOfShop"
    },
    AcceptOrReject: {
      type: types.TINYINT,
      allowNull: false,
      defaultValue: 0,
      unique: "IX__RefTreatItemOfShop"
    },
    FourCC: {
      type: types.INTEGER,
      allowNull: false,
      defaultValue: 0,
      unique: "IX__RefTreatItemOfShop"
    },
    Param1: {
      type: types.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    Param1_Desc128: {
      type: types.STRING(129),
      allowNull: false,
      defaultValue: "xxx"
    },
    Param2: {
      type: types.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    Param2_Desc128: {
      type: types.STRING(129),
      allowNull: false,
      defaultValue: "xxx"
    },
    Param3: {
      type: types.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    Param3_Desc128: {
      type: types.STRING(129),
      allowNull: false,
      defaultValue: "xxx"
    },
    Param4: {
      type: types.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    Param4_Desc128: {
      type: types.STRING(129),
      allowNull: false,
      defaultValue: "xxx"
    }
  }, {
    sequelize: db,
    tableName: '_RefTreatItemOfShop',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX__RefTreatItemOfShop",
        unique: true,
        fields: [
          { name: "Country" },
          { name: "RefShopCodeName" },
          { name: "Cash" },
          { name: "TypeID1" },
          { name: "TypeID2" },
          { name: "TypeID3" },
          { name: "TypeID4" },
          { name: "RefItemCodeName" },
          { name: "AcceptOrReject" },
          { name: "FourCC" },
        ]
      },
    ]
  });
