export default (db, types) => db.define('_SiegeFortressObject', {
    ID: {
      autoIncrement: true,
      type: types.INTEGER,
      allowNull: false,
      primaryKey: true
    },
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
    RefObjID: {
      type: types.INTEGER,
      allowNull: false
    },
    HP: {
      type: types.INTEGER,
      allowNull: false
    },
    Region: {
      type: types.SMALLINT,
      allowNull: false
    },
    PosX: {
      type: types.REAL,
      allowNull: false
    },
    PosY: {
      type: types.REAL,
      allowNull: false
    },
    PosZ: {
      type: types.REAL,
      allowNull: false
    },
    Direction: {
      type: types.REAL,
      allowNull: false
    },
    OwnerLevel: {
      type: types.TINYINT,
      allowNull: false
    }
  }, {
    sequelize: db,
    tableName: '_SiegeFortressObject',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX__SiegeFortressObject",
        fields: [
          { name: "FortressID" },
        ]
      },
      {
        name: "PK__SiegeFortressObject",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
