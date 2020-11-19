import { fn } from 'sequelize';
export default (db, types) => db.define('_TrainingCamp', {
    ID: {
        autoIncrement: true,
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    CreationDate: {
        type: "SMALLDATETIME",
        allowNull: false,
        defaultValue: fn('getdate')
    },
    Rank: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 5
    },
    GraduateCount: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    EvaluationPoint: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    LatestEvaluationDate: {
        type: types.DATE,
        allowNull: false
    },
    CommentTitle: {
        type: types.STRING(129),
        allowNull: true
    },
    Comment: {
        type: types.STRING(2048),
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: '_TrainingCamp',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK__TrainingCamp",
            unique: true,
            fields: [
                { name: "ID" },
            ]
        },
    ]
});
