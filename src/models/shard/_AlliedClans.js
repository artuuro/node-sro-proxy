export default (db, types) => db.define('_AlliedClans', {
    ID: {
        autoIncrement: true,
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    Ally1: {
        type: types.INTEGER,
        allowNull: true,
        references: {
            model: '_Guild',
            key: 'ID'
        }
    },
    Ally2: {
        type: types.INTEGER,
        allowNull: true,
        references: {
            model: '_Guild',
            key: 'ID'
        }
    },
    Ally3: {
        type: types.INTEGER,
        allowNull: true,
        references: {
            model: '_Guild',
            key: 'ID'
        }
    },
    Ally4: {
        type: types.INTEGER,
        allowNull: true,
        references: {
            model: '_Guild',
            key: 'ID'
        }
    },
    Ally5: {
        type: types.INTEGER,
        allowNull: true,
        references: {
            model: '_Guild',
            key: 'ID'
        }
    },
    Ally6: {
        type: types.INTEGER,
        allowNull: true,
        references: {
            model: '_Guild',
            key: 'ID'
        }
    },
    Ally7: {
        type: types.INTEGER,
        allowNull: true,
        references: {
            model: '_Guild',
            key: 'ID'
        }
    },
    Ally8: {
        type: types.INTEGER,
        allowNull: true,
        references: {
            model: '_Guild',
            key: 'ID'
        }
    },
    FoundationDate: {
        type: "SMALLDATETIME",
        allowNull: false
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
    }
}, {
    sequelize: db,
    tableName: '_AlliedClans',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK__AlliedClans",
            unique: true,
            fields: [
                { name: "ID" },
            ]
        },
    ]
});
