export default (db, types) => db.define('_AssociationReputation', {
    AssociationCodeName: {
        type: types.STRING(128),
        allowNull: false,
        primaryKey: true
    },
    AssociationTypeName: {
        type: types.STRING(128),
        allowNull: false,
        primaryKey: true
    },
    Reputation: {
        type: types.INTEGER,
        allowNull: false
    },
    PriorOccupation: {
        type: types.INTEGER,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_AssociationReputation',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX__AssociationReputation_AssociationCodeName",
            fields: [
                { name: "AssociationCodeName" },
            ]
        },
        {
            name: "PK__AssociationReputation",
            unique: true,
            fields: [
                { name: "AssociationCodeName" },
                { name: "AssociationTypeName" },
            ]
        },
    ]
});
