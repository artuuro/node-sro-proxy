export default (db, types) => db.define('_ModuleVersion', {
    nID: {
        autoIncrement: true,
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
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
    nVersion: {
        type: types.INTEGER,
        allowNull: false
    },
    szVersion: {
        type: types.STRING(64),
        allowNull: false
    },
    szDesc: {
        type: types.STRING(256),
        allowNull: false
    },
    nValid: {
        type: types.TINYINT,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_ModuleVersion',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX__ModuleVersion",
            fields: [
                { name: "nModuleID" },
            ]
        },
        {
            name: "PK___ModuleVersion__656C112C",
            unique: true,
            fields: [
                { name: "nID" },
            ]
        },
    ]
});
