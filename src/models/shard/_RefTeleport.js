export default (db, types) => db.define('_RefTeleport', {
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
    AssocRefObjCodeName128: {
      type: types.STRING(129),
      allowNull: true
    },
    AssocRefObjID: {
      type: types.INTEGER,
      allowNull: false
    },
    ZoneName128: {
      type: types.STRING(129),
      allowNull: false
    },
    GenRegionID: {
      type: types.SMALLINT,
      allowNull: false
    },
    GenPos_X: {
      type: types.SMALLINT,
      allowNull: false
    },
    GenPos_Y: {
      type: types.SMALLINT,
      allowNull: false
    },
    GenPos_Z: {
      type: types.SMALLINT,
      allowNull: false
    },
    GenAreaRadius: {
      type: types.SMALLINT,
      allowNull: false
    },
    CanBeResurrectPos: {
      type: types.TINYINT,
      allowNull: false
    },
    CanGotoResurrectPos: {
      type: types.TINYINT,
      allowNull: false
    },
    GenWorldID: {
      type: types.SMALLINT,
      allowNull: false,
      defaultValue: 1
    },
    BindInteractionMask: {
      type: types.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    FixedService: {
      type: types.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize: db,
    tableName: '_RefTeleport',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__RefTeleport",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
