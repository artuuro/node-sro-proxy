export default (db, types) => db.define('_RefTriggerBindCondition', {
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
    TriggerID: {
      type: types.INTEGER,
      allowNull: false,
      references: {
        model: '_RefTrigger',
        key: 'ID'
      }
    },
    TriggerConditionID: {
      type: types.INTEGER,
      allowNull: false,
      references: {
        model: '_RefTriggerCondition',
        key: 'ID'
      }
    }
  }, {
    sequelize: db,
    tableName: '_RefTriggerBindCondition',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__RefTriggerBindCondition",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
