export default (db, types) => db.define('_RefTrigger', {
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
    CodeName128: {
      type: types.STRING(129),
      allowNull: false
    },
    IsActive: {
      type: types.TINYINT,
      allowNull: false
    },
    IsRepeat: {
      type: types.TINYINT,
      allowNull: false
    },
    Comment512: {
      type: types.STRING(513),
      allowNull: true
    },
    IndexNumber: {
      type: types.INTEGER,
      allowNull: false
    }
  }, {
    sequelize: db,
    tableName: '_RefTrigger',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__RefTrigger",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
