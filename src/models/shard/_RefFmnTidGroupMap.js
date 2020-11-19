export default (db, types) => db.define('_RefFmnTidGroupMap', {
    Service: {
        type: types.TINYINT,
        allowNull: false
    },
    TidGroupID: {
        type: types.INTEGER,
        allowNull: false
    },
    TypeID1: {
        type: types.TINYINT,
        allowNull: false
    },
    TypeID2: {
        type: types.TINYINT,
        allowNull: false
    },
    TypeID3: {
        type: types.TINYINT,
        allowNull: false
    },
    TypeID4: {
        type: types.TINYINT,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_RefFmnTidGroupMap',
    schema: 'dbo',
    timestamps: false
});
