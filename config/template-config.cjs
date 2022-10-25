/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '宝贝的每日提醒！😊',
    desc: `
      **{{date.DATA}}**
      
      下个休息日：{{holidaytts.DATA}}
      
      ---
      
      城市：{{city.DATA}}
      
      天气：{{weather.DATA}}{{weather_icon.DATA}}
      
      气温:{{min_temperature.DATA}}～{{max_temperature.DATA}}
      
      风向: {{wind_direction.DATA}}{{wind_scale.DATA}}
    
      ---
      
      {{comprehensive_horoscope.DATA}}
      
      ---
      
      今天是宝贝出生第{{born_day.DATA}}天
      
      {{birthday_message.DATA}}
      
      ---
      
      {{menses_date.DATA}}
    `
  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG
