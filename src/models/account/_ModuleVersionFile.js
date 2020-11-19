export default (db, types) => db.define('_ModuleVersionFile', {
    nID: {
        autoIncrement: true,
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nVersion: {
        type: types.INTEGER,
        allowNull: false
    },
    nDivisionID: {
        type: types.TINYINT,
        allowNull: false
    },
    nContentID: {
        type: types.TINYINT,
        allowNull: false
    },
    nModuleID: {
        type: types.TINYINT,
        allowNull: false
    },
    szFilename: {
        type: types.STRING(256),
        allowNull: false
    },
    szPath: {
        type: types.STRING(256),
        allowNull: false
    },
    nFileSize: {
        type: types.INTEGER,
        allowNull: false
    },
    nFileType: {
        type: types.TINYINT,
        allowNull: false
    },
    nFileTypeVersion: {
        type: types.INTEGER,
        allowNull: false
    },
    nToBePacked: {
        type: types.TINYINT,
        allowNull: false
    },
    timeModified: {
        type: types.DATE,
        allowNull: false
    },
    nValid: {
        type: types.TINYINT,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_ModuleVersionFile',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX__ModuleVersionFile",
            fields: [
                { name: "nModuleID" },
            ]
        },
        {
            name: "PK__ModuleVersionFile",
            unique: true,
            fields: [
                { name: "nID" },
            ]
        },
    ]
});
