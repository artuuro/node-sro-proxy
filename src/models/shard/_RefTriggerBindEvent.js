export default (db, types) => db.define('_RefTriggerBindEvent', {
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
    TriggerEventID: {
      type: types.INTEGER,
      allowNull: false,
      references: {
        model: '_RefTriggerEvent',
        key: 'ID'
      }
    }
  }, {
    sequelize: db,
    tableName: '_RefTriggerBindEvent',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__RefTriggerBindEvent",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
