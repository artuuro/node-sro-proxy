export default (db, types) => db.define('_RefRentItem', {
    service: {
        type: types.INTEGER,
        allowNull: false
    },
    RentCodeName: {
        type: types.STRING(129),
        allowNull: false,
        primaryKey: true,
        unique: "UQ___RefRentItem__68A6404F"
    },
    RefItemID: {
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    CanDelete: {
        type: types.TINYINT,
        allowNull: false
    },
    CnaRecharge: {
        type: types.TINYINT,
        allowNull: false
    },
    RentType: {
        type: types.INTEGER,
        allowNull: true
    },
    StartTime: {
        type: "SMALLDATETIME",
        allowNull: true
    },
    EndTime: {
        type: "SMALLDATETIME",
        allowNull: true
    },
    TimeCnt: {
        type: types.TINYINT,
        allowNull: true
    },
    Time1: {
        type: types.INTEGER,
        allowNull: true
    },
    Time2: {
        type: types.INTEGER,
        allowNull: true
    },
    Time3: {
        type: types.INTEGER,
        allowNull: true
    },
    Time4: {
        type: types.INTEGER,
        allowNull: true
    },
    Time5: {
        type: types.INTEGER,
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: '_RefRentItem',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK__RefRentItem",
            unique: true,
            fields: [
                { name: "RentCodeName" },
                { name: "RefItemID" },
            ]
        },
        {
            name: "UQ___RefRentItem__68A6404F",
            unique: true,
            fields: [
                { name: "RentCodeName" },
            ]
        },
    ]
});
