export default (db, types) => db.define('_RefSkillByItemOptLevel', {
    Link: {
      type: types.INTEGER,
      allowNull: false,
      references: {
        model: '_RefAbilityByItemOptLevel',
        key: 'ID'
      },
      unique: "IX__RefSkillByItemOptLevel"
    },
    RefSkillID: {
      type: types.INTEGER,
      allowNull: false,
      references: {
        model: '_RefSkill',
        key: 'ID'
      },
      unique: "IX__RefSkillByItemOptLevel"
    }
  }, {
    sequelize: db,
    tableName: '_RefSkillByItemOptLevel',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX__RefSkillByItemOptLevel",
        unique: true,
        fields: [
          { name: "RefSkillID" },
          { name: "Link" },
        ]
      },
    ]
  });
