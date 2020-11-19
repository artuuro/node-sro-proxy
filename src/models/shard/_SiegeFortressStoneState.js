export default (db, types) => db.define('_SiegeFortressStoneState', {
    FortressID: {
      type: types.INTEGER,
      allowNull: false,
      references: {
        model: '_SiegeFortress',
        key: 'FortressID'
      }
    },
    GuildID: {
      type: types.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    AccumulateDamage: {
      type: types.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize: db,
    tableName: '_SiegeFortressStoneState',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX__SiegeFortressStoneState",
        fields: [
          { name: "FortressID" },
        ]
      },
    ]
  });
