export default (db, types) => db.define('_RefRegion', {
    wRegionID: {
        type: types.SMALLINT,
        allowNull: false,
        primaryKey: true
    },
    X: {
        type: types.TINYINT,
        allowNull: false
    },
    Z: {
        type: types.TINYINT,
        allowNull: false
    },
    ContinentName: {
        type: types.STRING(128),
        allowNull: false
    },
    AreaName: {
        type: types.STRING(128),
        allowNull: false
    },
    IsBattleField: {
        type: types.TINYINT,
        allowNull: false
    },
    Climate: {
        type: types.INTEGER,
        allowNull: false
    },
    MaxCapacity: {
        type: types.INTEGER,
        allowNull: false
    },
    AssocObjID: {
        type: types.INTEGER,
        allowNull: false
    },
    AssocServer: {
        type: types.INTEGER,
        allowNull: false
    },
    AssocFile256: {
        type: types.STRING(256),
        allowNull: false
    },
    LinkedRegion_1: {
        type: types.INTEGER,
        allowNull: true
    },
    LinkedRegion_2: {
        type: types.INTEGER,
        allowNull: true
    },
    LinkedRegion_3: {
        type: types.INTEGER,
        allowNull: true
    },
    LinkedRegion_4: {
        type: types.INTEGER,
        allowNull: true
    },
    LinkedRegion_5: {
        type: types.INTEGER,
        allowNull: true
    },
    LinkedRegion_6: {
        type: types.INTEGER,
        allowNull: true
    },
    LinkedRegion_7: {
        type: types.INTEGER,
        allowNull: true
    },
    LinkedRegion_8: {
        type: types.INTEGER,
        allowNull: true
    },
    LinkedRegion_9: {
        type: types.INTEGER,
        allowNull: true
    },
    LinkedRegion_10: {
        type: types.INTEGER,
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: '_RefRegion',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK__RefRegion",
            unique: true,
            fields: [
                { name: "wRegionID" },
            ]
        },
    ]
});
