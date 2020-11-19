export default (db, types) => db.define('_RefTriggerAction', {
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
    Delay: {
      type: types.INTEGER,
      allowNull: false
    },
    ParamGroupCodeName128: {
      type: types.STRING(129),
      allowNull: false
    }
  }, {
    sequelize: db,
    tableName: '_RefTriggerAction',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__RefTriggerAction",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
