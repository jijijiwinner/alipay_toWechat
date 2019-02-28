// 获取应用实例
const arch = require('../../arch/arch.js');

const app = getApp();

Page({
	data: {
		background: [
			'http://zhonganbio.oss-cn-hzfinance.aliyuncs.com/images/bless/save/good_career_blessing.png',
			'http://zhonganbio.oss-cn-hzfinance.aliyuncs.com/images/bless/save/good_skin_blessing.png',
			'http://zhonganbio.oss-cn-hzfinance.aliyuncs.com/images/bless/save/irresistible_blessing.png',
		],
		// background: ['red', 'green', 'blue'],
		indicatorDots: true,
		indicatorColor: '#FFFFF',
		indicatorActiveColor: '#FFFFF',
		autoplay: true,
		interval: 2000,
	},
	onLoad() {
		var _this = this;
		setTimeout(function () {
			_this.setData({
				remind: '',
			});
		}, 1000);
	},
	bindViewTap() {
		arch.page.navigateTo('../movies/movies');
	},
});
