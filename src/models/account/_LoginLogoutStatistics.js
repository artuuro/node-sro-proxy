export default (db, types) => db.define('_LoginLogoutStatistics', {
    nIdx: {
        type: types.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    nJID: {
        type: types.INTEGER,
        allowNull: false
    },
    nIP: {
        type: types.INTEGER,
        allowNull: false
    },
    dLogin: {
        type: "SMALLDATETIME",
        allowNull: false
    },
    dLogout: {
        type: "SMALLDATETIME",
        allowNull: false
    },
    byReserved: {
        type: types.TINYINT,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_LoginLogoutStatistics',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "CIX___Login_Logout_Statistics_dLogin",
            fields: [
                { name: "dLogin" },
            ]
        },
        {
            name: "IX___Login_Logout_Statistics_nIdx",
            unique: true,
            fields: [
                { name: "nIdx" },
            ]
        },
    ]
});
