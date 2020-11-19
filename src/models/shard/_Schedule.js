export default (db, types) => db.define('_Schedule', {
    ScheduleIdx: {
      autoIncrement: true,
      type: types.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ScheduleDefineIdx: {
      type: types.INTEGER,
      allowNull: false
    },
    DateStart: {
      type: types.DATE,
      allowNull: false
    },
    DateEnd: {
      type: types.DATE,
      allowNull: false
    },
    MainInterval_Type: {
      type: types.INTEGER,
      allowNull: false
    },
    MainInterval_TypeDate: {
      type: types.INTEGER,
      allowNull: false
    },
    SubInterval_DayOfWeek: {
      type: types.TINYINT,
      allowNull: true
    },
    SubInterval_Days: {
      type: types.TINYINT,
      allowNull: true
    },
    SubInterval_Weeks: {
      type: types.TINYINT,
      allowNull: true
    },
    SubInterval_Months: {
      type: types.TINYINT,
      allowNull: true
    },
    SubInterval_StartTimeHour: {
      type: types.TINYINT,
      allowNull: true
    },
    SubInterval_StartTimeMinute: {
      type: types.TINYINT,
      allowNull: true
    },
    SubInterval_StartTimeSecond: {
      type: types.TINYINT,
      allowNull: true
    },
    SubInterval_DurationSecond: {
      type: types.INTEGER,
      allowNull: true
    },
    SubInterval_RepititionTerm: {
      type: types.INTEGER,
      allowNull: true
    },
    SubInterval_MaintainTime: {
      type: types.INTEGER,
      allowNull: true
    },
    Param: {
      type: types.STRING(256),
      allowNull: true
    },
    Description: {
      type: types.STRING(2000),
      allowNull: true
    }
  }, {
    sequelize: db,
    tableName: '_Schedule',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK___Schedule__425FD07F",
        unique: true,
        fields: [
          { name: "ScheduleIdx" },
        ]
      },
    ]
  });
