export default (db, types) => db.define('_RefGameWorldBindTriggerCategory', {
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
    GameWorldID: {
      type: types.INTEGER,
      allowNull: false,
      references: {
        model: '_RefGame_World',
        key: 'ID'
      }
    },
    TriggerCategoryID: {
      type: types.INTEGER,
      allowNull: false,
      references: {
        model: '_RefTriggerCategory',
        key: 'ID'
      }
    }
  }, {
    sequelize: db,
    tableName: '_RefGameWorldBindTriggerCategory',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__RefGameWorldBindTriggerCategory",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
