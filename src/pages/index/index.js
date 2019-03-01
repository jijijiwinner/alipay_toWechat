// 获取应用实例
const arch = require('../../arch/arch.js');

const app = getApp();

Page({
	data: {
		toView: 'red',
		scrollTop: 100,
		background: [
			'http://zhonganbio.oss-cn-hzfinance.aliyuncs.com/images/alipay/images/banner.png',
			'http://zhonganbio.oss-cn-hzfinance.aliyuncs.com/images/bless/save/good_skin_blessing.png',
			'http://zhonganbio.oss-cn-hzfinance.aliyuncs.com/images/bless/save/irresistible_blessing.png',
		],

		list: [
			{
				id: 1,
				name: '人气爆品',
				introduction: '人人pick的黑科技',
				iconImageUrl:
					'https://zhonganbio.oss-cn-hzfinance.aliyuncs.com/banner/o_1chkf2rv270nkhuk3fcedd7bg.jpg',
				goods: [
					{
						id: 1,
						simpleName: '个人基因组检测',
						fullName: '个人基因组检测',
						sellPoint: '商品卖点',
						introduction: '200个项目，深度剖析自我',
						bigPicUrl:
							'https://zhonganbio.oss-cn-hzfinance.aliyuncs.com/banner/o_1chkf2rv270nkhuk3fcedd7bg.jpg',
						smallPicUrl:
							'https://zhonganbio.oss-cn-hzfinance.aliyuncs.com/banner/o_1chkf2rv270nkhuk3fcedd7bg.jpg',
						salesPrice: 199.99,
						marketPrice: 12999,
						tag: {
							id: 1,
							name: '即将上线',
							bigIconImageUrl:
								'https://zhonganbio.oss-cn-hzfinance.aliyuncs.com/banner/o_1chkf2rv270nkhuk3fcedd7bg.jpg',
							smallIconImageUrl:
								'https://zhonganbio.oss-cn-hzfinance.aliyuncs.com/banner/o_1chkf2rv270nkhuk3fcedd7bg.jpg',
						},
					},
				],
			},
			{
				id: 2,
				name: '儿童成长',
				introduction: '宝宝的成长修炼手册',
				iconImageUrl:
					'https://zhonganbio.oss-cn-hzfinance.aliyuncs.com/banner/o_1chkf2rv270nkhuk3fcedd7bg.jpg',
				goods: [
					{
						id: 2,
						simpleName: '学习能力基因检测',
						fullName: '学习能力基因检测全称',
						sellPoint: '商品卖点',
						introduction: '6大学习能力，优劣一测便知',
						bigPicUrl:
							'https://zhonganbio.oss-cn-hzfinance.aliyuncs.com/banner/o_1chkf2rv270nkhuk3fcedd7bg.jpg',
						smallPicUrl:
							'http://zhonganbio.oss-cn-hzfinance.aliyuncs.com/images/alipay/images/goods-list/goods1.png',
						salesPrice: 199.99,
						marketPrice: 12999,
						tag: {
							id: 1,
							name: '即将上线',
							bigIconImageUrl:
								'https://zhonganbio.oss-cn-hzfinance.aliyuncs.com/banner/o_1chkf2rv270nkhuk3fcedd7bg.jpg',
							smallIconImageUrl:
								'https://zhonganbio.oss-cn-hzfinance.aliyuncs.com/banner/o_1chkf2rv270nkhuk3fcedd7bg.jpg',
						},
					},
					{
						id: 3,
						simpleName: '兴趣潜力基因检测',
						fullName: '兴趣潜力基因检测全称',
						sellPoint: '商品卖点',
						introduction: '兴趣培养不再盲目',
						bigPicUrl:
							'https://zhonganbio.oss-cn-hzfinance.aliyuncs.com/banner/o_1chkf2rv270nkhuk3fcedd7bg.jpg',
						smallPicUrl:
							'http://zhonganbio.oss-cn-hzfinance.aliyuncs.com/images/alipay/images/goods-list/goods2.png',
						salesPrice: 199.99,
						marketPrice: 12999,
						tag: {
							id: 1,
							name: '即将上线',
							bigIconImageUrl:
								'https://zhonganbio.oss-cn-hzfinance.aliyuncs.com/banner/o_1chkf2rv270nkhuk3fcedd7bg.jpg',
							smallIconImageUrl:
								'https://zhonganbio.oss-cn-hzfinance.aliyuncs.com/banner/o_1chkf2rv270nkhuk3fcedd7bg.jpg',
						},
					},
				],
			},
			{
				id: 3,
				name: '女性健康',
				introduction: '防大于治，爱家人也要爱自己',
				iconImageUrl:
					'https://zhonganbio.oss-cn-hzfinance.aliyuncs.com/banner/o_1chkf2rv270nkhuk3fcedd7bg.jpg',
				goods: [
					{
						id: 4,
						simpleName: '宫颈癌初筛HPV检测',
						fullName: '宫颈癌初筛HPV检测全称',
						sellPoint: '商品卖点',
						introduction: '14种HPV亚型，预防“性”风险',
						bigPicUrl:
							'https://zhonganbio.oss-cn-hzfinance.aliyuncs.com/banner/o_1chkf2rv270nkhuk3fcedd7bg.jpg',
						smallPicUrl:
							'http://zhonganbio.oss-cn-hzfinance.aliyuncs.com/images/alipay/images/goods-list/goods4.png',
						salesPrice: 199.99,
						marketPrice: 12999,
						tag: {
							id: 1,
							name: '即将上线',
							bigIconImageUrl:
								'https://zhonganbio.oss-cn-hzfinance.aliyuncs.com/banner/o_1chkf2rv270nkhuk3fcedd7bg.jpg',
							smallIconImageUrl:
								'http://zhonganbio.oss-cn-hzfinance.aliyuncs.com/images/alipay/images/goods-list/goods3.png',
						},
					},
					{
						id: 5,
						simpleName: '女性10项肿瘤易感基因检测',
						fullName: '女性10项肿瘤易感基因检测全称',
						sellPoint: '商品卖点',
						introduction: '女性10项常见肿瘤风险',
						bigPicUrl:
							'https://zhonganbio.oss-cn-hzfinance.aliyuncs.com/banner/o_1chkf2rv270nkhuk3fcedd7bg.jpg',
						smallPicUrl:
							'http://zhonganbio.oss-cn-hzfinance.aliyuncs.com/images/alipay/images/goods-list/goods4.png',
						salesPrice: 199.99,
						marketPrice: 12999,
						tag: {
							id: 1,
							name: '即将上线',
							bigIconImageUrl:
								'https://zhonganbio.oss-cn-hzfinance.aliyuncs.com/banner/o_1chkf2rv270nkhuk3fcedd7bg.jpg',
							smallIconImageUrl:
								'https://zhonganbio.oss-cn-hzfinance.aliyuncs.com/banner/o_1chkf2rv270nkhuk3fcedd7bg.jpg',
						},
					},
				],
			},
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
	upper(e) {
		console.log(e);
	},
	lower(e) {
		console.log(e);
	},
	scroll(e) {
		console.log(e.detail.scrollTop);
	},
	scrollToTop(e) {
		console.log(e);
		this.setData({
			scrollTop: 0,
		});
	},
});
