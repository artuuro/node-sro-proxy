export default (db, types) => db.define('_RefSiegeFortress', {
    Service: {
      type: types.TINYINT,
      allowNull: false
    },
    FortressID: {
      autoIncrement: true,
      type: types.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CodeName128: {
      type: types.STRING(129),
      allowNull: false
    },
    Name: {
      type: types.STRING(129),
      allowNull: false
    },
    NameID128: {
      type: types.STRING(129),
      allowNull: false
    },
    LinkedTeleportCodeName: {
      type: types.STRING(129),
      allowNull: false
    },
    Scale: {
      type: types.TINYINT,
      allowNull: false
    },
    MaxAdmission: {
      type: types.SMALLINT,
      allowNull: false
    },
    MaxGuard: {
      type: types.TINYINT,
      allowNull: false
    },
    MaxBarricade: {
      type: types.TINYINT,
      allowNull: false
    },
    TaxTargets: {
      type: types.SMALLINT,
      allowNull: false
    },
    RequestFee: {
      type: types.INTEGER,
      allowNull: false
    },
    CrestPath128: {
      type: types.STRING(129),
      allowNull: false
    },
    RequestNPCName128: {
      type: types.STRING(129),
      allowNull: false
    }
  }, {
    sequelize: db,
    tableName: '_RefSiegeFortress',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__RefSiegeFortress",
        unique: true,
        fields: [
          { name: "FortressID" },
        ]
      },
    ]
  });
