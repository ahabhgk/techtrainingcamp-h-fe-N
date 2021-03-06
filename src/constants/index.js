export const roleType = {
  ACIENT: 'acient',
  HUNTER: 'hunter',
  IDIOT: 'idiot',
  SAVIOR: 'savior',
  SEER: 'seer',
  SHERIFF: 'sheriff',
  VILLAGER: 'villager',
  WEREWOLF: 'werewolf',
  WITCH: 'witch',
};
export const roleActions = ['sheriff', 'cured', 'poisoned', 'killed', 'voted'];
export const roleSet = [
  {
    // num=7
    god: 1,
    wolf: 2,
    seer: 0,
    witch: 1,
    hunter: 0,
    savior: 0,
    idiot: 0,
    villager: 3,
  },
  {
    // num=8
    god: 1,
    wolf: 2,
    seer: 0,
    witch: 1,
    hunter: 0,
    savior: 0,
    idiot: 0,
    villager: 4,
  },
  {
    // num=9
    god: 1,
    wolf: 3,
    seer: 1,
    witch: 1,
    hunter: 1,
    savior: 0,
    idiot: 0,
    villager: 2,
  },
  // {
  //   // num=10
  //   god: 1,
  //   wolf: 3,
  //   seer: 1,
  //   witch: 1,
  //   hunter: 1,
  //   savior: 0,
  //   idiot: 0,
  //   villager: 3,
  // },
  // {
  //   // num=11
  //   god: 1,
  //   wolf: 4,
  //   seer: 1,
  //   witch: 1,
  //   hunter: 1,
  //   savior: 1,
  //   idiot: 0,
  //   villager: 2,
  // },
  // {
  //   // num=12
  //   god: 1,
  //   wolf: 4,
  //   seer: 1,
  //   witch: 1,
  //   hunter: 1,
  //   savior: 1,
  //   idiot: 0,
  //   villager: 3,
  // },
  // {
  //   // num=13
  //   god: 1,
  //   wolf: 4,
  //   seer: 1,
  //   witch: 1,
  //   hunter: 1,
  //   savior: 1,
  //   idiot: 0,
  //   villager: 4,
  // },
  // {
  //   // num=14
  //   god: 1,
  //   wolf: 5,
  //   seer: 1,
  //   witch: 1,
  //   hunter: 1,
  //   savior: 1,
  //   idiot: 1,
  //   villager: 3,
  // },
  // {
  //   // num=15
  //   god: 1,
  //   wolf: 5,
  //   seer: 1,
  //   witch: 1,
  //   hunter: 1,
  //   savior: 1,
  //   idiot: 1,
  //   villager: 4,
  // },
];

export const roleName = {
  hunter: '猎人',
  idiot: '愚人',
  savior: '救世主',
  seer: '预言家',
  sheriff: '警长',
  villager: '村民',
  werewolf: '狼人',
  witch: '女巫',
};

export default {
  roleType,
  roleSet,
  roleActions,
};
