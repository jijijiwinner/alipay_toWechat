const app = getApp();
Page({
	data: {
		telephone: '15345153126',
		modalOpened: false,
	},
	onShow() {},
	openModal() {
		this.setData({
			modalOpened: true,
		});
	},
	onModalClick() {
		this.setData({
			modalOpened: false,
		});
	},
	onModalClose() {
		this.setData({
			modalOpened: false,
		});
	},
});
