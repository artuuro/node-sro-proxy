export default (db, types) => db.define('_GM_Authorization', {
    Username: {
        type: types.STRING(25),
        allowNull: false
    },
    makeitem: {
        type: types.TINYINT,
        allowNull: false
    },
    loadmonster: {
        type: types.TINYINT,
        allowNull: false
    },
    zoe: {
        type: types.TINYINT,
        allowNull: false
    },
    mobkill: {
        type: types.TINYINT,
        allowNull: false
    },
    recalluser: {
        type: types.TINYINT,
        allowNull: false
    },
    recallguild: {
        type: types.TINYINT,
        allowNull: false
    },
    movetouser: {
        type: types.TINYINT,
        allowNull: false
    },
    totown: {
        type: types.TINYINT,
        allowNull: false
    },
    invisible: {
        type: types.TINYINT,
        allowNull: false
    },
    invincible: {
        type: types.TINYINT,
        allowNull: false
    },
    ban: {
        type: types.TINYINT,
        allowNull: false
    },
    spawnunique_loc: {
        type: types.TINYINT,
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: '_GM_Authorization',
    schema: 'dbo',
    timestamps: false
});
