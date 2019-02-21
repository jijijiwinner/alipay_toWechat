// 获取应用实例
const arch = require('../../arch/arch.js');

const app = getApp();

Page({
	data: {
		remind: '加载中',
		help_status: false,
		userid_focus: false,
		passwd_focus: false,
		userid: '',
		passwd: '',
		angle: 0,
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
