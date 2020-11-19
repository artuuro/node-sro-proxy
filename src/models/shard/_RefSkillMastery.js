export default (db, types) => db.define('_RefSkillMastery', {
    ID: {
      type: types.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Code: {
      type: types.STRING(32),
      allowNull: false
    },
    Weapon: {
      type: types.TINYINT,
      allowNull: false
    }
  }, {
    sequelize: db,
    tableName: '_RefSkillMastery',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Tab_RefSkillMast__23DE44F1",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
