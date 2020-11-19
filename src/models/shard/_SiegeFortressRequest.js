export default (db, types) => db.define('_SiegeFortressRequest', {
    FortressID: {
      type: types.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: '_SiegeFortress',
        key: 'FortressID'
      }
    },
    GuildID: {
      type: types.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: '_Guild',
        key: 'ID'
      }
    },
    RequestType: {
      type: types.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize: db,
    tableName: '_SiegeFortressRequest',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__SiegeFortressRequest",
        unique: true,
        fields: [
          { name: "FortressID" },
          { name: "GuildID" },
        ]
      },
    ]
  });
