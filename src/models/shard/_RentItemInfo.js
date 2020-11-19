export default (db, types) => db.define('_RentItemInfo', {
    nItemDBID: {
      type: types.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    nRentType: {
      type: types.INTEGER,
      allowNull: false
    },
    nCanDelete: {
      type: types.SMALLINT,
      allowNull: false
    },
    nCanRecharge: {
      type: types.SMALLINT,
      allowNull: false
    },
    PeriodBeginTime: {
      type: "SMALLDATETIME",
      allowNull: false
    },
    PeriodEndTime: {
      type: "SMALLDATETIME",
      allowNull: false
    },
    MeterRateTime: {
      type: "SMALLDATETIME",
      allowNull: true
    },
    nPackingState: {
      type: types.SMALLINT,
      allowNull: true
    },
    nPackingTime: {
      type: types.INTEGER,
      allowNull: true
    }
  }, {
    sequelize: db,
    tableName: '_RentItemInfo',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__RentItemInfo",
        unique: true,
        fields: [
          { name: "nItemDBID" },
        ]
      },
    ]
  });
