export default (db, types) => db.define('_RefGameWorldBindGameWorldGroup', {
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
    GameWorldGroupID: {
      type: types.INTEGER,
      allowNull: false,
      references: {
        model: '_RefGameWorldGroup',
        key: 'ID'
      }
    }
  }, {
    sequelize: db,
    tableName: '_RefGameWorldBindGameWorldGroup',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__RefGameWorldBindGroupGameWorld",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
