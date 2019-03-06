const app = getApp();
Page({
	data: {
		address:
			'众安生命物流部，上海市徐汇区钦州北路1001号光启大楼1801室，021-80181502',
		bindCount: 1,
		unReturnCount: 1,
		money: '',
		userId: '',
		schoolName: '',
		telephone: '123***1234',
		id: '',
	},
	onShow() {
		let that = this;
		let userId = my.getStorageSync({
			key: 'userId', // 缓存数据的key
		}).data;
		that.setData({ userId: userId });
		that.getInfo();
	},
	// 复制寄回物流信息
	goCopy() {
		my.setClipboard({
			text: this.data.address,
		});
	},

	// 获取用户信息
	getInfo() {
		let that = this;
		let url = '/miniprogram/user_info';
		let time = new Date().getTime();
		let sign = app.common.createSign({
			timestamp: time,
			userName: that.data.userId,
		});
		let params = {
			timestamp: time,
			userName: that.data.userId,
			sign: sign,
		};
		// 网络请求
		app.req.requestPostApi(url, params, this, (res) => {
			that.setData({
				schoolName: res.res.schoolName,
				telephone: res.res.phone,
				id: res.res.id,
			});
		});
	},
	// 退出登录
	goSetting() {
		my.navigateTo({ url: '/pages/login-out/login-out' });
	},
});
