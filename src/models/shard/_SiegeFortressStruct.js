export default (db, types) => db.define('_SiegeFortressStruct', {
    FortressID: {
      type: types.INTEGER,
      allowNull: false,
      references: {
        model: '_SiegeFortress',
        key: 'FortressID'
      }
    },
    OwnerGuildID: {
      type: types.INTEGER,
      allowNull: false
    },
    RefEventStructID: {
      type: types.INTEGER,
      allowNull: false
    },
    RefObjID: {
      type: types.INTEGER,
      allowNull: false
    },
    HP: {
      type: types.INTEGER,
      allowNull: false
    },
    MakeDate: {
      type: types.DATE,
      allowNull: false
    },
    State: {
      type: types.SMALLINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize: db,
    tableName: '_SiegeFortressStruct',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX__SiegeFortressStruct",
        fields: [
          { name: "FortressID" },
        ]
      },
    ]
  });
