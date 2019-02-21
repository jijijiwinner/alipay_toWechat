// app.js
const arch = require('./arch/arch.js');

App({
	onLaunch: function (options) {
		console.log('App Launch', options);
		console.log('getSystemInfoSync', arch.phone.getSystemInfoSync());
		console.log('SDKVersion', arch.phone.getSDKVersion());

		arch.phone.checkUpdate();
	},
	onShow: function () {
		// console.error('App Show');
	},
	onHide: function () {
		console.error('App Hide');
	},
	globalData: {
		g_isPlayingMusic: false,
		g_currentMusicPostId: null,
		doubanBase: 'https://douban.uieee.com',
	},
});
