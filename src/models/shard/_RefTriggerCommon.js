export default (db, types) => db.define('_RefTriggerCommon', {
    Service: {
      type: types.INTEGER,
      allowNull: false
    },
    ID: {
      autoIncrement: true,
      type: types.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CodeName128: {
      type: types.STRING(129),
      allowNull: false
    },
    ObjName128: {
      type: types.STRING(129),
      allowNull: false
    },
    TID1: {
      type: types.SMALLINT,
      allowNull: false
    },
    TID2: {
      type: types.SMALLINT,
      allowNull: false
    },
    TID3: {
      type: types.SMALLINT,
      allowNull: false
    },
    TID4: {
      type: types.SMALLINT,
      allowNull: false
    }
  }, {
    sequelize: db,
    tableName: '_RefTriggerCommon',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__RefTriggerCommon",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
