// 获取应用实例
const arch = require('../../arch/arch.js');

const app = getApp();

Page({
	data: {},
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
