import opcodes from './global.opcodes';

export default {
  module: 'AgentServer',
  LOCAL: {
    HOST: '0.0.0.0',
    PORT: 7002
  },
  REMOTE: {
    HOST: '138.201.58.79',
    PORT: 16004
  },
  middlewares: {},
  packets: {
    client: opcodes.client.concat([
      {
        code: 29808,
        name: "ACADEMY_CREATE"
      },
      {
        code: 29809,
        name: "ACADEMY_DISBAND"
      },
      {
        code: 29813,
        name: "ACADEMY_GRADE"
      },
      {
        code: 29816,
        name: "ACADEMY_HONOR_RANK"
      },
      {
        code: 29811,
        name: "ACADEMY_KICK"
      },
      {
        code: 29812,
        name: "ACADEMY_LEAVE"
      },
      {
        code: 29815,
        name: "ACADEMY_UPDATE_COMMENT"
      },
      {
        code: 29819,
        name: "ACCADEMY_MATCHING_CHANGE"
      },
      {
        code: 29820,
        name: "ACCADEMY_MATCHING_DELETE"
      },
      {
        code: 29822,
        name: "ACCADEMY_MATCHING_JOIN"
      },
      {
        code: 29821,
        name: "ACCADEMY_MATCHING_LIST"
      },
      {
        code: 29818,
        name: "ACCADEMY_MATCHING_REGISTER"
      },
      {
        code: 13439,
        name: "ACCADEMY_MATCHING_RESPONSE"
      },
      {
        code: 29015,
        name: "ALCHEMY_DISMANTLE"
      },
      {
        code: 29009,
        name: "ALCHEMY_ENCHANT"
      },
      {
        code: 29013,
        name: "ALCHEMY_MANUFACTURE"
      },
      {
        code: 29008,
        name: "ALCHEMY_REINFORCE"
      },
      {
        code: 29034,
        name: "ALCHEMY_SOCKET"
      },
      {
        code: 24835,
        name: "AUTH"
      },
      {
        code: 29907,
        name: "BARENA_REQUEST"
      },
      {
        code: 25364,
        name: "CAS_CLIENT"
      },
      {
        code: 25366,
        name: "CAS_SERVER_RESPONSE"
      },
      {
        code: 28679,
        name: "CHARACTER_SELECTION_ACTION"
      },
      {
        code: 28673,
        name: "CHARACTER_SELECTION_JOIN"
      },
      {
        code: 29776,
        name: "CHARACTER_SELECTION_RENAME"
      },
      {
        code: 28709,
        name: "CHAT"
      },
      {
        code: 29453,
        name: "COMMUNITY_BLOCK"
      },
      {
        code: 29442,
        name: "COMMUNITY_FRIEND_ADD"
      },
      {
        code: 29444,
        name: "COMMUNITY_FRIEND_DELETE"
      },
      {
        code: 13059,
        name: "COMMUNITY_FRIEND_RESPONSE"
      },
      {
        code: 29450,
        name: "COMMUNITY_MEMO_DELETE"
      },
      {
        code: 29451,
        name: "COMMUNITY_MEMO_LIST"
      },
      {
        code: 29448,
        name: "COMMUNITY_MEMO_OPEN"
      },
      {
        code: 29449,
        name: "COMMUNITY_MEMO_SEND"
      },
      {
        code: 29452,
        name: "COMMUNITY_MEMO_SEND_GROUP"
      },
      {
        code: 29016,
        name: "CONFIG_UPDATE"
      },
      {
        code: 29962,
        name: "CONSIGNMENT_BUY"
      },
      {
        code: 29959,
        name: "CONSIGNMENT_CLOSE"
      },
      {
        code: 29958,
        name: "CONSIGNMENT_DETAIL"
      },
      {
        code: 29966,
        name: "CONSIGNMENT_LIST"
      },
      {
        code: 29960,
        name: "CONSIGNMENT_REGISTER"
      },
      {
        code: 29964,
        name: "CONSIGNMENT_SEARCH"
      },
      {
        code: 29963,
        name: "CONSIGNMENT_SETTLE"
      },
      {
        code: 29961,
        name: "CONSIGNMENT_UNREGISTER"
      },
      {
        code: 28869,
        name: "COS_COMMAND"
      },
      {
        code: 28951,
        name: "COS_NAME"
      },
      {
        code: 28870,
        name: "COS_TERMINATE"
      },
      {
        code: 28950,
        name: "COS_UNSUMMON"
      },
      {
        code: 28875,
        name: "COS_UPDATE_RIDESTATE"
      },
      {
        code: 29728,
        name: "COS_UPDATE_SETTINGS"
      },
      {
        code: 28803,
        name: "EXCHANGE_APPROVE"
      },
      {
        code: 28804,
        name: "EXCHANGE_CANCEL"
      },
      {
        code: 28802,
        name: "EXCHANGE_CONFIRM"
      },
      {
        code: 28801,
        name: "EXCHANGE_START"
      },
      {
        code: 29981,
        name: "FGW_EXIT"
      },
      {
        code: 29977,
        name: "FGW_RECALL_LIST"
      },
      {
        code: 29978,
        name: "FGW_RECALL_MEMBER"
      },
      {
        code: 29980,
        name: "FGW_RECALL_RESPONSE"
      },
      {
        code: 29874,
        name: "FLAGWAR_REGISTER"
      },
      {
        code: 29974,
        name: "FRPVP_UPDATE"
      },
      {
        code: 12416,
        name: "GAME_INVITE"
      },
      {
        code: 12306,
        name: "GAME_READY"
      },
      {
        code: 13750,
        name: "GAME_RESET_COMPLETE"
      },
      {
        code: 28906,
        name: "GUIDE"
      },
      {
        code: 28912,
        name: "GUILD_CREATE"
      },
      {
        code: 28913,
        name: "GUILD_DISBAND"
      },
      {
        code: 29272,
        name: "GUILD_DONATE"
      },
      {
        code: 28918,
        name: "GUILD_DONATE_OBSOLETE"
      },
      {
        code: 28934,
        name: "GUILD_ELECTION_PARTICIPATE"
      },
      {
        code: 28933,
        name: "GUILD_ELECTION_START"
      },
      {
        code: 28935,
        name: "GUILD_ELECTION_VOTE"
      },
      {
        code: 29953,
        name: "GUILD_GP_HISTORY"
      },
      {
        code: 28915,
        name: "GUILD_INVITE"
      },
      {
        code: 28916,
        name: "GUILD_KICK"
      },
      {
        code: 28914,
        name: "GUILD_LEAVE"
      },
      {
        code: 29273,
        name: "GUILD_MERCENARY_ATTR"
      },
      {
        code: 29274,
        name: "GUILD_MERCENARY_TERMINATE"
      },
      {
        code: 28922,
        name: "GUILD_PROMOTE"
      },
      {
        code: 29265,
        name: "GUILD_STORAGE_CLOSE"
      },
      {
        code: 29266,
        name: "GUILD_STORAGE_LIST"
      },
      {
        code: 29264,
        name: "GUILD_STORAGE_OPEN"
      },
      {
        code: 28931,
        name: "GUILD_TRANSFER"
      },
      {
        code: 28923,
        name: "GUILD_UNION_INVITE"
      },
      {
        code: 28925,
        name: "GUILD_UNION_KICK"
      },
      {
        code: 28924,
        name: "GUILD_UNION_LEAVE"
      },
      {
        code: 29270,
        name: "GUILD_UPDATE_NICKNAME"
      },
      {
        code: 28921,
        name: "GUILD_UPDATE_NOTICE"
      },
      {
        code: 28932,
        name: "GUILD_UPDATE_PERMISSION"
      },
      {
        code: 28927,
        name: "GUILD_UPDATE_SIEGEAUTH"
      },
      {
        code: 28946,
        name: "GUILD_WAR_END"
      },
      {
        code: 28948,
        name: "GUILD_WAR_REWARD"
      },
      {
        code: 28944,
        name: "GUILD_WAR_START"
      },
      {
        code: 28734,
        name: "INVENTORY_ITEM_REPAIR"
      },
      {
        code: 28748,
        name: "INVENTORY_ITEM_USE"
      },
      {
        code: 28724,
        name: "INVENTORY_OPERATION"
      },
      {
        code: 28732,
        name: "INVENTORY_STORAGE_OPEN"
      },
      {
        code: 28899,
        name: "JOB_ALIAS"
      },
      {
        code: 29908,
        name: "JOB_EXPORT_DETAIL"
      },
      {
        code: 28897,
        name: "JOB_JOIN"
      },
      {
        code: 28898,
        name: "JOB_LEAVE"
      },
      {
        code: 28901,
        name: "JOB_OUTCOME"
      },
      {
        code: 28902,
        name: "JOB_PREV_INFO"
      },
      {
        code: 28900,
        name: "JOB_RANKING"
      },
      {
        code: 28677,
        name: "LOGOUT"
      },
      {
        code: 28678,
        name: "LOGOUT_CANCEL"
      },
      {
        code: 13481,
        name: "MAGICOPTION_GRANT"
      },
      {
        code: 28688,
        name: "OPERATOR_COMMAND"
      },
      {
        code: 28768,
        name: "PARTY_CREATE"
      },
      {
        code: 28770,
        name: "PARTY_INVITE"
      },
      {
        code: 28771,
        name: "PARTY_KICK"
      },
      {
        code: 28769,
        name: "PARTY_LEAVE"
      },
      {
        code: 28778,
        name: "PARTY_MATCHING_CHANGE"
      },
      {
        code: 28779,
        name: "PARTY_MATCHING_DELETE"
      },
      {
        code: 28777,
        name: "PARTY_MATCHING_FORM"
      },
      {
        code: 28781,
        name: "PARTY_MATCHING_JOIN"
      },
      {
        code: 28780,
        name: "PARTY_MATCHING_LIST"
      },
      {
        code: 12398,
        name: "PARTY_MATCHING_PLAYER_JOIN"
      },
      {
        code: 28889,
        name: "QUEST_ABANDON"
      },
      {
        code: 28888,
        name: "QUEST_DINGDONG"
      },
      {
        code: 28891,
        name: "QUEST_GATHER_CANCEL"
      },
      {
        code: 29973,
        name: "QUEST_REWAD_SELECT"
      },
      {
        code: 12500,
        name: "QUEST_TALK"
      },
      {
        code: 28766,
        name: "SIEGE_ACTION"
      },
      {
        code: 28765,
        name: "SIEGE_RETURN"
      },
      {
        code: 28953,
        name: "SILK_GACHA_EXCHANGE"
      },
      {
        code: 28952,
        name: "SILK_GACHA_PLAY"
      },
      {
        code: 28954,
        name: "SILK_HISTORY"
      },
      {
        code: 28833,
        name: "SKILL_LEARN"
      },
      {
        code: 28834,
        name: "SKILL_MASTERY_LEARN"
      },
      {
        code: 29187,
        name: "SKILL_MASTERY_WITHDRAW"
      },
      {
        code: 29186,
        name: "SKILL_WITHDRAW"
      },
      {
        code: 28735,
        name: "sro_client.00880A70"
      },
      {
        code: 28947,
        name: "sro_client.00881F80"
      },
      {
        code: 29810,
        name: "sro_client.008997A0"
      },
      {
        code: 29814,
        name: "sro_client.008998F0"
      },
      {
        code: 29827,
        name: "sro_client.0089B7B0"
      },
      {
        code: 28961,
        name: "sro_client.008A1360"
      },
      {
        code: 28871,
        name: "sro_client.008A7AC0"
      },
      {
        code: 28852,
        name: "STALL_BUY"
      },
      {
        code: 28849,
        name: "STALL_CREATE"
      },
      {
        code: 28850,
        name: "STALL_DESTROY"
      },
      {
        code: 28853,
        name: "STALL_LEAVE"
      },
      {
        code: 28851,
        name: "STALL_TALK"
      },
      {
        code: 28858,
        name: "STALL_UPDATE"
      },
      {
        code: 29919,
        name: "TAP_INFO"
      },
      {
        code: 29920,
        name: "TAP_UPDATE"
      },
      {
        code: 28763,
        name: "TELEPORT_CANCEL"
      },
      {
        code: 28761,
        name: "TELEPORT_DESIGNATE"
      },
      {
        code: 28762,
        name: "TELEPORT_USE"
      }
    ]),
    server: opcodes.server.concat([
      {
        code: 46192,
        name: "ACADEMY_CREATE"
      },
      {
        code: 46193,
        name: "ACADEMY_DISBAND"
      },
      {
        code: 46194,
        name: "sro_client.008997A0"
      },
      {
        code: 46195,
        name: "ACADEMY_KICK"
      },
      {
        code: 46196,
        name: "ACADEMY_LEAVE"
      },
      {
        code: 46197,
        name: "ACADEMY_GRADE"
      },
      {
        code: 46198,
        name: "sro_client.008998F0"
      },
      {
        code: 46199,
        name: "ACADEMY_UPDATE_COMMENT"
      },
      {
        code: 46200,
        name: "ACADEMY_HONOR_RANK"
      },
      {
        code: 46202,
        name: "ACCADEMY_MATCHING_REGISTER"
      },
      {
        code: 46203,
        name: "ACCADEMY_MATCHING_CHANGE"
      },
      {
        code: 46204,
        name: "ACCADEMY_MATCHING_DELETE"
      },
      {
        code: 46205,
        name: "ACCADEMY_MATCHING_LIST"
      },
      {
        code: 46206,
        name: "ACCADEMY_MATCHING_JOIN"
      },
      {
        code: 29822,
        name: "ACCADEMY_MATCHING_REQUEST"
      },
      {
        code: 46211,
        name: "sro_client.0089B7B0"
      },
      {
        code: 15488,
        name: "ACADEMY_UPDATE"
      },
      {
        code: 15489,
        name: "ACADEMY_INFO"
      },
      {
        code: 15490,
        name: "ACADEMY_UPDATE_BUFF"
      },
      {
        code: 15494,
        name: "sro_client.0089BF00"
      },
      {
        code: 15495,
        name: "sro_client.0089BAE0"
      },
      {
        code: 45392,
        name: "ALCHEMY_REINFORCE"
      },
      {
        code: 45393,
        name: "ALCHEMY_ENCHANT"
      },
      {
        code: 45397,
        name: "ALCHEMY_MANUFACTURE"
      },
      {
        code: 12630,
        name: "ALCHEMY_CANCELED"
      },
      {
        code: 45399,
        name: "ALCHEMY_DISMANTLE"
      },
      {
        code: 45418,
        name: "ALCHEMY_SOCKET"
      },
      {
        code: 41219,
        name: "AUTH"
      },
      {
        code: 13522,
        name: "BARENA_OPERATION"
      },
      {
        code: 41748,
        name: "CAS_CLIENT"
      },
      {
        code: 25365,
        name: "CAS_SERVER_REQUEST"
      },
      {
        code: 45057,
        name: "CHARACTER_SELECTION_JOIN"
      },
      {
        code: 45063,
        name: "CHARACTER_SELECTION_ACTION"
      },
      {
        code: 46160,
        name: "CHARACTER_SELECTION_RENAME"
      },
      {
        code: 45093,
        name: "CHAT"
      },
      {
        code: 12326,
        name: "CHAT_UPDATE"
      },
      {
        code: 12333,
        name: "CHAT_RESTRICT"
      },
      {
        code: 45826,
        name: "COMMUNITY_FRIEND_ADD"
      },
      {
        code: 29442,
        name: "COMMUNITY_FRIEND_REQUEST"
      },
      {
        code: 45828,
        name: "COMMUNITY_FRIEND_DELETE"
      },
      {
        code: 13061,
        name: "COMMUNITY_FRIEND_INFO"
      },
      {
        code: 45832,
        name: "COMMUNITY_MEMO_OPEN"
      },
      {
        code: 45833,
        name: "COMMUNITY_MEMO_SEND"
      },
      {
        code: 45834,
        name: "COMMUNITY_MEMO_DELETE"
      },
      {
        code: 45835,
        name: "COMMUNITY_MEMO_LIST"
      },
      {
        code: 45836,
        name: "COMMUNITY_MEMO_SEND_GROUP"
      },
      {
        code: 45837,
        name: "COMMUNITY_BLOCK"
      },
      {
        code: 46342,
        name: "CONSIGNMENT_DETAIL"
      },
      {
        code: 46343,
        name: "CONSIGNMENT_CLOSE"
      },
      {
        code: 46344,
        name: "CONSIGNMENT_REGISTER"
      },
      {
        code: 46345,
        name: "CONSIGNMENT_UNREGISTER"
      },
      {
        code: 46346,
        name: "CONSIGNMENT_BUY"
      },
      {
        code: 46347,
        name: "CONSIGNMENT_SETTLE"
      },
      {
        code: 46348,
        name: "CONSIGNMENT_SEARCH"
      },
      {
        code: 13581,
        name: "CONSIGNMENT_UPDATE"
      },
      {
        code: 46350,
        name: "CONSIGNMENT_LIST"
      },
      {
        code: 13616,
        name: "CONSIGNMENT_BUFF_ADD"
      },
      {
        code: 13617,
        name: "CONSIGNMENT_BUFF_REMOVE"
      },
      {
        code: 13618,
        name: "CONSIGNMENT_BUFF_UPDATE"
      },
      {
        code: 45253,
        name: "COS_COMMAND"
      },
      {
        code: 45254,
        name: "COS_TERMINATE"
      },
      {
        code: 45255,
        name: "sro_client.008A7AC0"
      },
      {
        code: 12488,
        name: "COS_INFO"
      },
      {
        code: 12489,
        name: "COS_UPDATE"
      },
      {
        code: 12490,
        name: "COS_UPDATE_STATE"
      },
      {
        code: 45259,
        name: "COS_UPDATE_RIDESTATE"
      },
      {
        code: 45334,
        name: "COS_UNSUMMON"
      },
      {
        code: 45335,
        name: "COS_NAME"
      },
      {
        code: 46112,
        name: "COS_UPDATE_SETTINGS"
      },
      {
        code: 12320,
        name: "ENVIRONMENT_CELESTIAL_POSITION"
      },
      {
        code: 12327,
        name: "ENVIRONMENT_CELESTIAL_UPDATE"
      },
      {
        code: 14345,
        name: "ENVIRONMENT_WEATHER_UPDATE"
      },
      {
        code: 45185,
        name: "EXCHANGE_START"
      },
      {
        code: 45186,
        name: "EXCHANGE_CONFIRM"
      },
      {
        code: 45187,
        name: "EXCHANGE_APPROVE"
      },
      {
        code: 45188,
        name: "EXCHANGE_CANCEL"
      },
      {
        code: 12421,
        name: "EXCHANGE_STARTED"
      },
      {
        code: 12422,
        name: "EXCHANGE_CONFIRMED"
      },
      {
        code: 12423,
        name: "EXCHANGE_APPROVED"
      },
      {
        code: 12424,
        name: "EXCHANGE_CANCELED"
      },
      {
        code: 12425,
        name: "EXCHANGE_UPDATE"
      },
      {
        code: 12428,
        name: "EXCHANGE_UPDATE_ITEMS"
      },
      {
        code: 46361,
        name: "FGW_RECALL_LIST"
      },
      {
        code: 46362,
        name: "FGW_RECALL_MEMBER"
      },
      {
        code: 29722,
        name: "FGW_RECALL_REQUEST"
      },
      {
        code: 46364,
        name: "FGW_RECALL_RESPONSE"
      },
      {
        code: 46365,
        name: "FGW_EXIT"
      },
      {
        code: 13598,
        name: "FGW_UPDATE"
      },
      {
        code: 13489,
        name: "FLAGWAR_UPDATE"
      },
      {
        code: 46358,
        name: "FRPVP_UPDATE"
      },
      {
        code: 12300,
        name: "GAME_NOTIFY"
      },
      {
        code: 12416,
        name: "GAME_INVITE"
      },
      {
        code: 13749,
        name: "GAME_RESET"
      },
      {
        code: 13502,
        name: "GAME_SERVERTIME"
      },
      {
        code: 45290,
        name: "GUIDE"
      },
      {
        code: 12527,
        name: "GUILD_ENTITY_UPDATE_HOSTILITY"
      },
      {
        code: 45296,
        name: "GUILD_CREATE"
      },
      {
        code: 45297,
        name: "GUILD_DISBAND"
      },
      {
        code: 45298,
        name: "GUILD_LEAVE"
      },
      {
        code: 45299,
        name: "GUILD_INVITE"
      },
      {
        code: 45300,
        name: "GUILD_KICK"
      },
      {
        code: 14581,
        name: "GUILD_UPDATE"
      },
      {
        code: 45302,
        name: "GUILD_DONATE_OBSOLETE"
      },
      {
        code: 45304,
        name: "sro_client.00881890"
      },
      {
        code: 45305,
        name: "GUILD_UPDATE_NOTICE"
      },
      {
        code: 45306,
        name: "GUILD_PROMOTE"
      },
      {
        code: 45307,
        name: "GUILD_UNION_INVITE"
      },
      {
        code: 45308,
        name: "GUILD_UNION_LEAVE"
      },
      {
        code: 45309,
        name: "GUILD_UNION_KICK"
      },
      {
        code: 45311,
        name: "GUILD_UPDATE_SIEGEAUTH"
      },
      {
        code: 12543,
        name: "GUILD_ENTITY_UPDATE"
      },
      {
        code: 12544,
        name: "GUILD_ENTITY_REMOVE"
      },
      {
        code: 13491,
        name: "GUILD_INFO_BEGIN"
      },
      {
        code: 12545,
        name: "GUILD_INFO_DATA"
      },
      {
        code: 13492,
        name: "GUILD_INFO_END"
      },
      {
        code: 12546,
        name: "GUILD_UNION_INFO"
      },
      {
        code: 12547,
        name: "GUILD_ENTITY_UPDATE_SIEGEAUTH"
      },
      {
        code: 45315,
        name: "GUILD_TRANSFER"
      },
      {
        code: 45316,
        name: "GUILD_UPDATE_PERMISSION"
      },
      {
        code: 45317,
        name: "GUILD_ELECTION_START"
      },
      {
        code: 45318,
        name: "GUILD_ELECTION_PARTICIPATE"
      },
      {
        code: 45319,
        name: "GUILD_ELECTION_VOTE"
      },
      {
        code: 14600,
        name: "GUILD_ELECTION_UPDATE"
      },
      {
        code: 12553,
        name: "GUILD_WAR_INFO"
      },
      {
        code: 45328,
        name: "GUILD_WAR_START"
      },
      {
        code: 28944,
        name: "GUILD_WAR_REQUEST"
      },
      {
        code: 45330,
        name: "GUILD_WAR_END"
      },
      {
        code: 45331,
        name: "sro_client.00881F80"
      },
      {
        code: 45332,
        name: "GUILD_WAR_REWARD"
      },
      {
        code: 45648,
        name: "GUILD_STORAGE_OPEN"
      },
      {
        code: 45649,
        name: "GUILD_STORAGE_CLOSE"
      },
      {
        code: 45650,
        name: "GUILD_STORAGE_LIST"
      },
      {
        code: 12883,
        name: "GUILD_STORAGE_BEGIN"
      },
      {
        code: 12884,
        name: "GUILD_STORAGE_END"
      },
      {
        code: 12885,
        name: "GUILD_STORAGE_DATA"
      },
      {
        code: 45654,
        name: "GUILD_UPDATE_NICKNAME"
      },
      {
        code: 12886,
        name: "GUILD_ENTITY_UPDATE_NICKNAME"
      },
      {
        code: 12887,
        name: "GUILD_ENTITY_UPDATE_CREST"
      },
      {
        code: 29272,
        name: "GUILD_DONATE"
      },
      {
        code: 29273,
        name: "GUILD_MERCENARY_ATTR"
      },
      {
        code: 29274,
        name: "GUILD_MERCENARY_TERMINATE"
      },
      {
        code: 46337,
        name: "GUILD_GP_HISTORY"
      },
      {
        code: 12344,
        name: "INVENTORY_ENTITY_EQUIP"
      },
      {
        code: 12345,
        name: "INVENTORY_ENTITY_UNEQUIP"
      },
      {
        code: 12352,
        name: "INVENTORY_UPDATE_ITEM_STATS"
      },
      {
        code: 12353,
        name: "INVENTORY_ENTITY_EQUIP_TIMER_START"
      },
      {
        code: 12354,
        name: "INVENTORY_ENTITY_EQUIP_TIMER_STOP"
      },
      {
        code: 12359,
        name: "INVENTORY_STORAGE_INFO_BEGIN"
      },
      {
        code: 12360,
        name: "INVENTORY_STORAGE_INFO_END"
      },
      {
        code: 12361,
        name: "INVENTORY_STORAGE_INFO_DATA"
      },
      {
        code: 12370,
        name: "INVENTORY_UPDATE_ITEM_DURABILITY"
      },
      {
        code: 12434,
        name: "INVENTORY_UPDATE_SIZE"
      },
      {
        code: 12801,
        name: "INVENTORY_UPDATE_AMMO"
      },
      {
        code: 45108,
        name: "INVENTORY_OPERATION"
      },
      {
        code: 45116,
        name: "INVENTORY_STORAGE_OPEN"
      },
      {
        code: 45118,
        name: "INVENTORY_ITEM_REPAIR"
      },
      {
        code: 45119,
        name: "sro_client.00880A70"
      },
      {
        code: 45132,
        name: "INVENTORY_ITEM_USE"
      },
      {
        code: 12512,
        name: "JOB_UPDATE_PRICE"
      },
      {
        code: 45281,
        name: "JOB_JOIN"
      },
      {
        code: 45282,
        name: "JOB_LEAVE"
      },
      {
        code: 45283,
        name: "JOB_ALIAS"
      },
      {
        code: 45284,
        name: "JOB_RANKING"
      },
      {
        code: 45285,
        name: "JOB_OUTCOME"
      },
      {
        code: 45286,
        name: "JOB_PREV_INFO"
      },
      {
        code: 12518,
        name: "JOB_UPDATE_EXP"
      },
      {
        code: 12519,
        name: "JOB_COS_DISTANCE"
      },
      {
        code: 12520,
        name: "JOB_UPDATE_SCALE"
      },
      {
        code: 46292,
        name: "JOB_EXPORT_DETAIL"
      },
      {
        code: 13525,
        name: "JOB_UPDATE_SAFETRADE"
      },
      {
        code: 45061,
        name: "LOGOUT"
      },
      {
        code: 45062,
        name: "LOGOUT_CANCEL"
      },
      {
        code: 12298,
        name: "LOGUT_SUCCESS"
      },
      {
        code: 13482,
        name: "MAGICOPTION_GRANT"
      },
      {
        code: 13317,
        name: "OPERATOR_PUNISHMENT"
      },
      {
        code: 45072,
        name: "OPERATOR_COMMAND"
      },
      {
        code: 45152,
        name: "PARTY_CREATE"
      },
      {
        code: 45153,
        name: "PARTY_LEAVE"
      },
      {
        code: 45154,
        name: "PARTY_INVITE"
      },
      {
        code: 45155,
        name: "PARTY_KICK"
      },
      {
        code: 14436,
        name: "PARTY_UPDATE"
      },
      {
        code: 14437,
        name: "PARTY_CREATED"
      },
      {
        code: 12389,
        name: "PARTY_CREATED_FROM_MATCHING"
      },
      {
        code: 45159,
        name: "sro_client.OnJoinPartyAck"
      },
      {
        code: 12392,
        name: "PARTY_DISTRIBUTION"
      },
      {
        code: 45161,
        name: "PARTY_MATCHING_FORM"
      },
      {
        code: 45162,
        name: "PARTY_MATCHING_CHANGE"
      },
      {
        code: 45163,
        name: "PARTY_MATCHING_DELETE"
      },
      {
        code: 45164,
        name: "PARTY_MATCHING_LIST"
      },
      {
        code: 45165,
        name: "PARTY_MATCHING_JOIN"
      },
      {
        code: 28781,
        name: "PARTY_MATCHING_PLAYER_JOIN"
      },
      {
        code: 12493,
        name: "PK_UPDATE_PENALTY"
      },
      {
        code: 12494,
        name: "PK_UPDATE_DAILY"
      },
      {
        code: 12499,
        name: "PK_UPDATE_LEVEL"
      },
      {
        code: 12500,
        name: "QUEST_TALK"
      },
      {
        code: 12501,
        name: "QUEST_UPDATE"
      },
      {
        code: 12502,
        name: "QUEST_MARK_ADD"
      },
      {
        code: 12503,
        name: "QUEST_MARK_REMOVE"
      },
      {
        code: 45272,
        name: "QUEST_DINGDONG"
      },
      {
        code: 45273,
        name: "QUEST_ABANDON"
      },
      {
        code: 12506,
        name: "QUEST_GATHER"
      },
      {
        code: 45275,
        name: "QUEST_GATHER_CANCEL"
      },
      {
        code: 12508,
        name: "QUEST_CAPTURE_RESULT"
      },
      {
        code: 12524,
        name: "QUEST_NOTIFY"
      },
      {
        code: 13588,
        name: "QUEST_REWARD_TALK"
      },
      {
        code: 13589,
        name: "QUEST_REWAD_SELECT"
      },
      {
        code: 15522,
        name: "QUEST_SCRIPT"
      },
      {
        code: 45149,
        name: "SIEGE_RETURN"
      },
      {
        code: 45150,
        name: "SIEGE_ACTION"
      },
      {
        code: 14431,
        name: "SIEGE_UPDATE"
      },
      {
        code: 45336,
        name: "SILK_GACHA_PLAY"
      },
      {
        code: 45337,
        name: "SILK_GACHA_EXCHANGE"
      },
      {
        code: 45338,
        name: "SILK_HISTORY"
      },
      {
        code: 12576,
        name: "SILK_GACHA_ANNOUNCE"
      },
      {
        code: 45345,
        name: "sro_client.008A1360"
      },
      {
        code: 12627,
        name: "SILK_UPDATE"
      },
      {
        code: 12628,
        name: "SILK_NOTIFY"
      },
      {
        code: 45217,
        name: "SKILL_LEARN"
      },
      {
        code: 45218,
        name: "SKILL_MASTERY_LEARN"
      },
      {
        code: 45570,
        name: "SKILL_WITHDRAW"
      },
      {
        code: 45571,
        name: "SKILL_MASTERY_WITHDRAW"
      },
      {
        code: 12804,
        name: "SKILL_WITHDRAW_INFO_WND"
      },
      {
        code: 45233,
        name: "STALL_CREATE"
      },
      {
        code: 45234,
        name: "STALL_DESTROY"
      },
      {
        code: 45235,
        name: "STALL_TALK"
      },
      {
        code: 45236,
        name: "STALL_BUY"
      },
      {
        code: 45237,
        name: "STALL_LEAVE"
      },
      {
        code: 12471,
        name: "STALL_ENTITY_ACTION"
      },
      {
        code: 12472,
        name: "STALL_ENTITY_CREATE"
      },
      {
        code: 12473,
        name: "STALL_ENTITY_DESTROY"
      },
      {
        code: 45242,
        name: "STALL_UPDATE"
      },
      {
        code: 12475,
        name: "STALL_ENTITY_NAME"
      },
      {
        code: 46303,
        name: "TAP_INFO"
      },
      {
        code: 46304,
        name: "TAP_UPDATE"
      },
      {
        code: 13537,
        name: "TAP_ICON"
      },
      {
        code: 45145,
        name: "TELEPORT_DESIGNATE"
      },
      {
        code: 45146,
        name: "TELEPORT_USE"
      },
      {
        code: 45147,
        name: "TELEPORT_CANCEL"
      }
    ])
  }
};