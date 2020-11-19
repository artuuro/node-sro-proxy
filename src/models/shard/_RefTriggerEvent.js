export default (db, types) => db.define('_RefTriggerEvent', {
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
    }
  }, {
    sequelize: db,
    tableName: '_RefTriggerEvent',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__RefTriggerEvent",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
