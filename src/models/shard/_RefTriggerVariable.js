export default (db, types) => db.define('_RefTriggerVariable', {
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
    BindTriggerID: {
      type: types.INTEGER,
      allowNull: false,
      references: {
        model: '_RefTrigger',
        key: 'ID'
      }
    },
    CodeName128: {
      type: types.STRING(129),
      allowNull: false
    },
    Type: {
      type: types.STRING(33),
      allowNull: false
    },
    Value: {
      type: types.INTEGER,
      allowNull: false
    },
    Comment128: {
      type: types.STRING(129),
      allowNull: true
    }
  }, {
    sequelize: db,
    tableName: '_RefTriggerVariable',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__TriggerVariable",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
