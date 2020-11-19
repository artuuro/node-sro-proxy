export default (db, types) => db.define('_RefTriggerCondition', {
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
    RefTriggerCommonID: {
      type: types.INTEGER,
      allowNull: false,
      references: {
        model: '_RefTriggerCommon',
        key: 'ID'
      }
    },
    OnTrue: {
      type: types.STRING(20),
      allowNull: false
    },
    OnFalse: {
      type: types.STRING(20),
      allowNull: false
    },
    Sequence: {
      type: types.SMALLINT,
      allowNull: false
    },
    ParamGroupCodeName128: {
      type: types.STRING(129),
      allowNull: false
    }
  }, {
    sequelize: db,
    tableName: '_RefTriggerCondition',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__RefTriggerCondition",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
