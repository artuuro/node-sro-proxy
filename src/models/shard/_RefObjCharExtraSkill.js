export default (db, types) => db.define('_RefObjCharExtraSkill', {
    ID: {
        type: types.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    CharID: {
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    ExtraSkill_1: {
        type: types.INTEGER,
        allowNull: true
    },
    ExtraSkill_2: {
        type: types.INTEGER,
        allowNull: true
    },
    ExtraSkill_3: {
        type: types.INTEGER,
        allowNull: true
    },
    ExtraSkill_4: {
        type: types.INTEGER,
        allowNull: true
    },
    ExtraSkill_5: {
        type: types.INTEGER,
        allowNull: true
    },
    ExtraSkill_6: {
        type: types.INTEGER,
        allowNull: true
    },
    ExtraSkill_7: {
        type: types.INTEGER,
        allowNull: true
    },
    ExtraSkill_8: {
        type: types.INTEGER,
        allowNull: true
    },
    ExtraSkill_9: {
        type: types.INTEGER,
        allowNull: true
    },
    ExtraSkill_10: {
        type: types.INTEGER,
        allowNull: true
    },
    ExtraSkill_11: {
        type: types.INTEGER,
        allowNull: true
    },
    ExtraSkill_12: {
        type: types.INTEGER,
        allowNull: true
    },
    ExtraSkill_13: {
        type: types.INTEGER,
        allowNull: true
    },
    ExtraSkill_14: {
        type: types.INTEGER,
        allowNull: true
    },
    ExtraSkill_15: {
        type: types.INTEGER,
        allowNull: true
    },
    ExtraSkill_16: {
        type: types.INTEGER,
        allowNull: true
    },
    ExtraSkill_17: {
        type: types.INTEGER,
        allowNull: true
    },
    ExtraSkill_18: {
        type: types.INTEGER,
        allowNull: true
    },
    ExtraSkill_19: {
        type: types.INTEGER,
        allowNull: true
    },
    ExtraSkill_20: {
        type: types.INTEGER,
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: '_RefObjCharExtraSkill',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK__RefObjCharExtraSkill",
            unique: true,
            fields: [
                { name: "CharID" },
            ]
        },
    ]
});
