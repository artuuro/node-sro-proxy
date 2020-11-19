export default (db, types) => db.define('Tab_RefTactics', {
    dwTacticsID: {
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    dwObjID: {
        type: types.INTEGER,
        allowNull: true
    },
    btAIQoS: {
        type: types.TINYINT,
        allowNull: true
    },
    nMaxStamina: {
        type: types.INTEGER,
        allowNull: false
    },
    btMaxStaminaVariance: {
        type: types.TINYINT,
        allowNull: true
    },
    nSightRange: {
        type: types.INTEGER,
        allowNull: false
    },
    btAggressType: {
        type: types.TINYINT,
        allowNull: true
    },
    AggressData: {
        type: types.INTEGER,
        allowNull: true
    },
    btChangeTarget: {
        type: types.TINYINT,
        allowNull: true
    },
    btHelpRequestTo: {
        type: types.TINYINT,
        allowNull: true
    },
    btHelpResponseTo: {
        type: types.TINYINT,
        allowNull: true
    },
    btBattleStyle: {
        type: types.TINYINT,
        allowNull: true
    },
    BattleStyleData: {
        type: types.INTEGER,
        allowNull: true
    },
    btDiversionBasis: {
        type: types.TINYINT,
        allowNull: true
    },
    DiversionBasisData1: {
        type: types.INTEGER,
        allowNull: true
    },
    DiversionBasisData2: {
        type: types.INTEGER,
        allowNull: true
    },
    DiversionBasisData3: {
        type: types.INTEGER,
        allowNull: true
    },
    DiversionBasisData4: {
        type: types.INTEGER,
        allowNull: true
    },
    DiversionBasisData5: {
        type: types.INTEGER,
        allowNull: true
    },
    DiversionBasisData6: {
        type: types.INTEGER,
        allowNull: true
    },
    DiversionBasisData7: {
        type: types.INTEGER,
        allowNull: true
    },
    DiversionBasisData8: {
        type: types.INTEGER,
        allowNull: true
    },
    btDiversionKeepBasis: {
        type: types.TINYINT,
        allowNull: true
    },
    DiversionKeepBasisData1: {
        type: types.INTEGER,
        allowNull: true
    },
    DiversionKeepBasisData2: {
        type: types.INTEGER,
        allowNull: true
    },
    DiversionKeepBasisData3: {
        type: types.INTEGER,
        allowNull: true
    },
    DiversionKeepBasisData4: {
        type: types.INTEGER,
        allowNull: true
    },
    DiversionKeepBasisData5: {
        type: types.INTEGER,
        allowNull: true
    },
    DiversionKeepBasisData6: {
        type: types.INTEGER,
        allowNull: true
    },
    DiversionKeepBasisData7: {
        type: types.INTEGER,
        allowNull: true
    },
    DiversionKeepBasisData8: {
        type: types.INTEGER,
        allowNull: true
    },
    btKeepDistance: {
        type: types.TINYINT,
        allowNull: true
    },
    KeepDistanceData: {
        type: types.INTEGER,
        allowNull: true
    },
    btTraceType: {
        type: types.TINYINT,
        allowNull: true
    },
    btTraceBoundary: {
        type: types.TINYINT,
        allowNull: true
    },
    TraceData: {
        type: types.INTEGER,
        allowNull: true
    },
    btHomingType: {
        type: types.TINYINT,
        allowNull: true
    },
    HomingData: {
        type: types.INTEGER,
        allowNull: true
    },
    btAggressTypeOnHoming: {
        type: types.TINYINT,
        allowNull: true
    },
    btFleeType: {
        type: types.TINYINT,
        allowNull: true
    },
    dwChampionTacticsID: {
        type: types.INTEGER,
        allowNull: true
    },
    AdditionOptionFlag: {
        type: types.INTEGER,
        allowNull: true
    },
    szDescString128: {
        type: types.STRING(129),
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: 'Tab_RefTactics',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK__Tab_RefTactics__62065FF3",
            unique: true,
            fields: [
                { name: "dwTacticsID" },
            ]
        },
    ]
});
