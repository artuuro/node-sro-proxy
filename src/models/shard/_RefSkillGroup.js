export default (db, types) => db.define('_RefSkillGroup', {
    ID: {
      autoIncrement: true,
      type: types.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Code: {
      type: types.STRING(128),
      allowNull: false
    }
  }, {
    sequelize: db,
    tableName: '_RefSkillGroup',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK___RefSkillGroup__52593CB8",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
