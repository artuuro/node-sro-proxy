export default (db, types) => db.define('_RefSkill', {
    Service: {
      type: types.TINYINT,
      allowNull: false
    },
    ID: {
      autoIncrement: true,
      type: types.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    GroupID: {
      type: types.INTEGER,
      allowNull: false
    },
    Basic_Code: {
      type: types.STRING(128),
      allowNull: false
    },
    Basic_Name: {
      type: types.STRING(128),
      allowNull: false
    },
    Basic_Group: {
      type: types.STRING(128),
      allowNull: false
    },
    Basic_Original: {
      type: types.INTEGER,
      allowNull: false
    },
    Basic_Level: {
      type: types.TINYINT,
      allowNull: false
    },
    Basic_Activity: {
      type: types.TINYINT,
      allowNull: false
    },
    Basic_ChainCode: {
      type: types.INTEGER,
      allowNull: false
    },
    Basic_RecycleCost: {
      type: types.INTEGER,
      allowNull: false
    },
    Action_PreparingTime: {
      type: types.INTEGER,
      allowNull: false
    },
    Action_CastingTime: {
      type: types.INTEGER,
      allowNull: false
    },
    Action_ActionDuration: {
      type: types.INTEGER,
      allowNull: false
    },
    Action_ReuseDelay: {
      type: types.INTEGER,
      allowNull: false
    },
    Action_CoolTime: {
      type: types.INTEGER,
      allowNull: false
    },
    Action_FlyingSpeed: {
      type: types.INTEGER,
      allowNull: false
    },
    Action_Interruptable: {
      type: types.TINYINT,
      allowNull: false
    },
    Action_Overlap: {
      type: types.INTEGER,
      allowNull: false
    },
    Action_AutoAttackType: {
      type: types.TINYINT,
      allowNull: false
    },
    Action_InTown: {
      type: types.TINYINT,
      allowNull: false
    },
    Action_Range: {
      type: types.SMALLINT,
      allowNull: false
    },
    Target_Required: {
      type: types.TINYINT,
      allowNull: false
    },
    TargetType_Animal: {
      type: types.TINYINT,
      allowNull: false
    },
    TargetType_Land: {
      type: types.TINYINT,
      allowNull: false
    },
    TargetType_Building: {
      type: types.TINYINT,
      allowNull: false
    },
    TargetGroup_Self: {
      type: types.TINYINT,
      allowNull: false
    },
    TargetGroup_Ally: {
      type: types.TINYINT,
      allowNull: false
    },
    TargetGroup_Party: {
      type: types.TINYINT,
      allowNull: false
    },
    TargetGroup_Enemy_M: {
      type: types.TINYINT,
      allowNull: false
    },
    TargetGroup_Enemy_P: {
      type: types.TINYINT,
      allowNull: false
    },
    TargetGroup_Neutral: {
      type: types.TINYINT,
      allowNull: false
    },
    TargetGroup_DontCare: {
      type: types.TINYINT,
      allowNull: false
    },
    TargetEtc_SelectDeadBody: {
      type: types.TINYINT,
      allowNull: false
    },
    ReqCommon_Mastery1: {
      type: types.INTEGER,
      allowNull: false
    },
    ReqCommon_Mastery2: {
      type: types.INTEGER,
      allowNull: false
    },
    ReqCommon_MasteryLevel1: {
      type: types.TINYINT,
      allowNull: false
    },
    ReqCommon_MasteryLevel2: {
      type: types.TINYINT,
      allowNull: false
    },
    ReqCommon_Str: {
      type: types.SMALLINT,
      allowNull: false
    },
    ReqCommon_Int: {
      type: types.SMALLINT,
      allowNull: false
    },
    ReqLearn_Skill1: {
      type: types.INTEGER,
      allowNull: false
    },
    ReqLearn_Skill2: {
      type: types.INTEGER,
      allowNull: false
    },
    ReqLearn_Skill3: {
      type: types.INTEGER,
      allowNull: false
    },
    ReqLearn_SkillLevel1: {
      type: types.TINYINT,
      allowNull: false
    },
    ReqLearn_SkillLevel2: {
      type: types.TINYINT,
      allowNull: false
    },
    ReqLearn_SkillLevel3: {
      type: types.TINYINT,
      allowNull: false
    },
    ReqLearn_SP: {
      type: types.INTEGER,
      allowNull: false
    },
    ReqLearn_Race: {
      type: types.TINYINT,
      allowNull: false
    },
    Req_Restriction1: {
      type: types.TINYINT,
      allowNull: false
    },
    Req_Restriction2: {
      type: types.TINYINT,
      allowNull: false
    },
    ReqCast_Weapon1: {
      type: types.TINYINT,
      allowNull: false
    },
    ReqCast_Weapon2: {
      type: types.TINYINT,
      allowNull: false
    },
    Consume_HP: {
      type: types.SMALLINT,
      allowNull: false
    },
    Consume_MP: {
      type: types.SMALLINT,
      allowNull: false
    },
    Consume_HPRatio: {
      type: types.SMALLINT,
      allowNull: false
    },
    Consume_MPRatio: {
      type: types.SMALLINT,
      allowNull: false
    },
    Consume_WHAN: {
      type: types.TINYINT,
      allowNull: false
    },
    UI_SkillTab: {
      type: types.TINYINT,
      allowNull: false
    },
    UI_SkillPage: {
      type: types.TINYINT,
      allowNull: false
    },
    UI_SkillColumn: {
      type: types.TINYINT,
      allowNull: false
    },
    UI_SkillRow: {
      type: types.TINYINT,
      allowNull: false
    },
    UI_IconFile: {
      type: types.STRING(128),
      allowNull: false
    },
    UI_SkillName: {
      type: types.STRING(128),
      allowNull: false
    },
    UI_SkillToolTip: {
      type: types.STRING(128),
      allowNull: false
    },
    UI_SkillToolTip_Desc: {
      type: types.STRING(128),
      allowNull: false
    },
    UI_SkillStudy_Desc: {
      type: types.STRING(128),
      allowNull: false
    },
    AI_AttackChance: {
      type: types.SMALLINT,
      allowNull: false
    },
    AI_SkillType: {
      type: types.TINYINT,
      allowNull: false
    },
    Param1: {
      type: types.INTEGER,
      allowNull: false
    },
    Param2: {
      type: types.INTEGER,
      allowNull: false
    },
    Param3: {
      type: types.INTEGER,
      allowNull: false
    },
    Param4: {
      type: types.INTEGER,
      allowNull: false
    },
    Param5: {
      type: types.INTEGER,
      allowNull: false
    },
    Param6: {
      type: types.INTEGER,
      allowNull: false
    },
    Param7: {
      type: types.INTEGER,
      allowNull: false
    },
    Param8: {
      type: types.INTEGER,
      allowNull: false
    },
    Param9: {
      type: types.INTEGER,
      allowNull: false
    },
    Param10: {
      type: types.INTEGER,
      allowNull: false
    },
    Param11: {
      type: types.INTEGER,
      allowNull: false
    },
    Param12: {
      type: types.INTEGER,
      allowNull: false
    },
    Param13: {
      type: types.INTEGER,
      allowNull: false
    },
    Param14: {
      type: types.INTEGER,
      allowNull: false
    },
    Param15: {
      type: types.INTEGER,
      allowNull: false
    },
    Param16: {
      type: types.INTEGER,
      allowNull: false
    },
    Param17: {
      type: types.INTEGER,
      allowNull: false
    },
    Param18: {
      type: types.INTEGER,
      allowNull: false
    },
    Param19: {
      type: types.INTEGER,
      allowNull: false
    },
    Param20: {
      type: types.INTEGER,
      allowNull: false
    },
    Param21: {
      type: types.INTEGER,
      allowNull: false
    },
    Param22: {
      type: types.INTEGER,
      allowNull: false
    },
    Param23: {
      type: types.INTEGER,
      allowNull: false
    },
    Param24: {
      type: types.INTEGER,
      allowNull: false
    },
    Param25: {
      type: types.INTEGER,
      allowNull: false
    },
    Param26: {
      type: types.INTEGER,
      allowNull: true
    },
    Param27: {
      type: types.INTEGER,
      allowNull: true
    },
    Param28: {
      type: types.INTEGER,
      allowNull: true
    },
    Param29: {
      type: types.INTEGER,
      allowNull: true
    },
    Param30: {
      type: types.INTEGER,
      allowNull: true
    },
    Param31: {
      type: types.INTEGER,
      allowNull: true
    },
    Param32: {
      type: types.INTEGER,
      allowNull: true
    },
    Param33: {
      type: types.INTEGER,
      allowNull: true
    },
    Param34: {
      type: types.INTEGER,
      allowNull: true
    },
    Param35: {
      type: types.INTEGER,
      allowNull: true
    },
    Param36: {
      type: types.INTEGER,
      allowNull: true
    },
    Param37: {
      type: types.INTEGER,
      allowNull: true
    },
    Param38: {
      type: types.INTEGER,
      allowNull: true
    },
    Param39: {
      type: types.INTEGER,
      allowNull: true
    },
    Param40: {
      type: types.INTEGER,
      allowNull: true
    },
    Param41: {
      type: types.INTEGER,
      allowNull: true
    },
    Param42: {
      type: types.INTEGER,
      allowNull: true
    },
    Param43: {
      type: types.INTEGER,
      allowNull: true
    },
    Param44: {
      type: types.INTEGER,
      allowNull: true
    },
    Param45: {
      type: types.INTEGER,
      allowNull: true
    },
    Param46: {
      type: types.INTEGER,
      allowNull: true
    },
    Param47: {
      type: types.INTEGER,
      allowNull: true
    },
    Param48: {
      type: types.INTEGER,
      allowNull: true
    },
    Param49: {
      type: types.INTEGER,
      allowNull: true
    },
    Param50: {
      type: types.INTEGER,
      allowNull: true
    }
  }, {
    sequelize: db,
    tableName: '_RefSkill',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_RefSkill_BasicCode",
        fields: [
          { name: "Basic_Code" },
        ]
      },
      {
        name: "PK___RefSkill__01C9240F",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
