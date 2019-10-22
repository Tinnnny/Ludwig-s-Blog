const themeConfig = require('./config/theme/')

module.exports = {
  title: 'Ludwig-s-Blog',
  base: '/Ludwig-s-Blog/',
  description: 'Enjoy when you can, and endure when you must.',
  dest: 'public',
  head: [
    ['link', {rel: 'icon', href: '/vue-logo.png'}],
    ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'}]
  ],
  theme: 'reco',
  themeConfig //: {
  //   valineConfig: {
  //     appId: '123',// your appId
  //     appKey: '234', // your appKey
  //   }
  // }
  ,
  markdown: {
    lineNumbers: true
  },
  plugins: [['@vuepress/medium-zoom', 'flowchart'],
    [
      'vuepress-plugin-helper-live2d',{
      live2d: {
        // 是否启用(关闭请设置为false)(default: true)
        enable: true,
        model: 'hibiki',
        display: {
          position: "right", // 显示位置：left/right(default: 'right')
          width: 135, // 模型的长度(default: 135)
          height: 300, // 模型的高度(default: 300)
          hOffset: 65, //  水平偏移(default: 65)
          vOffset: 0, //  垂直偏移(default: 0)
        },
        mobile: {
          show: false // 是否在移动设备上显示(default: false)
        },
        react: {
          opacity: 0.8 // 模型透明度(default: 0.8)
        }
      }
    }]
  ]
};
