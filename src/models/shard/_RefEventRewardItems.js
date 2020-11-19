export default (db, types) => db.define('_RefEventRewardItems', {
    Service: {
      type: types.TINYINT,
      allowNull: false
    },
    EventID: {
      type: types.INTEGER,
      allowNull: false
    },
    EventCodeName: {
      type: types.STRING(128),
      allowNull: false
    },
    ItemCodeName: {
      type: types.STRING(128),
      allowNull: false
    },
    PayCount: {
      type: types.INTEGER,
      allowNull: false
    },
    AchieveRatio: {
      type: types.REAL,
      allowNull: false
    },
    RentItemCodeName: {
      type: types.STRING(128),
      allowNull: false,
      defaultValue: "xxx"
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
    }
  }, {
    sequelize: db,
    tableName: '_RefEventRewardItems',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX__RefEventRewardItems_EventID",
        fields: [
          { name: "EventID" },
        ]
      },
    ]
  });
