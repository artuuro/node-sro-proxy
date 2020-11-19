export default (db, types) => db.define('_RefShopGroup', {
    Service: {
      type: types.TINYINT,
      allowNull: false
    },
    Country: {
      type: types.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      references: {
        model: '_RefShopObject',
        key: 'ID'
      }
    },
    ID: {
      autoIncrement: true,
      type: types.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    CodeName128: {
      type: types.STRING(129),
      allowNull: false
    },
    RefNPCCodeName: {
      type: types.STRING(129),
      allowNull: false,
      primaryKey: true
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
    tableName: '_RefShopGroup',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__RefShopGroup_renewal",
        unique: true,
        fields: [
          { name: "Country" },
          { name: "ID" },
          { name: "RefNPCCodeName" },
        ]
      },
    ]
  });
