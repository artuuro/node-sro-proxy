export default (db, types) => db.define('_Guild', {
    ID: {
        autoIncrement: true,
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    Name: {
        type: types.STRING(64),
        allowNull: false,
        unique: "IX__Guild"
    },
    Lvl: {
        type: types.TINYINT,
        allowNull: false
    },
    GatheredSP: {
        type: types.INTEGER,
        allowNull: false
    },
    FoundationDate: {
        type: "SMALLDATETIME",
        allowNull: false
    },
    Alliance: {
        type: types.INTEGER,
        allowNull: true,
        references: {
            model: '_AlliedClans',
            key: 'ID'
        }
    },
    MasterCommentTitle: {
        type: types.STRING(129),
        allowNull: true
    },
    MasterComment: {
        type: types.STRING(2049),
        allowNull: true
    },
    Booty: {
        type: types.INTEGER,
        allowNull: true
    },
    Gold: {
        type: types.BIGINT,
        allowNull: false,
        defaultValue: 0
    },
    LastCrestRev: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    CurCrestRev: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    MercenaryAttr: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 0
    }
}, {
    sequelize: db,
    tableName: '_Guild',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX__Guild",
            unique: true,
            fields: [
                { name: "Name" },
            ]
        },
        {
            name: "PK__Guild",
            unique: true,
            fields: [
                { name: "ID" },
            ]
        },
    ]
});
