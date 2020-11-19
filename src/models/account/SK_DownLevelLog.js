export default (db, types) => db.define('SK_DownLevelLog', {
    id: {
        autoIncrement: true,
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    JID: {
        type: types.INTEGER,
        allowNull: true
    },
    struserid: {
        type: types.STRING(20),
        allowNull: true
    },
    charname: {
        type: types.STRING(20),
        allowNull: true
    },
    package: {
        type: types.STRING(50),
        allowNull: true
    },
    newlevel: {
        type: types.STRING(10),
        allowNull: true
    },
    server: {
        type: types.STRING(20),
        allowNull: true
    },
    timedown: {
        type: types.DATE,
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: 'SK_DownLevelLog',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK__DownLevelOfChar",
            unique: true,
            fields: [
                { name: "id" },
            ]
        },
    ]
});
