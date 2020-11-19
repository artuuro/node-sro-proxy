export default (db, types) => db.define('_Memo', {
    ID64: {
        autoIncrement: true,
        type: types.BIGINT,
        allowNull: false,
        primaryKey: true
    },
    CharID: {
        type: types.INTEGER,
        allowNull: false,
        references: {
            model: '_Char',
            key: 'CharID'
        }
    },
    FromCharName: {
        type: types.STRING(64),
        allowNull: false
    },
    Message: {
        type: types.STRING(1000),
        allowNull: true
    },
    Date: {
        type: "SMALLDATETIME",
        allowNull: false
    },
    Status: {
        type: types.TINYINT,
        allowNull: false
    },
    RefObjID: {
        type: types.INTEGER,
        allowNull: true,
        defaultValue: 0
    }
}, {
    sequelize: db,
    tableName: '_Memo',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX__Memo",
            fields: [
                { name: "CharID" },
            ]
        },
        {
            name: "PK__Memo",
            unique: true,
            fields: [
                { name: "ID64" },
            ]
        },
    ]
});
