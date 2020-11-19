export default (db, types) => db.define('_RefEventReward', {
    Service: {
      type: types.TINYINT,
      allowNull: false
    },
    EventID: {
      type: types.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EventCodeName: {
      type: types.STRING(128),
      allowNull: false
    },
    IsView: {
      type: types.TINYINT,
      allowNull: false
    },
    IsBasicReward: {
      type: types.TINYINT,
      allowNull: false
    },
    IsItemReward: {
      type: types.TINYINT,
      allowNull: false
    },
    IsCheckCondition: {
      type: types.TINYINT,
      allowNull: false
    },
    IsCheckCountry: {
      type: types.TINYINT,
      allowNull: false
    },
    IsCheckClass: {
      type: types.TINYINT,
      allowNull: false
    },
    IsCheckGender: {
      type: types.TINYINT,
      allowNull: false
    },
    Gold: {
      type: types.INTEGER,
      allowNull: false
    },
    Exp: {
      type: types.INTEGER,
      allowNull: false
    },
    SPExp: {
      type: types.INTEGER,
      allowNull: false
    },
    SP: {
      type: types.INTEGER,
      allowNull: false
    },
    Hwan: {
      type: types.TINYINT,
      allowNull: false
    },
    Inventory: {
      type: types.TINYINT,
      allowNull: false
    },
    ItemRewardType: {
      type: types.TINYINT,
      allowNull: false
    },
    SelectionCnt: {
      type: types.TINYINT,
      allowNull: false
    },
    Param1: {
      type: types.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    Param1_Desc: {
      type: types.STRING(128),
      allowNull: false,
      defaultValue: "xxx"
    },
    Param2: {
      type: types.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    Param2_Desc: {
      type: types.STRING(128),
      allowNull: false,
      defaultValue: "xxx"
    },
    Param3: {
      type: types.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    Param3_Desc: {
      type: types.STRING(128),
      allowNull: false,
      defaultValue: "xxx"
    }
  }, {
    sequelize: db,
    tableName: '_RefEventReward',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__RefEventReward",
        unique: true,
        fields: [
          { name: "EventID" },
        ]
      },
    ]
  });
