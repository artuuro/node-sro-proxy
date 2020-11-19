export default (db, types) => db.define('_RefGame_World', {
    ID: {
      autoIncrement: true,
      type: types.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    WorldCodeName128: {
      type: types.STRING(129),
      allowNull: false,
      defaultValue: "INSTANC_WORLD_CODENAME"
    },
    Type: {
      type: types.TINYINT,
      allowNull: false
    },
    WorldMaxCount: {
      type: types.SMALLINT,
      allowNull: false
    },
    WorldMaxUserCount: {
      type: types.SMALLINT,
      allowNull: false
    },
    WorldEntryType: {
      type: types.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    WorldEntranceType: {
      type: types.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    WorldLeaveType: {
      type: types.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    WorldDurationTime: {
      type: types.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    WorldEmptyRemainTime: {
      type: types.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    ConfigGroupCodeName128: {
      type: types.STRING(129),
      allowNull: false,
      defaultValue: "xxx"
    }
  }, {
    sequelize: db,
    tableName: '_RefGame_World',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__RefGame_World",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
