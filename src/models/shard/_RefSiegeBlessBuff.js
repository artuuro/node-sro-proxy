export default (db, types) => db.define('_RefSiegeBlessBuff', {
    Service: {
      type: types.TINYINT,
      allowNull: false
    },
    BlessID: {
      autoIncrement: true,
      type: types.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FortressID: {
      type: types.INTEGER,
      allowNull: false,
      references: {
        model: '_RefSiegeFortress',
        key: 'FortressID'
      }
    },
    RefBlessBuffID: {
      type: types.INTEGER,
      allowNull: false,
      references: {
        model: '_RefSkill',
        key: 'ID'
      }
    },
    NeedGold: {
      type: types.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    NeedGP: {
      type: types.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize: db,
    tableName: '_RefSiegeBlessBuff',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_RefSiegeBlessBuff_FortressID",
        fields: [
          { name: "FortressID" },
        ]
      },
      {
        name: "IX_RefSiegeBlessBuff_RefBlessBuffID",
        fields: [
          { name: "RefBlessBuffID" },
        ]
      },
      {
        name: "PK___RefSiegeBlessBu__71A59AA4",
        unique: true,
        fields: [
          { name: "BlessID" },
        ]
      },
    ]
  });
