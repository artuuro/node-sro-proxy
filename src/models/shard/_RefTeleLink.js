export default (db, types) => db.define('_RefTeleLink', {
    Service: {
      type: types.INTEGER,
      allowNull: false
    },
    OwnerTeleport: {
      type: types.INTEGER,
      allowNull: false
    },
    TargetTeleport: {
      type: types.INTEGER,
      allowNull: false
    },
    Fee: {
      type: types.INTEGER,
      allowNull: false
    },
    RestrictBindMethod: {
      type: types.TINYINT,
      allowNull: false
    },
    RunTimeTeleportMethod: {
      type: types.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    CheckResult: {
      type: types.TINYINT,
      allowNull: false
    },
    Restrict1: {
      type: types.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    Data1_1: {
      type: types.INTEGER,
      allowNull: true
    },
    Data1_2: {
      type: types.INTEGER,
      allowNull: true
    },
    Restrict2: {
      type: types.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    Data2_1: {
      type: types.INTEGER,
      allowNull: true
    },
    Data2_2: {
      type: types.INTEGER,
      allowNull: true
    },
    Restrict3: {
      type: types.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    Data3_1: {
      type: types.INTEGER,
      allowNull: true
    },
    Data3_2: {
      type: types.INTEGER,
      allowNull: true
    },
    Restrict4: {
      type: types.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    Data4_1: {
      type: types.INTEGER,
      allowNull: true
    },
    Data4_2: {
      type: types.INTEGER,
      allowNull: true
    },
    Restrict5: {
      type: types.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    Data5_1: {
      type: types.INTEGER,
      allowNull: true
    },
    Data5_2: {
      type: types.INTEGER,
      allowNull: true
    }
  }, {
    sequelize: db,
    tableName: '_RefTeleLink',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX__RefTeleLinks",
        fields: [
          { name: "OwnerTeleport" },
        ]
      },
    ]
  });
