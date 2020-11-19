export default (db, types) => db.define('_RefTriggerBindAction', {
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
    TriggerActionID: {
      type: types.INTEGER,
      allowNull: false,
      references: {
        model: '_RefTriggerAction',
        key: 'ID'
      }
    }
  }, {
    sequelize: db,
    tableName: '_RefTriggerBindAction',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__RefTriggerBindAction",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
