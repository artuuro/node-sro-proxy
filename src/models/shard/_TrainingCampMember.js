export default (db, types) => db.define('_TrainingCampMember', {
    CampID: {
      type: types.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: '_TrainingCamp',
        key: 'ID'
      }
    },
    CharID: {
      type: types.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: '_Char',
        key: 'CharID'
      }
    },
    RefObjID: {
      type: types.INTEGER,
      allowNull: false
    },
    CharName: {
      type: types.STRING(64),
      allowNull: false
    },
    JoinDate: {
      type: "SMALLDATETIME",
      allowNull: false
    },
    MemberClass: {
      type: types.TINYINT,
      allowNull: false
    },
    CharJoinedLevel: {
      type: types.TINYINT,
      allowNull: false
    },
    CharCurLevel: {
      type: types.TINYINT,
      allowNull: false
    },
    CharMaxLevel: {
      type: types.TINYINT,
      allowNull: false
    },
    HonorPoint: {
      type: types.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize: db,
    tableName: '_TrainingCampMember',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__TrainingCampMember",
        unique: true,
        fields: [
          { name: "CampID" },
          { name: "CharID" },
        ]
      },
    ]
  });
