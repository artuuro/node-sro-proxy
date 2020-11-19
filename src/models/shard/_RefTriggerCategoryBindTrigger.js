export default (db, types) => db.define('_RefTriggerCategoryBindTrigger', {
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
    TriggerCategoryID: {
      type: types.INTEGER,
      allowNull: false
    },
    TriggerID: {
      type: types.INTEGER,
      allowNull: false,
      references: {
        model: '_RefTrigger',
        key: 'ID'
      }
    }
  }, {
    sequelize: db,
    tableName: '_RefTriggerCategoryBindTrigger',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__RefTriggerCategoryBindTrigger",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
