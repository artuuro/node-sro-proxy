export default (db, types) => db.define('SK_SHL', {
    idx: {
        autoIncrement: true,
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    JID: {
        type: types.INTEGER,
        allowNull: false
    },
    COS: {
        type: types.INTEGER,
        allowNull: false
    },
    CGS: {
        type: types.INTEGER,
        allowNull: false
    },
    HOS: {
        type: types.INTEGER,
        allowNull: false
    },
    HGS: {
        type: types.INTEGER,
        allowNull: false
    },
    event_time: {
        type: "SMALLDATETIME",
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: 'SK_SHL',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX_SK_SHL",
            fields: [
                { name: "JID" },
            ]
        },
        {
            name: "PK_SK_SHL",
            unique: true,
            fields: [
                { name: "idx" },
            ]
        },
    ]
});
