/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  
  USE_PASSAGE: 'push-deer',

  // 使用微信测试号：公众号APP_ID
  APP_ID: '',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '',

  PROVINCE: '浙江',
  CITY: '杭州',

  USERS: [
    {
      // 想要发送的人的名字
      name: 'eleven',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      // id: 'oaiia6Mg0SGGjwOj6LEaKKbrpa6s',
      id: 'PDU17219TROaotpmwXD7jUL5yD2nAOEU0aLXwltsZ',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0001',
      // useTemplateId: 'tkuMxG7R-1c52PPzySMBcl0HFTN7r2ILl8T9-zP5NNQ',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-29',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝的阴历', year: '1995', date: '10-08',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝贝的阳历', year: '1995', date: '11-29',
        }
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 出生日
        { keyword: 'born_day', date: '1995-11-29' }
      ],
      mensesList:[
        {year: '2022',dateStart:'03-25',dateEnd:'04-02'},
        {year: '2022',dateStart:'04-23',dateEnd:'04-30'},
        {year: '2022',dateStart:'05-18',dateEnd:'05-25'},
        {year: '2022',dateStart:'06-18',dateEnd:'06-25'},
        {year: '2022',dateStart:'07-13',dateEnd:'07-20'},
        {year: '2022',dateStart:'08-09',dateEnd:'08-16'},
        {year: '2022',dateStart:'09-06',dateEnd:'09-13'},
        {year: '2022',dateStart:'10-09',dateEnd:'10-16'}
      ]
    },
    {
      // 想要发送的人的名字
      name: '自己',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'PDU16917TLh2FVQWO4xZeJrVyeHtqESZ1A1U5keXN',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0001',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '08-23',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '阿杰的阴历', year: '1996', date: '07-10',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '阿杰的阳历', year: '1996', date: '08-23',
        }
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 出生日
        { keyword: 'born_day', date: '1996-08-23' }
      ],
      mensesList:[
        {year: '2022',dateStart:'03-25',dateEnd:'04-02'},
        {year: '2022',dateStart:'04-23',dateEnd:'04-30'},
        {year: '2022',dateStart:'05-18',dateEnd:'05-25'},
        {year: '2022',dateStart:'06-18',dateEnd:'06-25'},
        {year: '2022',dateStart:'07-13',dateEnd:'07-20'},
        {year: '2022',dateStart:'08-09',dateEnd:'08-16'},
        {year: '2022',dateStart:'09-06',dateEnd:'09-13'},
        {year: '2022',dateStart:'10-09',dateEnd:'10-16'}
      ]
    }
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '0002',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'PDU16917TVkiBmRzhYiU9HPv8V8VJIq6EOazcDAd0',
    }
  ],

}

module.exports = USER_CONFIG

