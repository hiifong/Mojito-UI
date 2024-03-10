<script setup>
import { ref } from 'vue'
import CommentList from '@/components/comment/CommentList.vue'

const total = ref(520)
const comments = ref([
  {
    at_users: [],
    sub_comment_count: '32',
    user_info: {
      user_id: '64a547b400000000100340e8',
      nickname: 'momo',
      image:
        'https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30nfcvo40mg6g5p558uq46g78rtvcukg?imageView2/2/w/120/format/jpg'
    },
    like_count: '244',
    show_tags: [],
    ip_location: '湖南',
    id: '65eb1c710000000004035717',
    note_id: '65e8065f000000000b00f59e',
    status: 0,
    content:
      '虽然我不承认游戏鄙视链，但不得不说只玩手游的人这辈子都没吃上一口好的，这不是鄙视，这是事实',
    liked: false,
    sub_comments: [
      {
        user_info: {
          user_id: '64a547b400000000100340e8',
          nickname: 'momo',
          image:
            'https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30nfcvo40mg6g5p558uq46g78rtvcukg?imageView2/2/w/120/format/jpg'
        },
        pictures: [],
        note_id: '65e8065f000000000b00f59e',
        content:
          '好像有人看不懂，我解释一下我的观点，一个只玩（重点，只）手游的人去申游戏策划，就好像一个只读过儿童简译版红楼梦的人去申请红学研究生。读简译版红楼梦本身没什么可笑的，但以为这样就足够了而去申红学研究生，甚至完全不觉得有什么问题，这种心态和行为明显是可笑的',
        at_users: [],
        liked: false,
        like_count: '110',
        show_tags: [],
        create_time: 1709953335000,
        ip_location: '湖南',
        id: '65ebd137000000000403474c',
        status: 0,
        target_comment: {
          id: '65eb1c710000000004035717',
          user_info: {
            nickname: 'momo',
            image:
              'https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30nfcvo40mg6g5p558uq46g78rtvcukg?imageView2/2/w/120/format/jpg',
            user_id: '64a547b400000000100340e8'
          }
        }
      },
      {
        note_id: '65e8065f000000000b00f59e',
        at_users: [],
        liked: false,
        like_count: '622',
        create_time: 1709738950000,
        target_comment: {
          id: '65e876d2000000000200c513',
          user_info: {
            nickname: '大鹅鹅',
            image:
              'https://sns-avatar-qc.xhscdn.com/avatar/5c4309d05db00e00017edfe8.jpg?imageView2/2/w/120/format/jpg',
            user_id: '5c4308d10000000006034349'
          }
        },
        pictures: [],
        id: '65e88bc600000000040376d5',
        status: 0,
        content: '有时候了解对家也是优势[doge]',
        user_info: {
          user_id: '64b4c1f7000000001f006be0',
          nickname: '小红薯64B52981',
          image:
            'https://sns-avatar-qc.xhscdn.com/avatar/645b6b2504c28aa15eab1dac.jpg?imageView2/2/w/120/format/jpg'
        },
        show_tags: [],
        ip_location: '北京'
      }
    ],
    pictures: [],
    create_time: 1709907057000,
    sub_comment_cursor: '65ebd137000000000403474c',
    sub_comment_has_more: true
  },
  {
    status: 0,
    show_tags: [],
    ip_location: '美国',
    note_id: '65e8065f000000000b00f59e',
    sub_comment_count: '46',
    sub_comments: [
      {
        user_info: {
          user_id: '5f0829ed000000000101cf0b',
          nickname: '一只二重离散随机变量',
          image:
            'https://sns-avatar-qc.xhscdn.com/avatar/6358e85b48c27af61b993a52.jpg?imageView2/2/w/120/format/jpg'
        },
        show_tags: [],
        pictures: [],
        id: '65e8ffc90000000004015ece',
        status: 0,
        content: '我真的裂开，暴雪可能就是要了这么一批人',
        liked: false,
        like_count: '375',
        note_id: '65e8065f000000000b00f59e',
        at_users: [
          {
            user_id: '59d65719de5fb4694f7f7af6',
            nickname: '山回路转'
          }
        ],
        create_time: 1709768649000,
        ip_location: '山西',
        target_comment: {
          user_info: {
            user_id: '5b6c7c9a9ea5fc000105b804',
            nickname: 'owow',
            image:
              'https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30sq2mdg9js004abp09u9le04q66l1d8?imageView2/2/w/120/format/jpg'
          },
          id: '65e8fc5a000000000c027357'
        }
      }
    ],
    sub_comment_has_more: true,
    user_info: {
      user_id: '5b6c7c9a9ea5fc000105b804',
      nickname: 'owow',
      image:
        'https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30sq2mdg9js004abp09u9le04q66l1d8?imageView2/2/w/120/format/jpg'
    },
    create_time: 1709767770000,
    pictures: [],
    content: '看看评论区就知道现在的游戏策划一个比一个离谱的原因了',
    at_users: [],
    liked: false,
    like_count: '1181',
    id: '65e8fc5a000000000c027357',
    sub_comment_cursor: '65e8ffc90000000004015ece'
  },
  {
    sub_comment_cursor: '65e88bc600000000040376d5',
    sub_comment_has_more: true,
    pictures: [],
    create_time: 1709733586000,
    ip_location: '陕西',
    liked: false,
    user_info: {
      user_id: '5c4308d10000000006034349',
      nickname: '大鹅鹅',
      image:
        'https://sns-avatar-qc.xhscdn.com/avatar/5c4309d05db00e00017edfe8.jpg?imageView2/2/w/120/format/jpg'
    },
    note_id: '65e8065f000000000b00f59e',
    at_users: [],
    id: '65e876d2000000000200c513',
    show_tags: [],
    like_count: '527',
    sub_comment_count: '32',
    sub_comments: [
      {
        note_id: '65e8065f000000000b00f59e',
        at_users: [],
        liked: false,
        like_count: '622',
        create_time: 1709738950000,
        target_comment: {
          id: '65e876d2000000000200c513',
          user_info: {
            nickname: '大鹅鹅',
            image:
              'https://sns-avatar-qc.xhscdn.com/avatar/5c4309d05db00e00017edfe8.jpg?imageView2/2/w/120/format/jpg',
            user_id: '5c4308d10000000006034349'
          }
        },
        pictures: [],
        id: '65e88bc600000000040376d5',
        status: 0,
        content: '有时候了解对家也是优势[doge]',
        user_info: {
          user_id: '64b4c1f7000000001f006be0',
          nickname: '小红薯64B52981',
          image:
            'https://sns-avatar-qc.xhscdn.com/avatar/645b6b2504c28aa15eab1dac.jpg?imageView2/2/w/120/format/jpg'
        },
        show_tags: [],
        ip_location: '北京'
      }
    ],
    status: 0,
    content:
      '这一栏我填了未定事件簿，觉得太少了补了恋与制作人与恋与深空，后来过了没几天邮件把我拒了。和我同学复盘，我同学说，你是咋敢把对家公司写上的[笑哭R][笑哭R]'
  },
  {
    id: '65e8b0dc0000000004034331',
    content: '笑死了，我投的时候发现需要填游戏经历，就默默关了，上一次玩游戏还是摩尔庄园小花仙',
    show_tags: [],
    create_time: 1709748444000,
    sub_comments: [
      {
        id: '65e9095a0000000004035054',
        liked: false,
        like_count: '418',
        user_info: {
          user_id: '5c9b54820000000016001cde',
          nickname: '脑袋困掉了',
          image:
            'https://sns-avatar-qc.xhscdn.com/avatar/6250a9573f813c52535b709a.jpg?imageView2/2/w/120/format/jpg'
        },
        target_comment: {
          user_info: {
            user_id: '61acc376000000001000d4f9',
            nickname: '白洲梓的星怒',
            image:
              'https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30tndv1skks5g5odcodr41l7p39qmu18?imageView2/2/w/120/format/jpg'
          },
          id: '65e8e97e0000000004014b3d'
        },
        pictures: [],
        note_id: '65e8065f000000000b00f59e',
        status: 0,
        content: '米哈游都不知道自己家原神出了七年.......',
        at_users: [],
        show_tags: [],
        create_time: 1709771098000,
        ip_location: '广东'
      }
    ],
    pictures: [],
    note_id: '65e8065f000000000b00f59e',
    at_users: [],
    liked: false,
    user_info: {
      user_id: '5c83cf640000000016021561',
      nickname: 'momo',
      image:
        'https://sns-avatar-qc.xhscdn.com/avatar/5c8b98cc540882000117436e.jpg?imageView2/2/w/120/format/jpg'
    },
    sub_comment_count: '43',
    status: 0,
    like_count: '454',
    ip_location: '美国',
    sub_comment_cursor: '65e9095a0000000004035054',
    sub_comment_has_more: true
  },
  {
    like_count: '89',
    user_info: {
      user_id: '5e34f7a8000000000100bcef',
      nickname: '小红薯65E1A446',
      image:
        'https://sns-avatar-qc.xhscdn.com/avatar/5e510e6d0283770001610840.jpg?imageView2/2/w/120/format/jpg'
    },
    sub_comment_count: '28',
    liked: false,
    create_time: 1709941908000,
    sub_comments: [
      {
        ip_location: '浙江',
        target_comment: {
          id: '65eba494000000000200d9a4',
          user_info: {
            user_id: '5e34f7a8000000000100bcef',
            nickname: '小红薯65E1A446',
            image:
              'https://sns-avatar-qc.xhscdn.com/avatar/5e510e6d0283770001610840.jpg?imageView2/2/w/120/format/jpg'
          }
        },
        pictures: [],
        id: '65ebab500000000007000d18',
        status: 0,
        liked: false,
        show_tags: [],
        user_info: {
          user_id: '5e3d6fd10000000001001622',
          nickname: '放星星的羊',
          image:
            'https://sns-avatar-qc.xhscdn.com/avatar/6486ea413169075198c11e9f.jpg?imageView2/2/w/120/format/jpg'
        },
        create_time: 1709943632000,
        note_id: '65e8065f000000000b00f59e',
        content:
          '不就得这样吗。。。现在现实就是，就得有人又能玩很多游戏而且玩的很厉害并且有很多自己的理解又学习学得好才能起码去大厂做游戏策划呀，已经不是以前那个年代只看学历的了[笑哭R][笑哭R][笑哭R]我项目制作人是北大金融本硕博',
        at_users: [],
        like_count: '267'
      }
    ],
    pictures: [],
    status: 0,
    note_id: '65e8065f000000000b00f59e',
    at_users: [],
    sub_comment_cursor: '65ebab500000000007000d18',
    id: '65eba494000000000200d9a4',
    show_tags: [],
    ip_location: '英国',
    sub_comment_has_more: true,
    content:
      '天啊我吓晕…那想投的人岂不是要在读书期间“有计划的玩游戏”[哭惹R][哭惹R]他们想要的人要在有限的时间里同时疯狂的学习和疯狂的玩游戏…天啊…[哭惹R][哭惹R][哭惹R]'
  },
  {
    sub_comment_has_more: false,
    note_id: '65e8065f000000000b00f59e',
    liked: false,
    like_count: '0',
    show_tags: [],
    sub_comment_count: '0',
    id: '65ed3647000000000d001b4a',
    user_info: {
      user_id: '5b5a967b11be10396649c410',
      nickname: '糖浆泡面Na',
      image:
        'https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30p3roqmnju004a7ii2b7nh0g0hblb6g?imageView2/2/w/120/format/jpg'
    },
    create_time: 1710044743000,
    sub_comments: [],
    pictures: [],
    status: 0,
    content: '宝宝 你这游戏经历太少了[石化R]',
    at_users: [],
    ip_location: '上海',
    sub_comment_cursor: ''
  },
  {
    like_count: '40',
    show_tags: [],
    create_time: 1709795889000,
    note_id: '65e8065f000000000b00f59e',
    status: 0,
    pictures: [
      {
        url_default:
          'http://sns-webpic-qc.xhscdn.com/202403101251/369b2665c6a4b2cfa4ff86007061486f/comment/1040g2h03101jm2t9667g5n302i9451vf8ti58go!nd_whlt34_webp_wm_1',
        info_list: [
          {
            image_scene: 'WB_PRV',
            url: 'http://sns-webpic-qc.xhscdn.com/202403101251/39d89aafcb964fe693fab5016831a09b/comment/1040g2h03101jm2t9667g5n302i9451vf8ti58go!nc_n_webp_mw_1'
          },
          {
            image_scene: 'WB_DFT',
            url: 'http://sns-webpic-qc.xhscdn.com/202403101251/369b2665c6a4b2cfa4ff86007061486f/comment/1040g2h03101jm2t9667g5n302i9451vf8ti58go!nd_whlt34_webp_wm_1'
          }
        ],
        height: 148,
        width: 966,
        url_pre:
          'http://sns-webpic-qc.xhscdn.com/202403101251/39d89aafcb964fe693fab5016831a09b/comment/1040g2h03101jm2t9667g5n302i9451vf8ti58go!nc_n_webp_mw_1'
      }
    ],
    ip_location: '北京',
    sub_comment_cursor: '65e9e910000000000c026842',
    sub_comment_count: '31',
    sub_comments: [
      {
        create_time: 1709828368000,
        id: '65e9e910000000000c026842',
        note_id: '65e8065f000000000b00f59e',
        status: 0,
        content: '类型太少了宝宝，游戏时长得精确到小时（只是建议哦[害羞R]',
        at_users: [],
        like_count: '79',
        show_tags: [],
        ip_location: '四川',
        pictures: [],
        liked: false,
        user_info: {
          image:
            'https://sns-avatar-qc.xhscdn.com/avatar/1000g2jo2pt8e2dcjs06g5ouft8r9i9jfdh2lcgg?imageView2/2/w/120/format/jpg',
          user_id: '63cfea36000000002601266f',
          nickname: '太阳鱼'
        },
        target_comment: {
          id: '65e96a2f000000000c02486f',
          user_info: {
            user_id: '5c60149200000000100287ef',
            nickname: '贴狐少女小王全肯定bot',
            image:
              'https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30uq1295cla205n302i9451vfi6uq0mo?imageView2/2/w/120/format/jpg'
          }
        }
      }
    ],
    id: '65e96a2f000000000c02486f',
    user_info: {
      nickname: '贴狐少女小王全肯定bot',
      image:
        'https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30uq1295cla205n302i9451vfi6uq0mo?imageView2/2/w/120/format/jpg',
      user_id: '5c60149200000000100287ef'
    },
    liked: false,
    sub_comment_has_more: true,
    content:
      '感觉主要还是看学校，我是双非本，有一段实习➕这些游戏，投的运营，两次了只进过笔试再也没有后续了，笔试还是海捞[叹气R]',
    at_users: []
  },
  {
    sub_comments: [
      {
        show_tags: [],
        create_time: 1709941142000,
        target_comment: {
          id: '65eb9e790000000007000c7a',
          user_info: {
            user_id: '6215e5090000000010009e64',
            nickname: '芒果绵绵冰-',
            image:
              'https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30vel5md05u005oglsk4k17j4j98g18o?imageView2/2/w/120/format/jpg'
          }
        },
        pictures: [],
        id: '65eba19600000000040355a6',
        note_id: '65e8065f000000000b00f59e',
        status: 0,
        user_info: {
          user_id: '5ac09e20e8ac2b1179707e6e',
          nickname: '百事不可口',
          image:
            'https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30vsh2cv4lu004a46u9f20vjei43f270?imageView2/2/w/120/format/jpg'
        },
        ip_location: '四川',
        content: '你们不玩游戏的看着是这样的，但是玩游戏的毫无压力',
        at_users: [],
        liked: false,
        like_count: '91'
      }
    ],
    id: '65eb9e790000000007000c7a',
    content: '我在游戏公司的朋友的回答我都看不懂',
    show_tags: [],
    sub_comment_count: '13',
    sub_comment_has_more: true,
    pictures: [
      {
        info_list: [
          {
            image_scene: 'WB_PRV',
            url: 'http://sns-webpic-qc.xhscdn.com/202403101251/884be1783c3c61d2c8dfe098a116d92e/comment/1040g2h03103pasam62005oglsk4k17j4u6bq220!nc_n_webp_mw_1'
          },
          {
            image_scene: 'WB_DFT',
            url: 'http://sns-webpic-qc.xhscdn.com/202403101251/0a1a84180a9f663283708b78252d2cb9/comment/1040g2h03103pasam62005oglsk4k17j4u6bq220!nd_whgt34_webp_wm_1'
          }
        ],
        height: 1920,
        width: 1842,
        url_pre:
          'http://sns-webpic-qc.xhscdn.com/202403101251/884be1783c3c61d2c8dfe098a116d92e/comment/1040g2h03103pasam62005oglsk4k17j4u6bq220!nc_n_webp_mw_1',
        url_default:
          'http://sns-webpic-qc.xhscdn.com/202403101251/0a1a84180a9f663283708b78252d2cb9/comment/1040g2h03103pasam62005oglsk4k17j4u6bq220!nd_whgt34_webp_wm_1'
      }
    ],
    at_users: [],
    create_time: 1709940346000,
    ip_location: '山东',
    sub_comment_cursor: '65eba19600000000040355a6',
    like_count: '10',
    note_id: '65e8065f000000000b00f59e',
    status: 0,
    liked: false,
    user_info: {
      user_id: '6215e5090000000010009e64',
      nickname: '芒果绵绵冰-',
      image:
        'https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30vel5md05u005oglsk4k17j4j98g18o?imageView2/2/w/120/format/jpg'
    }
  },
  {
    ip_location: '上海',
    sub_comment_cursor: '',
    sub_comment_has_more: false,
    note_id: '65e8065f000000000b00f59e',
    at_users: [],
    liked: false,
    create_time: 1710036659000,
    content: '哈哈哈哈哈😂',
    like_count: '0',
    sub_comments: [],
    pictures: [],
    id: '65ed16b30000000004035e66',
    status: 0,
    show_tags: [],
    sub_comment_count: '0',
    user_info: {
      user_id: '59f3e8ce4eacab551048f439',
      nickname: '一二三四',
      image:
        'https://sns-avatar-qc.xhscdn.com/avatar/6434abdefe6243cd2838de96.jpg?imageView2/2/w/120/format/jpg'
    }
  },
  {
    sub_comment_cursor: '65e940990000000004034696',
    at_users: [],
    liked: false,
    ip_location: '陕西',
    sub_comment_count: '3',
    id: '65e93b2d0000000004016701',
    note_id: '65e8065f000000000b00f59e',
    show_tags: [],
    sub_comments: [
      {
        status: 0,
        at_users: [],
        like_count: '101',
        id: '65e940990000000004034696',
        content: '所以老米卡的严说明他们对自己的游戏是真的负责',
        liked: false,
        user_info: {
          user_id: '58b176255e87e7059c3400e0',
          nickname: '不熬夜的往昔',
          image:
            'https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30r84g9edh86g4972ofr2a070njeim60?imageView2/2/w/120/format/jpg'
        },
        show_tags: [],
        create_time: 1709785241000,
        ip_location: '广东',
        target_comment: {
          id: '65e93b2d0000000004016701',
          user_info: {
            user_id: '5fbbb90d000000000101d409',
            nickname: 'Campari',
            image:
              'https://sns-avatar-qc.xhscdn.com/avatar/64c706a9b99bc862bf69c8f3.jpg?imageView2/2/w/120/format/jpg'
          }
        },
        note_id: '65e8065f000000000b00f59e',
        pictures: []
      }
    ],
    status: 0,
    content: '拜托没玩过游戏的放过游戏公司和游戏玩家吧',
    like_count: '410',
    pictures: [],
    user_info: {
      user_id: '5fbbb90d000000000101d409',
      nickname: 'Campari',
      image:
        'https://sns-avatar-qc.xhscdn.com/avatar/64c706a9b99bc862bf69c8f3.jpg?imageView2/2/w/120/format/jpg'
    },
    create_time: 1709783853000,
    sub_comment_has_more: true
  }
])
</script>

<template>
  <CommentList :comments="comments" :total="total" />
</template>
