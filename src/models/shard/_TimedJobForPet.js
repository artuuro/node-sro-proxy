export default (db, types) => db.define('_TimedJobForPet', {
    ID: {
      autoIncrement: true,
      type: types.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CharID: {
      type: types.INTEGER,
      allowNull: false
    },
    Category: {
      type: types.TINYINT,
      allowNull: false
    },
    JobID: {
      type: types.INTEGER,
      allowNull: false
    },
    TimeToKeep: {
      type: types.INTEGER,
      allowNull: false
    },
    Data1: {
      type: types.INTEGER,
      allowNull: true
    },
    Data2: {
      type: types.INTEGER,
      allowNull: true
    },
    Data3: {
      type: types.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Data4: {
      type: types.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Data5: {
      type: types.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Data6: {
      type: types.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Data7: {
      type: types.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Data8: {
      type: types.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Serial64: {
      type: types.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    JID: {
      type: types.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize: db,
    tableName: '_TimedJobForPet',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__TimedJobForPet",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
